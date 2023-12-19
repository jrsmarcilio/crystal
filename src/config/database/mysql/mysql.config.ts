import { registerAs } from '@nestjs/config';

const MysqlConfig = registerAs('database', () => ({
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT, 10),
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}));

export type IMysqlConfig = typeof MysqlConfig;

export default MysqlConfig;
