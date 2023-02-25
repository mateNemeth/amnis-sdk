import jwtDecode from 'jwt-decode';
import { TokenService } from '../../resources/token';
import { AccessToken } from '../../resources/token/types';
import { ApiResponse } from '../types/api';
import { URLBuilder } from './urlBuilder';

export class ApiClient {
  private tokenService: TokenService;
  private accessToken?: AccessToken;
  public urlBuilder = new URLBuilder();

  constructor(tokenService: TokenService) {
    this.tokenService = tokenService;
    this.init();
  }

  private async init() {
    this.accessToken = await this.tokenService.createToken();
  }

  private isTokenValid(): boolean {
    if (!this.accessToken?.access_token) return false;

    const decoded = jwtDecode<{ exp: number }>(this.accessToken?.access_token);

    if (!decoded) return false;

    const expirationDate = new Date(decoded.exp * 1000);
    const now = new Date();

    if (expirationDate.getTime() - 10 * 60 * 1000 >= now.getTime()) {
      return false;
    }

    return true;
  }

  public async request<T>(
    url: URL,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    if (!this.isTokenValid()) {
      await this.init();
    }

    return fetch(url, {
      ...options,
      headers: {
        ...options?.headers,
        Authorization: `Bearer ${this.accessToken?.access_token}`
      }
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response;
    });
  }
}
