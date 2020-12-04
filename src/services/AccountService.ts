import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { Account } from '../models/account/Account';
import { IAccountRepository } from '../repositories/Account/IAccountRepository';
import { IAccountService } from './IAccountService';
import { AccountRepository } from '../repositories/account/AccountRepository';

@injectable()
export class AccountService implements IAccountService {
  private _repo: IAccountRepository;

  public constructor(@inject(AccountRepository) repo: IAccountRepository) {
    this._repo = repo;
  }

  async getAllAccounts(): Promise<Array<Account>> {
    return await this._repo.getAllAccounts();
  }
}
