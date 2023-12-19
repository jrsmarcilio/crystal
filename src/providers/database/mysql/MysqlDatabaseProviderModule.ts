import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { mysqlConfig } from 'src/config/configuration';
import { AddressEntity } from 'src/models/addresses/entities/address.entity';
import { AppointmentEntity } from 'src/models/appointments/entities/appointment.entity';
import { CategoryEntity } from 'src/models/categories/entities/category.entity';
import { RoleEntity } from 'src/models/roles/entities/roles.entity';
import { ServiceEntity } from 'src/models/services/entities/service.entity';
import { UserSettingsEntity } from 'src/models/user_settings/entities/userSettings.entity';
import { UserEntity } from 'src/models/users/entities/user.entity';
import { DatabaseType } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forFeature(mysqlConfig)],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql' as DatabaseType,
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.database'),
        synchronize: true,
        entities: [
          UserEntity,
          AddressEntity,
          CategoryEntity,
          ServiceEntity,
          RoleEntity,
          UserSettingsEntity,
          AppointmentEntity,
        ],
      }),
      inject: [ConfigService],
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class MysqlDatabaseProviderModule {}
