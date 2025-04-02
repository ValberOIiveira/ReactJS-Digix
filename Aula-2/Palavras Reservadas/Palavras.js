let pessoa = {
    nome : "Lucas"
}

let pessoa2 = {

}

//Mostra os atributos e métodos do objeto
console.log(Object.getOwnPropertyDescriptor(pessoa));

Object.assign(pessoa2, pessoa);

let config = {
    ip: '127.0.0.1',
    port: "8080",
    block: true,
}

let { ip, port, block } = config;
console.log(ip, port, block);

let lista = ['Lucas', 'Maria', 'João'];
let [nome1, nome2, nome3] = lista;

console.log(nome1, nome2, nome3);

let lista2 = ['Lucas', 'Maria', 'João', 'José'];
let [nome4, ...resto] = lista2;

console.log(nome4);
console.log(resto);

console.log(lista2)