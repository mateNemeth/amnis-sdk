import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import jwtDecode from 'jwt-decode';
import { TokenService } from '../../resources/token';
import { AccessToken } from '../../resources/token/types';
import { ApiErrorResponse, ApiSuccessResponse } from '../types/api';
import { AnyType } from '../types/utility';

export const HEADERS: Readonly<Record<string, string | boolean>> = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Credentials': true,
  'X-Requested-With': 'XMLHttpRequest'
};

export class ApiClient {
  private instance: AxiosInstance | null = null;
  private tokenService: TokenService;
  private _accessToken?: AccessToken;
  private _debugMode: boolean;
  get accessToken(): AccessToken | undefined {
    return this._accessToken;
  }

  constructor(tokenService: TokenService, debugMode = false) {
    this.tokenService = tokenService;
    this._debugMode = debugMode;
    this.initToken();
  }

  private get http(): AxiosInstance {
    return this.instance !== null ? this.instance : this.initHttp();
  }

  private async initToken() {
    this._accessToken = await this.tokenService.createToken();
  }

  private initHttp() {
    const http = axios.create({
      headers: HEADERS,
      withCredentials: true
    });

    http.interceptors.request.use(async (config) => {
      if (!this._accessToken || !this.isTokenValid()) {
        await this.initToken();
      }

      config.headers.Authorization = `Bearer ${this._accessToken?.access_token}`;
      return config;
    });

    http.interceptors.response.use(
      (response) => {
        const newResponse = {
          ...response.data,
          status: 'success'
        };
        if (this._debugMode) {
          newResponse.request = response.request;
        }

        return newResponse;
      },
      (error: AxiosError<ApiErrorResponse>) => {
        const status = error.response?.status;

        let newResponse: Partial<ApiErrorResponse & { request?: any }> = {
          status: 'error',
          statusCode: status
        };

        if (status === 500) {
          newResponse.detail =
            'The server returned a "500 Internal Server Error';
          newResponse.title = 'Internal server error';
        } else {
          newResponse = {
            ...newResponse,
            ...error.response?.data
          };
        }

        if (this._debugMode) {
          newResponse = { ...newResponse, request: error.request };
        }

        return newResponse;
      }
    );

    this.instance = http;
    return http;
  }

  private isTokenValid(): boolean {
    if (!this._accessToken?.access_token) return false;

    const decoded = jwtDecode<{ exp: number }>(this._accessToken?.access_token);

    if (!decoded) return false;

    const expirationDate = new Date(decoded.exp * 1000);
    const now = new Date();

    if (expirationDate.getTime() - 10 * 60 * 1000 >= now.getTime()) {
      return false;
    }

    return true;
  }

  request<T = AnyType>(
    url: URL,
    config: AxiosRequestConfig = {}
  ): Promise<ApiSuccessResponse<T> | ApiErrorResponse> {
    return this.http.request({ ...config, url: url.toString() });
  }

  get<T = AnyType>(
    url: URL,
    config?: AxiosRequestConfig
  ): Promise<ApiSuccessResponse<T> | ApiErrorResponse> {
    return this.http.get(url.toString(), config);
  }

  post<T = AnyType, R = AnyType>(
    url: URL,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<ApiSuccessResponse<R> | ApiErrorResponse> {
    return this.http.post(url.toString(), data, config);
  }

  put<T = AnyType>(
    url: URL,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<ApiSuccessResponse<T> | ApiErrorResponse> {
    return this.http.put(url.toString(), data, config);
  }

  delete<T = AnyType>(
    url: URL,
    config?: AxiosRequestConfig
  ): Promise<ApiSuccessResponse<T> | ApiErrorResponse> {
    return this.http.delete(url.toString(), config);
  }
}
