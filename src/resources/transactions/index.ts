import { ResourceManager } from '../../common/classes/resourceManager';
import { Transaction, TransactionFilters } from './types';

export class Transactions extends ResourceManager<
  Transaction,
  TransactionFilters
> {
  protected apiRoute = 'transactions';
}
