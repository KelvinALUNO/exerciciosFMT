var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function soOsPares(numero) {
  return numero % 2 === 0;
}
var quadrados = numeros.map(function(item) {
  return Math.pow(item, 2);
});
console.log("Números ao quadrado:");
console.log(quadrados);

