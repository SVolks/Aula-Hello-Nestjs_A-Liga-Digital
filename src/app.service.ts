import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(nome: string, sobrenome: string): string {
    return `Hello ${nome} ${sobrenome}!`;
  }
  getBye(nome: string, sobrenome: string): string {
    return `Até logo ${nome} ${sobrenome}!`;
  }
}
