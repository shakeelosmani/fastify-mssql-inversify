import mssql from 'mssql';
import { ConnectionConfig } from './connection-config';

const getConnectionPool = async () => {
  return await new mssql.ConnectionPool(ConnectionConfig).connect();
};

export { getConnectionPool };
