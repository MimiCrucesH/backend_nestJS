import { Injectable } from '@nestjs/common';
import { CreateWeatherDto } from './dto/create-weather.dto';
import { UpdateWeatherDto } from './dto/update-weather.dto';
import { HttpService } from '@nestjs/axios';
//API de openmeteo
import { fetchWeatherApi } from "openmeteo";


@Injectable()
export class WeatherService {
  constructor(private http: HttpService) { }

  async getWeather(lat: number, lon: number) {

    //const hoy = new Date().toISOString().split('T')[0]; Esta ño porque si es tarde da la fecha del dia siguiente
    const hoy = new Date().toLocaleDateString('en-CA')
    const params = {
      latitude: lat,
      longitude: lon,

      daily: "weather_code",

      current: "temperature_2m",

      hourly: "temperature_2m,precipitation_probability,precipitation,rain,showers,weather_code,relative_humidity_2m",

      start_date: hoy,
      end_date:hoy,
      timezone: "auto"
    };

    const url = "https://api.open-meteo.com/v1/forecast";

    const responses = await fetchWeatherApi(url, params);

    const response = responses[0];

    const current = response.current();

    const hourly = response.hourly();

    const daily = response.daily();

    const horas = [
      '0h', '1h', '2h', '3h', '4h', '5h',
      '6h', '7h', '8h', '9h', '10h', '11h',
      '12h', '13h', '14h', '15h', '16h', '17h',
      '18h', '19h', '20h', '21h', '22h', '23h'
    ];

    return {
      date: hoy,
      //latitude: response.latitude(),
      //longitude: response.longitude(),
      //elevation: response.elevation(),

      current: {
        temperature: Number(current?.variables(0)?.value()?.toFixed(1)),
      },
      hourly: {
        time: horas,
        temperature: Array.from(hourly?.variables(0)?.valuesArray() || []),
        precipitation_probability: Array.from(hourly?.variables(1)?.valuesArray() || []),
        precipitation: Array.from(hourly?.variables(2)?.valuesArray() || []),
        rain: Array.from(hourly?.variables(3)?.valuesArray() || []),
        showers: Array.from(hourly?.variables(4)?.valuesArray() || []),
        weather_code: Array.from(hourly?.variables(5)?.valuesArray() || []),
        relative_humidity_2m: Array.from(hourly?.variables(6)?.valuesArray() || []),
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

