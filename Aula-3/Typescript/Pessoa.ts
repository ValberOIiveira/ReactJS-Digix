export class Pessoa {
    //Encapsulamento
    private nome: string;
    private idade: number;

    //Construtor
    constructor(nome: string, idade: number)
    {
        this.nome = nome;
        this.idade = idade;
    }

    public getNome(): string {
        return this.nome
    }

    public setNome(nome: string): void {
        if (nome.length < 3) {
            throw new Error("Nome deve ter mais de 3 caracteres.");
        }
        this.nome = nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setIdade(idade: number): void{
        if (idade < 0) {
            throw new Error("Digite uma idade válida");
            
        }
        this.idade = idade;
    }

    public exibirDados(): string {
        return `Nome: ${this.nome}, Idade: ${this.idade}`;
    }


}