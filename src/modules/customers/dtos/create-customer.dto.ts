import { IsEmail, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateCustomerDto {
  @IsEmail()
  email: string;

  @IsNumber()
  id: number;

  @IsString()
  @MinLength(2)
  name: string;
}
