import { ApiClient } from '../../common/classes/apiClient';
import {
  IResourceManager,
  ResourceManager
} from '../../common/classes/resource';
import { Base } from '../base';
import { Account, AccountFilters } from './types';

export class Accounts extends Base implements IResourceManager<Account> {
  protected apiRoute = 'accounts';
  private resourceManager: ResourceManager<Account>;

  constructor(apiClient: ApiClient) {
    super(apiClient);
    this.resourceManager = new ResourceManager<Account>(apiClient);
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
