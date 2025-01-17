import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mysqlConfig, serverConfig } from './config/configuration';
import { UserModule } from './models/users/user.module';
import { MysqlDatabaseProviderModule } from './providers/database/mysql/MysqlDatabaseProviderModule';
import { AddressesModule } from './models/addresses/addresses.module';
import { CategoryModule } from './models/categories/category.module';
import { ServicesModule } from './models/services/services.module';

@Module({
  imports: [
    AddressesModule,
    UserModule,
    CategoryModule,
    ServicesModule,
    MysqlDatabaseProviderModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      load: [mysqlConfig, serverConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
