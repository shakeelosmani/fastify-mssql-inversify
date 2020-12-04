import mssql, { ConnectionPool } from 'mssql';
import { ConnectionConfig } from './connection-config';

const getConnectionPool = async (): Promise<ConnectionPool> => {
  return await new mssql.ConnectionPool(ConnectionConfig).connect();
};

export { getConnectionPool };
