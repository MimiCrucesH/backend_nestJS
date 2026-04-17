import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity'
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  /* create (data: Partial<User>){
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }
    
 */
  async create(data: Partial<User>) {

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);

  }

  findAll() {
    return this.userRepository.find(
      {
        relations: ['role'],
        withDeleted: true 
      }
    );
  }
  findOne(id: number) {
    return this.userRepository.findOne({
      where: { id },
      relations: ['role']
    });
  }
  async update(id: number, data: Partial<User>) {
    await this.userRepository.update(id, data);
    return this.findOne(id);
  }
  
  remove(id: number) {
    // este elimina completamente al usuario:
    // return this.userRepository.delete(id);
    return this.userRepository.softDelete(id), this.userRepository.update(id, {
      active: false
    })

  }

  /*
    this.userRepository.update(id, {
  active: false,
    });
  

    async deleteUser(id: number, userId: number) {
  await this.userRepository.update(id, {
    active: false,
    deletedAt: new Date(),
    deletedBy: userId,
  });
}
  */

  findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
}
