import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get('')
  getCustomers() {
    return {
      id: 1,
      email: 'cosmos@email.com',
      createdAt: new Date(),
    };
  }
}
