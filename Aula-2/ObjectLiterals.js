function Jogador(nome, idade)
{
    this.nome = nome;
    this.idade = idade;
    this.chutar = function()
    {
        console.log(this.nome + " chutou a bola");
    }
}

function Time(nome, qtd)
{
    this.nome = nome;
    this.qtd = qtd;
    this.jogadores = [];
    this.addJogador = function (jogador)
    {
        this.jogadores.push(jogador);
    }
}

function Compare(obj1, obj2)
{
    if (obj1 instanceof obj2)
    {
        console.log("São iguais");
    } else {
        console.log("São diferentes");
    }
}

let jogador1 = new Jogador("Caça Rato", 30);
let jogador2 = new Jogador("Igor Jesus", 23);

let time1 = new Time("Santa Cruz", 11);
let time2 = new Time("Botafogo", 11);


