export class Usuario {
    nome: string;
    cpf: string;
    idade: number;

    constructor(nome: string, cpf: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = 25;
    }
}