import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PermissionsService } from './permissions.service';

@Controller('permissions')
export class PermissionsController {
    constructor(private permissionsService: PermissionsService){}
    @Post()
      create(@Body() body){
        return this.permissionsService.create(body);
      }
    
      @Get()
      findAll(){
        return this.permissionsService.findAll();
      }
      @Get(':id')
      findOne(@Param('id') id: string){
        return  this.permissionsService.findOne(Number(id));
      }
      @Put(':id')
      update(@Param('id')id: string, @Body() body){
        return this.permissionsService.update(Number(id), body)
      }
      @Delete(':id')
      remove(@Param('id') id: string){
        return this.permissionsService.remove(Number(id));
      }



}

