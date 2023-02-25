import {
  IResourceManager,
  ResourceManager
} from '../../common/classes/resource';
import { Config } from '../../common/types/config';
import { Base } from '../base';
import { Transaction, TransactionFilters } from './types';

export class Transactions
  extends Base
  implements IResourceManager<Transaction>
{
  protected apiRoute = 'transactions';
  private resourceManager: ResourceManager<Transaction>;

  constructor(config: Config) {
    super(config);
    this.resourceManager = new ResourceManager<Transaction>(config);
  }

  public getResourceById(token: string, id: number) {
    return this.resourceManager.getResourceById(
      this.urlBuilder.buildUrl([this.apiRoute, id]),
      token
    );
  }

  public getAllResources(token: string, filters?: TransactionFilters) {
    return this.resourceManager.getAllResources(
      this.urlBuilder.buildUrl([this.apiRoute], filters),
      token
    );
  }
}
