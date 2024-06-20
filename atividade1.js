function ParOuImpar (numero) {
    if (numero % 2 === 0) {
        return ("par")
    } else {
        return ("ímpar");
    }
}
const numero = 10;
const resultado = ParOuImpar(10);
console.log(`o número ${10} é ${resultado}.`)