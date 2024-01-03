import { Injectable } from '@nestjs/common';
import { CreatePinguimDto } from './dto/create-pinguim.dto';
import { UpdatePinguimDto } from './dto/update-pinguim.dto';
import { PinguimRepository } from './pinguim.repository';
import { ObjectId } from 'mongodb';

@Injectable()
export class PinguimService {
  constructor(private readonly pinguimRepository: PinguimRepository) {}
  create(createPinguimDto: CreatePinguimDto) {
    return this.pinguimRepository.create(createPinguimDto);
  }

  findAll() {
    return this.pinguimRepository.findAll();
  }

  findOne(id: string) {
    return this.pinguimRepository.findOne(id);
  }

  update(id: string, updatePinguimDto: UpdatePinguimDto) {
    return this.pinguimRepository.update(id, updatePinguimDto);
  }

  remove(id: string) {
    return this.pinguimRepository.delete(id);
  }
}
