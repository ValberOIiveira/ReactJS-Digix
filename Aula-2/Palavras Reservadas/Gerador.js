import { writefile } from 'fs';

const produto = {
    nome: 'Produto',
    preco: 1.99,
    desconto: 0.2
}

writefile(__dirname + 'arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo salvo com sucesso!');
});

 