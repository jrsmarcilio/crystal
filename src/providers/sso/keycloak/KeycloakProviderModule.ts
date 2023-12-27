import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import {
  AuthGuard,
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
} from 'nest-keycloak-connect';
import { keycloakConfig } from 'src/config/configuration';

@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: keycloakConfig().url,
      realm: keycloakConfig().realm,
      clientId: keycloakConfig().clientId,
      secret: keycloakConfig().clientSecret,
    }),
  ],

  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class KeycloakProviderModule { }
