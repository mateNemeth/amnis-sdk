import { ResourceManager } from '../../common/classes/resourceManager';
import {
  PayoutTransactionDetail,
  PayoutTransactionDetailsFilters
} from './types';

export class PayoutTransactionDetails extends ResourceManager<
  PayoutTransactionDetail,
  PayoutTransactionDetailsFilters
> {
  protected apiRoute = 'payout_transaction_details';
}
