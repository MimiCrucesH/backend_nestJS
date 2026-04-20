import { Module } from '@nestjs/common';
import { MunicipalitiesService } from './municipalities.service';
import { MunicipalitiesController } from './municipalities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Municipality } from './entities/municipality.entity';

@Module({
  controllers: [MunicipalitiesController],
  providers: [MunicipalitiesService],
  imports: [
    TypeOrmModule.forFeature([Municipality]) // 👈 ESTO FALTA
  ],
 
})
export class MunicipalitiesModule {}
