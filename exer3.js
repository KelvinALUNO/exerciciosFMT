var numeros = [1, 2, 3, 4, 5];
const prompt = require('prompt-sync')();
var numeros = [];

for (let i = 0; i < 5; i++) {
  const numero = parseInt(prompt(`Digite o ${i + 1}º número: `));
  numeros.push(numero);
}
for (let i = 0; i < numeros.length; i++) {
    console.log(`Número ${i + 1}: ${numeros[i]}`);
  }
  const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(`A soma de todos os elementos do array é: ${soma}`);
