import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mysqlConfig, serverConfig } from './config/configuration';
import { AddressesModule } from './models/addresses/addresses.module';
import { CategoryModule } from './models/categories/category.module';
import { ServicesModule } from './models/services/services.module';
import { UserModule } from './models/users/user.module';
import { MysqlDatabaseProviderModule } from './providers/database/mysql/MysqlDatabaseProviderModule';
import { KeycloakProviderModule } from './providers/sso/keycloak/KeycloakProviderModule';

@Module({
  imports: [
    AddressesModule,
    UserModule,
    CategoryModule,
    ServicesModule,
    MysqlDatabaseProviderModule,
    KeycloakProviderModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      load: [mysqlConfig, serverConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
