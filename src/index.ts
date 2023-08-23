import { ApiClient } from './common/classes/apiClient';
import { Accounts } from './resources/accounts';
import { CardTransactionDetails } from './resources/card-transaction-details';
import { Contacts } from './resources/contacts';
import { DealRequests } from './resources/deal-request';
import { FeeTransactionDetails } from './resources/fee-transaction-details';
import { FxTransactionDetails } from './resources/fx-transaction-details';
import { Info } from './resources/info';
import { PayinTransactionDetails } from './resources/payin-transaction-details';
import { PayoutTransactionDetails } from './resources/payout-transaction-details';
import { TokenService } from './resources/token';
import { AccessToken } from './resources/token/types';
import { Transactions } from './resources/transactions';
import { WalletTransactionDetails } from './resources/wallet-transaction-details';

export class AmnisClient {
  private tokenService: TokenService;
  private apiClient: ApiClient;
  info: Info;
  accounts: Accounts;
  transactions: Transactions;
  walletTransactionDetails: WalletTransactionDetails;
  cardTransactionDetails: CardTransactionDetails;
  feeTransactionDetails: FeeTransactionDetails;
  fxTransactionDetails: FxTransactionDetails;
  payinTransactionDetails: PayinTransactionDetails;
  payoutTransactionDetails: PayoutTransactionDetails;
  contacts: Contacts;
  dealRequests: DealRequests;

  get accessToken(): AccessToken | undefined {
    return this.apiClient.accessToken;
  }

  constructor(
    config: { client_id: string; client_secret: string },
    debug_mode = false
  ) {
    this.tokenService = new TokenService(config);
    this.apiClient = new ApiClient(this.tokenService, debug_mode);
    this.info = new Info(this.apiClient);
    this.accounts = new Accounts(this.apiClient);
    this.transactions = new Transactions(this.apiClient);
    this.walletTransactionDetails = new WalletTransactionDetails(
      this.apiClient
    );
    this.cardTransactionDetails = new CardTransactionDetails(this.apiClient);
    this.feeTransactionDetails = new FeeTransactionDetails(this.apiClient);
    this.fxTransactionDetails = new FxTransactionDetails(this.apiClient);
    this.payinTransactionDetails = new PayinTransactionDetails(this.apiClient);
    this.payoutTransactionDetails = new PayoutTransactionDetails(
      this.apiClient
    );
    this.contacts = new Contacts(this.apiClient);
    this.dealRequests = new DealRequests(this.apiClient);
  }
}
