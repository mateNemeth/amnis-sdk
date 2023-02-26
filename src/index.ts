import { ApiClient } from './common/classes/apiClient';
import { Accounts } from './resources/accounts';
import { Info } from './resources/info';
import { TokenService } from './resources/token';
import { AccessToken } from './resources/token/types';
import { Transactions } from './resources/transactions';

export class AmnisClient {
  private tokenService: TokenService;
  private apiClient: ApiClient;
  info: Info;
  accounts: Accounts;
  transactions: Transactions;

  get accessToken(): AccessToken | undefined {
    return this.apiClient.accessToken;
  }

  constructor(config: { client_id: string; client_secret: string }) {
    this.tokenService = new TokenService(config);
    this.apiClient = new ApiClient(this.tokenService);
    this.info = new Info(this.apiClient);
    this.accounts = new Accounts(this.apiClient);
    this.transactions = new Transactions(this.apiClient);
  }
}
