import axios from 'axios';
import { HEADERS } from '../../common/classes/apiClient';
import { URLBuilder } from '../../common/classes/urlBuilder';
import { Config } from '../../common/types/config';
import { AccessToken } from './types';

export class TokenService {
  private client_id: string;
  private client_secret: string;
  private urlBuilder = new URLBuilder();
  private apiRoute = 'token';

  constructor(config: Config) {
    this.client_id = config.client_id;
    this.client_secret = config.client_secret;
  }

  async createToken(): Promise<AccessToken> {
    const response = await axios.post<AccessToken>(
      this.urlBuilder.buildUrl([this.apiRoute]).toString(),
      {
        grant_type: 'client_credentials',
        client_id: this.client_id,
        client_secret: this.client_secret
      },
      {
        headers: HEADERS
      }
    );

    return response.data;
  }
}
