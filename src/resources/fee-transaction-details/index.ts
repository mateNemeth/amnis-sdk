import { ResourceManager } from '../../common/classes/resourceManager';
import { FeeTransactionDetail, FeeTransactionDetailsFilters } from './types';

export class FeeTransactionDetails extends ResourceManager<
  FeeTransactionDetail,
  FeeTransactionDetailsFilters
> {
  protected apiRoute = 'fee_transaction_details';
}
