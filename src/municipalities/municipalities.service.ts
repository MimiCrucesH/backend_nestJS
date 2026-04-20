import { Injectable } from '@nestjs/common';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';
import { UpdateMunicipalityDto } from './dto/update-municipality.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Municipality } from './entities/municipality.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MunicipalitiesService {
  constructor(
    @InjectRepository(Municipality)
    private municipalitiesRepository: Repository<Municipality>
  ){}

  create(createMunicipalityDto: CreateMunicipalityDto) {
    return 'This action adds a new municipality';
  }

  findAll() {
    return this.municipalitiesRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} municipality`;
  }

  update(id: number, updateMunicipalityDto: UpdateMunicipalityDto) {
    return `This action updates a #${id} municipality`;
  }

  remove(id: number) {
    return `This action removes a #${id} municipality`;
  }
}
