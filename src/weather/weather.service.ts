import { Injectable } from '@nestjs/common';
import { CreateWeatherDto } from './dto/create-weather.dto';
import { UpdateWeatherDto } from './dto/update-weather.dto';
import { HttpService } from '@nestjs/axios';
//API de openmeteo
import { fetchWeatherApi } from "openmeteo";


@Injectable()
export class WeatherService {
  constructor(private http: HttpService) {}

  async getWeather(lat: number, lon: number) {
    
    const params = {
      latitude: lat,
      longitude: lon,
      current: "temperature_2m",
      hourly: "temperature_2m,weather_code",
      forecast_days: 1,
      timezone: "auto"
    };

    const url = "https://api.open-meteo.com/v1/forecast";

    const responses = await fetchWeatherApi(url, params);

    const response = responses[0];

    const current = response.current();

    const hourly = response.hourly();

    return {
      latitude: response.latitude(),
      longitude: response.longitude(),
      elevation: response.elevation(),
      current: {
        temperature: current?.variables(0)?.value(),
      },
      hourly: {
        temperature: hourly?.variables(0)?.valuesArray(),
        weather_code: hourly?.variables(1)?.valuesArray(),
      }
    };
  }
  
  create(createWeatherDto: CreateWeatherDto) {
    return 'This action adds a new weather';
  }

  findAll() {
    return `This action returns all weather`;
  }

  findOne(id: number) {
    return `This action returns a #${id} weather`;
  }

  update(id: number, updateWeatherDto: UpdateWeatherDto) {
    return `This action updates a #${id} weather`;
  }

  remove(id: number) {
    return `This action removes a #${id} weather`;
  }
}

