import { ResourceManager } from '../../common/classes/resourceManager';
import { FeeTransactionDetail, FeeTransactionDetailsFilters } from './types';

export class FeeTransactionDetails extends ResourceManager<
  FeeTransactionDetail,
  FeeTransactionDetailsFilters
> {
  protected apiRoute = 'wallet_transaction_details';
}
