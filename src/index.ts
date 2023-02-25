import { Accounts } from './resources/accounts';
import { Info } from './resources/info';
import { Token } from './resources/token';
import { Transactions } from './resources/transactions';

export class AmnisClient {
  token: Token;
  info: Info;
  accounts: Accounts;
  transactions: Transactions;

  constructor(config: { client_id: string; client_secret: string }) {
    this.token = new Token(config);
    this.info = new Info(config);
    this.accounts = new Accounts(config);
    this.transactions = new Transactions(config);
  }
}
