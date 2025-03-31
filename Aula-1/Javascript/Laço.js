for (let idade = 0; idade <= 70; idade += 10) {
    if (idade >= 60) {
        console.log(`Idade ${idade}: Idoso`);
    } else if (idade >= 18) {
        console.log(`Idade ${idade}: Adulto`);
    } else if (idade >= 12) {
        console.log(`Idade ${idade}: Adolescente`);
    } else {
        console.log(`Idade ${idade}: Criança`);
    }
}

let idade = 0;

while (idade <= 70) {
    if (idade >= 60) {
        console.log(`Idade ${idade}: Idoso`);
    } else if (idade >= 18) {
        console.log(`Idade ${idade}: Adulto`);
    } else if (idade >= 12) {
        console.log(`Idade ${idade}: Adolescente`);
    } else {
        console.log(`Idade ${idade}: Criança`);
    }

    idade += 10; // Incrementa a idade
}

let idade2 = 0;

do {
    if (idade2 >= 60) {
        console.log(`Idade ${idade2}: Idoso`);
    } else if (idade2 >= 18) {
        console.log(`Idade ${idade2}: Adulto`);
    } else if (idade2 >= 12) {
        console.log(`Idade ${idade2}: Adolescente`);
    } else {
        console.log(`Idade ${idade2}: Criança`);
    }

    idade2 += 10;
} while (idade2 <= 70);

