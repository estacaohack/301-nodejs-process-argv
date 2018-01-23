// Tópicos abordados nos exercícios abaixo:
//     ES6 (JavaScript):
//         - let
//         - const
//         - arrow functions
//     Node.js:
//         - process
//             leitura de argumentos

//////////////////////////////////////////////

// Exercício: calcule a média aritmetica dos valores passados como argumento pelo usuário

let notasEntrada = process.argv;
let notas = [];
let notaFinal;

let calcularMedia = (vetorNumeros) => {
    let total = 0;

    for(let numero of vetorNumeros){
        total += numero;
    }

    return total / vetorNumeros.length;
};

for(let i = 2; i < notasEntrada.length; i++){
    notasEntrada[i] = Number(notasEntrada[i]);
    notas.push(notasEntrada[i]);
}

notaFinal = calcularMedia(notas);

console.log(`A sua média foi: ${notaFinal}`);


// =======================================================

// Exercício: aprimore o exercício acima para que o programa informe se o aluno foi ou não aprovado.
//     O aluno estará aprovado se a média das notas for igual ou maior que 6,0

let notasEntrada = process.argv;
let notas = [];
let notaFinal = 0;

let calcularMedia = (vetorNumeros) => {
    let total = 0;

    for(let numero of vetorNumeros){
        total += numero;
    }

    return total / vetorNumeros.length;
};

for(let i = 2; i < notasEntrada.length; i++){
    notasEntrada[i] = Number(notasEntrada[i]);
    notas.push(notasEntrada[i]);
}

notaFinal = calcularMedia(notas);

console.log(`A sua média foi: ${notaFinal}`);

if(notaFinal >= 6){
    console.log('Parabéns! Você foi aprovado.');
}
else{
    console.log('Você foi reprovado. Tente outra vez.');
}

