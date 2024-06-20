
async function getUserInfo() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const userInfo = {
    nome: "Kelvin",
    idade: 29,
    email: "kelvin123@hotmail.com",
  };

  return userInfo;
}

async function exibirInformacoesUsuario() {
  try {
    const info = await getUserInfo();
    console.log("Informações do usuário:");
    console.log(`Nome: ${info.nome}`);
    console.log(`Idade: ${info.idade} anos`);
    console.log(`Email: ${info.email}`);
  } catch (error) {
    console.error("Erro ao obter informações do usuário:", error);
  }
}
exibirInformacoesUsuario();

  