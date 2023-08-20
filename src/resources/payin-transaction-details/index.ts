import { ResourceManager } from '../../common/classes/resourceManager';
import {
  PayinTransactionDetail,
  PayinTransactionDetailsFilters
} from './types';

export class PayinTransactionDetails extends ResourceManager<
  PayinTransactionDetail,
  PayinTransactionDetailsFilters
> {
  protected apiRoute = 'wallet_transaction_details';
}
