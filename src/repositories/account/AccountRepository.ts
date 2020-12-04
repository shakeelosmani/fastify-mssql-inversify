import 'reflect-metadata';
import { QueryBase } from '../../utils/queryutils/QueryBase';
import { Account } from '../../models/account/Account';
import { IResult } from 'mssql';
import { IAccountRepository } from './IAccountRepository';
import { injectable } from 'inversify';

@injectable()
export class AccountRepository
  extends QueryBase<Account>
  implements IAccountRepository {
  private accounts: Array<Account> = [];
  private query: string = `SELECT * FROM ACCOUNT ORDER BY ACCOUNT_ID DESC`;

  async getAllAccounts(): Promise<Array<Account>> {
    const resultSet: IResult<Account> = await this.executeQuery(this.query);
    resultSet.recordset.map((v: Account) => {
      this.accounts.push(new Account(v));
    });
    return this.accounts;
  }
}
