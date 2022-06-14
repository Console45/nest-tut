import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response) {
    return res.json({
      status: 'success',
      message: this.appService.getHello(),
    });
  }
}
