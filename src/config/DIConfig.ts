import 'reflect-metadata';
import { Container } from 'inversify';
import { AccountRepository } from '../repositories/account/AccountRepository';
import { IAccountRepository } from '../repositories/account/IAccountRepository';
import { AccountService } from '../services/AccountService';
import { IAccountService } from '../services/IAccountService';

const container = new Container();

container.bind<IAccountRepository>(AccountRepository).to(AccountRepository);
container.bind<IAccountService>(AccountService).to(AccountService);

export { container };
