import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { envs } from 'src/config/envs';
import { ORDER_SERVICE } from 'src/config/services';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [OrdersController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: ORDER_SERVICE,
        transport: Transport.TCP, // Example transport, adjust as needed
        options: {
          host: envs.ordersMicroserviceHost,
          port: envs.ordersMicroservicePort,
        },
      },
    ]),
  ],
})
export class OrdersModule {}
