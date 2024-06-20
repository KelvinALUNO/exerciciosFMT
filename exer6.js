async function obterEExibirJSON() {
  try {
    const response = await fetch('./data.json');
    const data = await response.json();
    document.getElementById("nome").textContent = `Nome: ${data.nome}`;
    document.getElementById("idade").textContent = `Idade: ${data.idade} anos`;
    document.getElementById("email").textContent = `Email: ${data.email}`;
  } catch (error) {
    console.error("Erro ao obter e exibir o JSON:", error);
  }
}

obterEExibirJSON();
