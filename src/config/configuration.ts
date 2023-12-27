import mysqlConfig, { IMysqlConfig } from './database/mysql/mysql.config';
import keycloakConfig, { IKeycloakConfig } from './keycloak/keycloak.config';
import serverConfig, { IServerConfig } from './server/server.config';

export { IKeycloakConfig, IMysqlConfig, IServerConfig, keycloakConfig, mysqlConfig, serverConfig };

