import { Accounts } from './resources/accounts';
import { Token } from './resources/token';
import { Transactions } from './resources/transactions';

export class AmnisClient {
  token: Token;
  accounts: Accounts;
  transactions: Transactions;

  constructor(config: { client_id: string; client_secret: string }) {
    this.token = new Token(config);
    this.accounts = new Accounts(config);
    this.transactions = new Transactions(config);
  }
}
