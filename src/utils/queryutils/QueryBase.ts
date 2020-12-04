import { IQuery } from './IQuery';
import { getConnectionPool } from '../dbutils/connection-pool';
import { ConnectionPool, IResult } from 'mssql';
import { injectable } from 'inversify';

@injectable()
export class QueryBase<T> implements IQuery<T> {
  async executeQuery(query: string): Promise<IResult<T>> {
    const connectionPool: ConnectionPool = await getConnectionPool();
    const result: IResult<T> = await connectionPool.query(query);
    return result;
  }
}
