import { Injectable } from '@nestjs/common';
import { Roles } from './rol.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RolesService {

    constructor(
        @InjectRepository(Roles)
        private rolesRepository : Repository<Roles>,
      ){}
    
      create (data: Partial<Roles>){
        const user = this.rolesRepository.create(data);
        return this.rolesRepository.save(user);
      }
    
      findAll(){
        return this.rolesRepository.find();
      }
      findOne(id:number){
        return this.rolesRepository.findOne({
          where: {id}
        });
      }
      async update (id:number, data: Partial<Roles>){
        await this.rolesRepository.update(id, data);
        return this.findOne(id);
      }
      remove(id:number){
        return this.rolesRepository.delete(id);
      }
}




