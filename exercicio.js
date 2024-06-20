const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const produtos = {
  1: 'Hortifruti',
  2: 'Laticínios',
  3: 'Carnes',
  4: 'Peixes',
  5: 'Aves'
};
const quantidadePorProduto = {};
function Compra() {
  rl.question('Qual produto você deseja comprar? (1-(hirtifruti), 2-(laticínios), 3-(carnes), 4-(peixes) ou 5-(aves)) ou 6 para fechar o pedido: ', (resposta) => {
    const opcao = parseInt(resposta);

    if (opcao === 6) {
      const produtoMaisComprado = Object.keys(quantidadePorProduto).reduce((a, b) => quantidadePorProduto[a] > quantidadePorProduto[b] ? a : b);
      console.log(`O produto mais comprado foi: ${produtos[produtoMaisComprado]}`);
      rl.close();
    } else if (opcao >= 1 && opcao <= 5) {
      rl.question('Quantos itens você irá comprar? ', (quantidade) => {
        quantidadePorProduto[opcao] = parseInt(quantidade);
        Compra();
      });
    } else {
      console.log('Opção inválida. Escolha entre 1 e 5 ou 6 para fechar o pedido.');
      Compra();
    }
  });
}
Compra();
