import { Base } from '../base';
import { AccessToken } from './types';

export class Token extends Base {
  protected apiRoute = 'token';

  createToken(): Promise<AccessToken> {
    return this.request(this.urlBuilder.buildUrl([this.apiRoute]), {
      method: 'POST',
      body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: this.client_id,
        client_secret: this.client_secret
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
