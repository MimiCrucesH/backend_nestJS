
import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsController } from './permissions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permissions } from './permission.entity';

@Module({
  providers: [PermissionsService],
  controllers: [PermissionsController],
  imports: [TypeOrmModule.forFeature([Permissions])],
})
export class PermissionsModule {}



