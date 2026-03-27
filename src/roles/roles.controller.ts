import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {

    
      constructor(private rolesService: RolesService){}
    
      @Post()
      create(@Body() body){
        return this.rolesService.create(body);
      }
    
      @Get()
      findAll(){
        return this.rolesService.findAll();
      }
      @Get(':id')
      findOne(@Param('id') id: string){
        return  this.rolesService.findOne(Number(id));
      }
      @Put(':id')
      update(@Param('id')id: string, @Body() body){
        return this.rolesService.update(Number(id), body)
      }
      @Delete(':id')
      remove(@Param('id') id: string){
        return this.rolesService.remove(Number(id));
      }

}
