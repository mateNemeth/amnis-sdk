import { Accounts } from './resources/accounts';
import { Token } from './resources/token';

export class AmnisClient {
  token: Token;
  accounts: Accounts;

  constructor(config: { client_id: string; client_secret: string }) {
    this.token = new Token(config);
    this.accounts = new Accounts(config);
  }
}
