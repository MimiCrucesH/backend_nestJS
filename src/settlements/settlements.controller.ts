import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SettlementsService } from './settlements.service';
import { CreateSettlementDto } from './dto/create-settlement.dto';
import { UpdateSettlementDto } from './dto/update-settlement.dto';

@Controller('settlements')
export class SettlementsController {
  constructor(private readonly settlementsService: SettlementsService) {}

  @Post()
  create(@Body() createSettlementDto: CreateSettlementDto) {
    return this.settlementsService.create(createSettlementDto);
  }

  @Get()
  findAll() {
    return this.settlementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.settlementsService.findOne(+id);
  }
  // para obtener los registros por id_municipality
  @Get('municipality/:id')
  finByMunicipality(@Param('id', ParseIntPipe) id: number){
    // id + 1 porque 
    return this.settlementsService.findByMunicipality(id+1); // ParseIntPipe para convertir a entero y se pueda sumar
    // no concatenar. id+1 porque la BD de Alcalduias tiene el id -1 
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSettlementDto: UpdateSettlementDto) {
    return this.settlementsService.update(+id, updateSettlementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.settlementsService.remove(+id);
  }
}
