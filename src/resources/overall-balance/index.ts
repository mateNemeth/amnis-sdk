import { Base } from '../base';
import { IOverallBalance } from './types';

export class OverallBalance extends Base {
  protected apiRoute = 'overall-balance';

  public getOverallBalance() {
    return this.apiClient.get<IOverallBalance>(
      this.urlBuilder.buildUrl([this.apiRoute])
    );
  }
}
