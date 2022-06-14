import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private users = [
    {
      id: 1,
      email: 'cos@email.com',
      name: 'Cos',
    },
    {
      id: 2,
      email: 'cosmo@email.com',
      name: 'Cosmo',
    },
    {
      id: 3,
      email: 'cosmos@email.com',
      name: 'Cosmos',
    },
    {
      id: 4,
      email: 'cosmoss@email.com',
      name: 'Cosmoss',
    },
  ];
  findCustomerById(id: number) {
    const customer = this.users.find((user) => id === user.id);
    if (!customer) throw new NotFoundException('customer not found');
    return customer;
  }
}
