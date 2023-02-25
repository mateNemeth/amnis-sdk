import {
  IResourceManager,
  ResourceManager
} from '../../common/classes/resource';
import { Base } from '../base';
import { TokenService } from '../token';
import { Transaction, TransactionFilters } from './types';

export class Transactions
  extends Base
  implements IResourceManager<Transaction>
{
  protected apiRoute = 'transactions';
  private resourceManager: ResourceManager<Transaction>;

  constructor(tokenService: TokenService) {
    super(tokenService);
    this.resourceManager = new ResourceManager<Transaction>(tokenService);
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
