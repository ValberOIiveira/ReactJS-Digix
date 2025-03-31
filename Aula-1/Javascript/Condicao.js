let idade = 21;

if (idade >= 18) {
    console.log("Maior de idade");
}

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}


if (idade >= 60) {
    console.log("Idoso");
} else if (idade >= 18) {
    console.log("Adulto");
} else if (idade >= 12) {
    console.log("Adolescente");
} else {
    console.log("Criança");
}

if (idade >= 18) console.log("Maior de idade");


if (idade >= 18) {
    console.log("Maior de idade");
    if (idade >= 60) {
        console.log("Idoso");
    } else {
        console.log("Adulto");
    }
}

let podeVotar = (idade >= 18) ? "Pode votar" : "Não pode votar";
console.log(podeVotar);

let statusPessoa = (idade >= 60) ? "Idoso" : 
                   (idade >= 18) ? "Adulto" : 
                   (idade >= 12) ? "Adolescente" : "Criança";

console.log(statusPessoa);

