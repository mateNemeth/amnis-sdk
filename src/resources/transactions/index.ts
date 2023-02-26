import { ApiClient } from '../../common/classes/apiClient';
import { ResourceManager } from '../../common/classes/resource';
import { Base } from '../base';
import { Transaction, TransactionFilters } from './types';

export class Transactions extends Base {
  protected apiRoute = 'transactions';
  private resourceManager: ResourceManager<Transaction>;

  constructor(apiClient: ApiClient) {
    super(apiClient);
    this.resourceManager = new ResourceManager<Transaction>(apiClient);
  }
  public getResourceById(id: number) {
    return this.resourceManager.getResourceById(
      this.urlBuilder.buildUrl([this.apiRoute, id])
    );
  }

  public getAllResources(filters?: TransactionFilters) {
    return this.resourceManager.getAllResources(
      this.urlBuilder.buildUrl([this.apiRoute], filters)
    );
  }
}
