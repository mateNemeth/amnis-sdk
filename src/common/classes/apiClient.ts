import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios';
import jwtDecode from 'jwt-decode';
import { TokenService } from '../../resources/token';
import { AccessToken } from '../../resources/token/types';
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
  get accessToken(): AccessToken | undefined {
    return this._accessToken;
  }

  constructor(tokenService: TokenService) {
    this.tokenService = tokenService;
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
      (response) => response.data,
      (error: AxiosError) => error.response?.data
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

  request<T = AnyType, R = AxiosResponse<T>>(
    url: URL,
    config: AxiosRequestConfig = {}
  ): Promise<R> {
    return this.http.request({ ...config, url: url.toString() });
  }

  get<T = AnyType, R = AxiosResponse<T>>(
    url: URL,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.get<T, R>(url.toString(), config);
  }

  post<T = AnyType, R = AxiosResponse<T>>(
    url: URL,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.post<T, R>(url.toString(), data, config);
  }

  put<T = AnyType, R = AxiosResponse<T>>(
    url: URL,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.put<T, R>(url.toString(), data, config);
  }

  delete<T = AnyType, R = AxiosResponse<T>>(
    url: URL,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.delete<T, R>(url.toString(), config);
  }
}
