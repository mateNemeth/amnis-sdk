import { Resource } from '../../common/types/api';
import { Base } from '../base';
import { Information } from './types';

export class Info extends Base {
  protected apiRoute = 'info';

  public getInfo(token: string) {
    return this.apiClient.request<Resource<Information>>(
      this.urlBuilder.buildUrl([this.apiRoute]),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    );
  }
}
