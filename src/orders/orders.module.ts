import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { NastModule } from '../transports/nast.module';

@Module({
  controllers: [OrdersController],
  providers: [],
  imports: [NastModule],
})
export class OrdersModule {}
