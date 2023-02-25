import { Accounts } from './resources/accounts';
import { Info } from './resources/info';
import { TokenService } from './resources/token';
import { Transactions } from './resources/transactions';

export class AmnisClient {
  private tokenService: TokenService;
  info: Info;
  accounts: Accounts;
  transactions: Transactions;

  constructor(config: { client_id: string; client_secret: string }) {
    this.tokenService = new TokenService(config);
    this.info = new Info(this.tokenService);
    this.accounts = new Accounts(this.tokenService);
    this.transactions = new Transactions(this.tokenService);
  }
}
