import { JoiSchema, JoiSchemaOptions } from 'nestjs-joi';
import * as Joi from 'joi';
import { ApiProperty } from "@nestjs/swagger";

export class UpdatePinguimDto {
  @ApiProperty({ example: 'Vinicius' })
  @JoiSchema(Joi.string().alphanum().min(3).max(20))
  nome: string;

  @ApiProperty({ example: 10 })
  @JoiSchema(Joi.number().integer())
  idade: number;
}