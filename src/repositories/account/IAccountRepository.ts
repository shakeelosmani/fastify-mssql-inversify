import { Account } from '../../models/account/Account';

export interface IAccountRepository {
  getAllAccounts(): Promise<Array<Account>>;
}
