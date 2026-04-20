import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateSettlementDto } from './dto/create-settlement.dto';
import { UpdateSettlementDto } from './dto/update-settlement.dto';
import { Settlement } from './entities/settlement.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SettlementsService {

  constructor(
    @InjectRepository(Settlement)
    private settlementRepository : Repository<Settlement>
  ){}

  create(createSettlementDto: CreateSettlementDto) {
    return 'This action adds a new settlement';
  }

  findAll() {
    return this.settlementRepository.find();
  }

  findOne(id: number) {
    return this.settlementRepository.findOne({
      where:{id}
    })
  }

  findByMunicipality(id: number){
    return this.settlementRepository.find({
      where:{
        municipality_id: id
      }
    })
  }
 

  update(id: number, updateSettlementDto: UpdateSettlementDto) {
    return `This action updates a #${id} settlement`;
  }

  remove(id: number) {
    return `This action removes a #${id} settlement`;
  }
}
