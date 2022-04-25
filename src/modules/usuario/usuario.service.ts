import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {

    dados: Usuario[];
    
    constructor() {
        this.dados = [];
        this.dados.push(new Usuario('Alex', '123.123.123-00'));
        this.dados.push(new Usuario('Tiago', '456.456.456-12'));
        
    }

    listarUsuarios(): Usuario[] {
        return this.dados;
    }
    
    getUsuario(cpf: string): Usuario {
        
        //const usuario = this.dados.find(u => u.cpf == cpf);
        //return usuario;
        
        return this.dados.find(u => u.cpf == cpf);
    }
    
    //getUsuario(nome: string): string {
    //    return `Obtendo dados do(a) ${nome}: XXX`;
    //}
    
    cadastrarUsuario(usuario: Usuario): string {
        this.dados.push(usuario);
        return `Usuário(a) ${usuario.nome} cadastrado(a) com sucesso!`;
    }

    removerUsuario(cpf: string): boolean {
        const usuario = this.dados.find(u => u.cpf == cpf);
        if (usuario) {
            this.dados = this.dados.filter(u => u.cpf != cpf);
            return true;
        }
        return false;
    }
}
