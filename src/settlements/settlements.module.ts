import { Module } from '@nestjs/common';
import { SettlementsService } from './settlements.service';
import { SettlementsController } from './settlements.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Settlement } from './entities/settlement.entity';

@Module({
  controllers: [SettlementsController],
  providers: [SettlementsService],
  imports : [TypeOrmModule.forFeature([
    Settlement
  ])]
})
export class SettlementsModule {}
