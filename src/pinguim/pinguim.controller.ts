import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PinguimService } from './pinguim.service';
import { CreatePinguimDto } from './dto/create-pinguim.dto';
import { UpdatePinguimDto } from './dto/update-pinguim.dto';
import { ApiTags } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';

@ApiTags('pinguim')
@Controller('pinguim')
export class PinguimController {
  constructor(private readonly pinguimService: PinguimService) {}

  @Post()
  async create(@Body() createPinguimDto: CreatePinguimDto) {
    return await this.pinguimService.create(createPinguimDto);
  }

  @Get()
  async findAll() {
    return await this.pinguimService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.pinguimService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePinguimDto: UpdatePinguimDto) {
    return await this.pinguimService.update(id, updatePinguimDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.pinguimService.remove(id);
  }
}
