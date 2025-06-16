document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".cadastro");
  const respInput = document.getElementById("responsavel");
  const jogInput  = document.getElementById("jogador");
  const email     = document.getElementById("email");
  const senha     = document.getElementById("senha");
  const confirma  = document.getElementById("confirma-senha");
  const erroMsg   = document.getElementById("error-message");

  //pega o treinador já logado no sistema
  const treinadorLogado = JSON.parse(localStorage.getItem("userLogado"));

  form.addEventListener("submit", e => {
    e.preventDefault();

    if (senha.value !== confirma.value) {
      erroMsg.style.display = "block";
      return;
    }
    erroMsg.style.display = "none";

    const users = JSON.parse(localStorage.getItem("users")) || [];

    //responsável vinculado ao jogador
    const responsavel = {
      nome: respInput.value,
      senha: senha.value,
      tipo: "responsavel",
      jogador: jogInput.value
    };

    //jogador vinculado ao responsável e ao treinador logado
    const jogador = {
      nome: jogInput.value,
      senha: senha.value,
      tipo: "jogador",
      responsavel: respInput.value,
      treinador: treinadorLogado ? treinadorLogado.nome : null
    };

    users.push(responsavel, jogador);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Cadastro de responsável + jogador realizado!");
    window.location.href = "login.html";
  });
});
