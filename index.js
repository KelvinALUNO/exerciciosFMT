// Função que simula uma consulta assíncrona para obter informações de um usuário
async function getUserInfo() {
  return new Promise((resolve) => {
    // Simulando a consulta com setTimeout
    setTimeout(() => {
      const userInfo = {
         nome:(nome),
        idade:(idade),
        email:(email)
      };
      var nome = prompt("qual seu nome?");
      var idade = prompt("qual sua idade?");
      var email = prompt("qual seu amail?");
      resolve(userInfo);
    }, 2000); // Simula 2 segundos de espera
  });
}

// Função que utiliza getUserInfo e exibe as informações no console
async function obterEExibirInformacoesDoUsuario() {
  try {
    const info = await getUserInfo();
    console.log('Informações do usuário:');
    console.log(`Nome: ${info.nome}`);
    console.log(`Idade: ${info.idade}`);
    console.log(`Email: ${info.email}`);
  } catch (error) {
    console.error('Erro ao obter informações do usuário:', error);
  }
}

// Chamando a função para obter e exibir as informações
obterEExibirInformacoesDoUsuario();
