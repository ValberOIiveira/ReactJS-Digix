import { Pessoa } from "./Pessoa";
import { Corrente, Poupanca } from "./Conta";//

function main() {
    try {
        const cliente1 = new Pessoa("João", 30);
        const cliente2 = new Pessoa("Felipe", 20);

        // Criando contas
        const contaCorrente = new Corrente(cliente1, 1000, 500);
        const contaPoupanca = new Poupanca(cliente1, 2000, 0.5);

        // Operações na conta corrente
        contaCorrente.depositar(500);
        contaCorrente.sacar(1500);
        console.log(contaCorrente.exibirDados());

        // Operações na conta poupança
        contaPoupanca.aplicarRendimento();
        contaPoupanca.sacar(300);
        console.log(contaPoupanca.exibirDados());

        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Erro:", error.message);
            } else {
                console.error("Erro desconhecido:", error);
            }
        }
    
}

main();
