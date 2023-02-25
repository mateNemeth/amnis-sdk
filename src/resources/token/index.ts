import { URLBuilder } from '../../common/classes/urlBuilder';
import { Config } from '../../common/types/config';
import { AccessToken } from './types';

export class TokenService {
  private client_id: string;
  private client_secret: string;
  private urlBuilder = new URLBuilder();
  protected apiRoute = 'token';

  constructor(config: Config) {
    this.client_id = config.client_id;
    this.client_secret = config.client_secret;
  }

  async createToken(): Promise<AccessToken> {
    return fetch(this.urlBuilder.buildUrl([this.apiRoute]), {
      method: 'POST',
      body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: this.client_id,
        client_secret: this.client_secret
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((r) => {
      if (r.ok) {
        return r.json();
      }
      throw r;
    });
  }
}
