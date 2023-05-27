const prompt = require('prompt-sync')({sigint: true});
let numero = Math.floor(Math.random() * (10 - 0 + 1) + 0);
///let numero = 7;
let chute;
let acertou = true;

for (let i = 0; i < 3; i++) {
    chute = prompt('O sistema gerou um número aleatório entre 0 e 10, você tem 3 tentativas tente acerta-lo: ');
    if (Number(chute) === numero) {
        console.log('Parabéns você acertou!!');
        acertou = true;
        break;
    } else {
        console.log('Você errou !!');
        acertou = false;
    }
}

if (acertou === false) {
console.log(`O número gerado foi: ${numero}`);
}