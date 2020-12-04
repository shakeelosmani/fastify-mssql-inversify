import { Account } from '../../models/account/Account';

export interface IAccountService {
  getAllAccounts(): Promise<Array<Account>>;
}
