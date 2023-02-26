import { Resource } from '../../common/types/api';
import { Base } from '../base';
import { Information } from './types';

export class Info extends Base {
  protected apiRoute = 'info';

  public getInfo() {
    return this.apiClient.get<Resource<Information>>(
      this.urlBuilder.buildUrl([this.apiRoute])
    );
  }
}
