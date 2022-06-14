import { Controller, Get } from '@nestjs/common';
import { CustomersService } from '../services/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  @Get('')
  getCustomers() {
    return this.customersService.findCustomer();
  }
}
