import {
  IResourceManager,
  ResourceManager
} from '../../common/classes/resource';
import { Base } from '../base';
import { TokenService } from '../token';
import { Account, AccountFilters } from './types';

export class Accounts extends Base implements IResourceManager<Account> {
  protected apiRoute = 'accounts';
  private resourceManager: ResourceManager<Account>;

  constructor(tokenService: TokenService) {
    super(tokenService);
    this.resourceManager = new ResourceManager<Account>(tokenService);
  }

  public getResourceById(id: number) {
    return this.resourceManager.getResourceById(
      this.urlBuilder.buildUrl([this.apiRoute, id])
    );
  }

  public getAllResources(filters?: AccountFilters) {
    return this.resourceManager.getAllResources(
      this.urlBuilder.buildUrl([this.apiRoute], filters)
    );
  }
}
