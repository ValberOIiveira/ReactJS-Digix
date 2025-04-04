import { Pessoa } from "./Pessoa";

export class Conta {
    protected titular: Pessoa;
    protected saldo: number;

    constructor(titular: Pessoa, saldo: number)
    {
        this.titular = titular;
        this.saldo = saldo;
    }


    public depositar(valor: number): void {
        if (valor <= 0) throw new Error("Valor de depósito deve ser positivo");
        this.saldo += valor;
    }

    public sacar(valor: number) : void {
        if (valor <= 0) throw new Error("Valor de saque deve ser positivo");
        if(valor > this.saldo) throw new Error("Saldo insuficiente");
        this.saldo -= valor;
    }
}

export class Poupanca extends Conta {
    private taxaRendimento: number;

    constructor(titular: Pessoa, saldo: number, taxaRendimento: number)
    {
        super(titular, saldo);
        this.taxaRendimento = taxaRendimento;
    }

    public aplicarRendimento(): void {
        this.saldo += this.saldo * (this.taxaRendimento / 100);
    }

    public exibirDados(): string {
        return `Titular: ${this.titular.getNome()}, Saldo: ${this.saldo},
        Rendimento: ${this.taxaRendimento}%`;
    }
}

export class Corrente extends Conta {
    private limiteChequeEspecial: number;

    constructor(titular: Pessoa, saldo: number, LimiteChequeEspecial: number)
    {
        super(titular, saldo);
        this.limiteChequeEspecial = LimiteChequeEspecial;
    }

    public exibirDados(): string {
        return `Titular: ${this.titular.getNome()}, Saldo: ${this.saldo},
        Rendimento: ${this.limiteChequeEspecial}%`;
    }
}

