import 'dotenv/config';

import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  NATS_SERVERS: string[];
  // PRODUCTS_MICROSERVICE_HOST: string;
  // PRODUCTS_MICROSERVICE_PORT: number;
  // ORDERS_MICROSERVICE_HOST: string;
  // ORDERS_MICROSERVICE_PORT: number;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    NATS_SERVERS: joi.array().items(joi.string().uri()).required(),
    // PRODUCTS_MICROSERVICE_HOST: joi.string().required(),
    // PRODUCTS_MICROSERVICE_PORT: joi.number().required(),
    // ORDERS_MICROSERVICE_HOST: joi.string().required(),
    // ORDERS_MICROSERVICE_PORT: joi.number().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate({
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS
    ? process.env.NATS_SERVERS.split(',')
    : [],
});

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envsVars: EnvVars = value as EnvVars;

export const envs = {
  port: envsVars.PORT,
  natsServers: envsVars.NATS_SERVERS,
  // productsMicroserviceHost: envsVars.PRODUCTS_MICROSERVICE_HOST,
  // productsMicroservicePort: envsVars.PRODUCTS_MICROSERVICE_PORT,
  // ordersMicroserviceHost: envsVars.ORDERS_MICROSERVICE_HOST,
  // ordersMicroservicePort: envsVars.ORDERS_MICROSERVICE_PORT,
};
