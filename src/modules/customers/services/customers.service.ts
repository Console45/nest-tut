import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  findCustomer() {
    return {
      id: 1,
      email: 'cosmos@email.com',
      createdAt: new Date(),
    };
  }
}
