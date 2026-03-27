import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {User} from './user.entity'
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository : Repository<User>,
  ){}

  create (data: Partial<User>){
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }

  findAll(){
    return this.userRepository.find();
  }
  findOne(id:number){
    return this.userRepository.findOne({
      where: {id}
    });
  }
  async update (id:number, data: Partial<User>){
    await this.userRepository.update(id, data);
    return this.findOne(id);
  }
  remove(id:number){
    return this.userRepository.delete(id);
  }
}
