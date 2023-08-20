import { ResourceManager } from '../../common/classes/resourceManager';
import {
  WalletTransactionDetail,
  WalletTransactionDetailsFilters
} from './types';

export class WalletTransactionDetails extends ResourceManager<
  WalletTransactionDetail,
  WalletTransactionDetailsFilters
> {
  protected apiRoute = 'wallet_transaction_details';
}
