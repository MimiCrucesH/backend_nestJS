import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permissions } from './permission.entity';

@Injectable()
export class PermissionsService {
    constructor(
        @InjectRepository(Permissions)
        private permissionsRepository: Repository<Permissions>,
    ){}

    create (data: Partial<Permissions>){
        const user = this.permissionsRepository.create(data);
        return this.permissionsRepository.save(user);
    }

    findAll(){
        return this.permissionsRepository.find();
    }

    findOne(id:number){
        return this.permissionsRepository.findOne({
          where: {id}
        });
    }

    async update (id:number, data: Partial<Permissions>){
        await this.permissionsRepository.update(id, data);
        return this.findOne(id);
    }
    remove(id:number){
        return this.permissionsRepository.delete(id);
    }
  
}

