import { IResult } from 'mssql';

export interface IQuery<T> {
  executeQuery(query: string): Promise<IResult<T>>;
}
