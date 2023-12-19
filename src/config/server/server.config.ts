import { registerAs } from '@nestjs/config';

const serverConfig = registerAs('server', () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
}));

export type IServerConfig = typeof serverConfig;

export default serverConfig;
