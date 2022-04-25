import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService) { }

    @Get('/listar')
    listarUsuarios(): Usuario[] {
        return this.usuarioService.listarUsuarios();
    }
    
    @Get('/')
    getUsuario(@Query('cpf') cpf: string): Usuario {
        const usuario = this.usuarioService.getUsuario(cpf);
        if(usuario == undefined) {
            throw new NotFoundException(`Usuário não encontrado, favor confirme seu cpf: ${cpf}!`);
        }
        return usuario;
    }
    
    //@Get('/')
    //getUsuario(@Query('cpf') cpf: string): Usuario {
    //    return this.usuarioService.getUsuario(cpf);
    //}
    
    //@Get('/')
    //getUsuario(@Query('nome') nome: string): string {
    //    return this.usuarioService.getUsuario(nome);
    //}
    
    // Endpoints
    @Get('/cadastrar')
    cadastrarUsuario(@Query() usuario: Usuario): string {
        return this.usuarioService.cadastrarUsuario(usuario);
    }
    
    @Post('/cadastrar')
    cadastrarUsuario1(@Body() usuario: Usuario): string {
       // ! = negação, ou seja, se nome do usuario nao existir ||(ou) nome do usuario for vazia,...
        if(!usuario.nome || usuario.nome == "") {
            throw new BadRequestException();
        }
        return this.usuarioService.cadastrarUsuario(usuario);
    }
    
    //@Get('/cadastrar')
    //cadastrarUsuario(@Query('nome') nome: string, @Query('cpf') cpf: string): string {
    //    return this.usuarioService.cadastrarUsuario(nome, cpf);
    //}

    @Delete('/:cpf')
    removerUsuario(@Param('cpf') cpf: string): boolean {
        return this.usuarioService.removerUsuario(cpf);
    }
}
