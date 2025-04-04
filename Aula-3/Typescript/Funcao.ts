// 📌 Instalando o TypeScript
// npm install -g typescript
// Verificar versão do TypeScript
// tsc --version
// Atualizar o TypeScript
// npm update -g typescript

// 📌 Operadores em TypeScript

// 🧮 Operadores Aritméticos
let a: number = 10;
let b: number = 5;

let totalSoma: number = a + b;
let totalSubtracao: number = a - b;
let totalMultiplicacao: number = a * b;
let totalDivisao: number = a / b;
let totalResto: number = a % b;

console.log(`Soma: ${totalSoma}, Subtração: ${totalSubtracao}, Multiplicação: ${totalMultiplicacao}, Divisão: ${totalDivisao}, Resto: ${totalResto}`);

// 🔤 Operadores de Texto
let nome: string = "Lucas";
let sobrenome: string = "Silva";
let textoConcatenado: string = nome + " " + sobrenome;
console.log(`Nome completo: ${textoConcatenado}`);

let textoRepetido: string = nome.repeat(3);
console.log(`Nome repetido: ${textoRepetido}`);

// ⚖️ Operadores de Comparação
let comparacao1: boolean = a == b;  // Igualdade
let comparacao2: boolean = a != b;  // Diferença
let comparacao3: boolean = a === b; // Igualdade estrita
let comparacao4: boolean = a !== b; // Diferença estrita   

console.log(`Comparação 1: ${comparacao1}, Comparação 2: ${comparacao2}, Comparação 3: ${comparacao3}, Comparação 4: ${comparacao4}`);

// 🔗 Operadores de Comparação com Lógicos
let comparacao5: boolean = a > 0 && b > 0; // E (AND)
let comparacao6: boolean = a < 0 || b < 0; // Ou (OR)
let comparacao7: boolean = !(a > 0);       // Não (NOT)

console.log(`Comparação 5: ${comparacao5}, Comparação 6: ${comparacao6}, Comparação 7: ${comparacao7}`);

// 🔀 Operador Ternário
let resultado: string = (a > b) ? "A é maior que B" : "B é maior que A";
console.log(`Resultado: ${resultado}`);

// 📝 Operadores de Atribuição
let valor: number = 10;
valor += 5;  // Soma
valor -= 5;  // Subtração
valor *= 5;  // Multiplicação
valor /= 5;  // Divisão
valor %= 5;  // Resto

console.log(`Valor final: ${valor}`);

// 🔢 Operadores de Incremento e Decremento
let contador: number = 0;
contador++; // Incremento
contador--; // Decremento

console.log(`Contador: ${contador}`);

// ❓ Operador Nullish Coalescing
let valorNulo: number | null = null;
let valorDefault: number = valorNulo ?? 11;

console.log(`Valor nulo: ${valorNulo}, Valor default: ${valorDefault}`);

// 📌 Operador Spread (...)
let numeros: number[] = [1, 2, 3, 4, 5];
let novosNumeros: number[] = [...numeros, 6, 7, 8];

console.log(`Números originais: ${numeros}`);
console.log(`Novos números: ${novosNumeros}`);

// 📌 Operador de Destructuring
let pessoa = { nome: "Lucas", idade: 25 };
let { nome: nomePessoa, idade: idadePessoa } = pessoa;

console.log(`Nome: ${nomePessoa}, Idade: ${idadePessoa}`);

// 📌 Objetos Dinâmicos com Tipagem
let resultados: { [key: string]: number } = {
    soma: totalSoma,
    subtracao: totalSubtracao,
    multiplicacao: totalMultiplicacao,
    divisao: totalDivisao,
    resto: totalResto,
};

let resultado2: { [key: string]: any } = {
    nome: "Lucas",
    idade: 25,
    ativo: true,
    endereco: {
        rua: "Rua 1",
        numero: 123,
    },
};

console.log(`Soma do objeto: ${resultados["soma"]}`);

// 📌 Executando TypeScript diretamente sem compilar para JS
// Instalar ts-node: npm install -g ts-node
// Inicializar TypeScript: npx tsc --init
// Executar um arquivo TypeScript: ts-node Operadores.ts

// 📌 Diferença entre `tsc` e `ts-node`
// `tsc` - Compila o arquivo TypeScript para JavaScript
// `ts-node` - Executa o código TypeScript diretamente sem precisar compilar para JS
