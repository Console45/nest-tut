import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCustomerDto } from '../dtos/create-customer.dto';
import { CustomersService } from '../services/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  @Get(':id')
  getCustomerById(@Param('id') id: number) {
    return this.customersService.findCustomerById(id);
  }
  @Post()
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    console.log(createCustomerDto);
  }
}
