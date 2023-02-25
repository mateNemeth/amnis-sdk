import { ApiClient } from '../common/classes/apiClient';
import { URLBuilder } from '../common/classes/urlBuilder';
import { TokenService } from './token';

export abstract class Base {
  protected urlBuilder = new URLBuilder();
  protected apiClient: ApiClient;

  constructor(tokenService: TokenService) {
    this.apiClient = new ApiClient(tokenService);
  }
}
