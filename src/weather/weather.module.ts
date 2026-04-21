import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {
  constructor(private readonly httpService: HttpService) {}

  

}
