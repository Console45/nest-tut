import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { CustomersModule } from './modules/customers/customers.module';

@Module({
  imports: [CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
