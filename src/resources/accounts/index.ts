import { ResourceManager } from '../../common/classes/resourceManager';
import { Account, AccountFilters } from './types';

export class Accounts extends ResourceManager<Account, AccountFilters> {
  protected apiRoute = 'accounts';
}
