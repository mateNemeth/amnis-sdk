import { URLBuilder } from '../common/classes/urlBuilder';
import { ApiResponse } from '../common/types/api';
import { Config } from '../common/types/config';

export abstract class Base {
  protected client_id: string;
  protected client_secret: string;
  protected urlBuilder = new URLBuilder();

  constructor(config: Config) {
    this.client_id = config.client_id;
    this.client_secret = config.client_secret;
  }

  protected async request<T>(
    url: URL,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    return fetch(url, options).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    });
  }
}
