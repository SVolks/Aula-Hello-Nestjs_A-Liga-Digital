import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(@Query('nome') nome: string, @Query('sobrenome') sobrenome: string): string {
    return this.appService.getHello(nome, sobrenome);
  }
  
  @Get('/bye')
  getBye(@Query('nome') nome: string, @Query('sobrenome') sobrenome: string): string {
    return this.appService.getBye(nome, sobrenome);
  }
}
