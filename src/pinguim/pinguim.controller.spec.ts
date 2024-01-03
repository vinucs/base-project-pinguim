import { Test, TestingModule } from '@nestjs/testing';
import { PinguimController } from './pinguim.controller';
import { PinguimService } from './pinguim.service';

describe('PinguimController', () => {
  let controller: PinguimController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PinguimController],
      providers: [PinguimService],
    }).compile();

    controller = module.get<PinguimController>(PinguimController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
