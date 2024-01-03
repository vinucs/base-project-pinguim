import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';
import { ApiProperty } from "@nestjs/swagger";

export class CreatePinguimDto {
  @ApiProperty({ example: 'Vinicius' })
  @JoiSchema(Joi.string()
    .alphanum()
    .min(3)
    .max(20)
    .required())
  nome: string;

  @ApiProperty({ example: 10 })
  @JoiSchema(Joi.number()
    .integer()
    .required())
  idade: number;
}
