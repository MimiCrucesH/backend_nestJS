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

      daily: "weather_code",

      current: "temperature_2m",

      hourly: "temperature_2m,precipitation_probability,precipitation,rain,showers,weather_code,relative_humidity_2m",
      
      start_date: "2026-04-20",
	    end_date: "2026-04-20",
      timezone: "auto"
    };

    const url = "https://api.open-meteo.com/v1/forecast";

    const responses = await fetchWeatherApi(url, params);

    const response = responses[0];

    const current = response.current();

    const hourly = response.hourly();

    const daily = response.daily();

    return {
      latitude: response.latitude(),
      longitude: response.longitude(),
      //elevation: response.elevation(),

      current: {
        temperature: current?.variables(0)?.value(),
      },
      hourly: {
        //time: hourly?.time(),
        //time: new Date(Number(hourly?.time()) * 1000).toISOString(),
        temperature: hourly?.variables(0)?.valuesArray(),
        precipitation_probability: hourly?.variables(1)?.valuesArray(),
        precipitation: hourly?.variables(2)?.valuesArray(),
        rain: hourly?.variables(3)?.valuesArray(),
        showers: hourly?.variables(4)?.valuesArray(),
        weather_code: hourly?.variables(5)?.valuesArray(),
        relative_humidity_2m: hourly?.variables(6)?.valuesArray(),
      },
      daily: {
       // time: daily?.time(),
        weather_code: daily?.variables(0)?.valuesArray(),
      },
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

