import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { AuthModule } from './auth/auth.module';
import { MunicipalitiesModule } from './municipalities/municipalities.module';
import { SettlementsModule } from './settlements/settlements.module';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [TasksModule,
    /* TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Mimi19',
      database: 'login_bd',
      autoLoadEntities: true,
      synchronize: true, 
    }) */
   ConfigModule.forRoot({
    isGlobal: true,
   }), 

   TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (config: ConfigService) => ({
      type: 'postgres',
      host: config.get<string>('DB_HOST'),
      port: config.get<number>('DB_PORT'),
      username: config.get<string>('DB_USERNAME'),
      password: config.get<string>('DB_PASSWORD'),
      database: config.get('DB_NAME'),
      autoLoadEntities: true,
      synchronize: true,

    }),
}), UsersModule, RolesModule, PermissionsModule, AuthModule, MunicipalitiesModule, SettlementsModule, WeatherModule
  ],
  controllers: [],
})
export class AppModule {

}
