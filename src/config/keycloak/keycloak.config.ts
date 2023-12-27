import { registerAs } from '@nestjs/config';

const keycloakConfig = registerAs('server', () => ({
  url: process.env.KEYCLOAK_URL,
  realm: process.env.KEYCLOAK_REALM,
  clientId: process.env.KEYCLOAK_CLIENT_ID,
  clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
}));

export type IKeycloakConfig = typeof keycloakConfig;

export default keycloakConfig;
