import { IResourceManager, ResourceManager } from '../../common/classes/resource';
import { Config } from '../../common/types/config';
import { Base } from '../base';
import { Account, AccountFilters } from './types';

export class Accounts extends Base implements IResourceManager<Account> {
  protected apiRoute = 'accounts';
  private resourceManager: ResourceManager<Account>;

  constructor(config: Config) {
    super(config);
    this.resourceManager = new ResourceManager<Account>(config);
  }

  public getResourceById(token: string, id: number) {
    return this.resourceManager.getResourceById(this.urlBuilder.buildUrl([this.apiRoute, id]), token);
  }

  public getAllResources(token: string, filters?: AccountFilters) {
    return this.resourceManager.getAllResources(this.urlBuilder.buildUrl([this.apiRoute], filters), token);
  }
}