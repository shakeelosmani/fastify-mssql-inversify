import { config } from 'mssql';

const ConnectionConfig: config = {
  user: process.env.DBUSER || 'sqlserveruser',
  password: process.env.DBPASSWORD || 'Infotech786',
  server: process.env.DBSERVER || '192.168.68.112',
  port: Number(process.env.DBPORT) || 1433,
  database: process.env.DB || 'test'
};

export { ConnectionConfig };
