import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  PORT: Joi.number().default(3000),
  STAGE: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(27017).required(),
  DB_USERNAME: Joi.string().default(""),
  DB_PASSWORD: Joi.string().default(""),
  DB_DATABASE: Joi.string().required(),
});
