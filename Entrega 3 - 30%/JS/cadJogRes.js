document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".cadastro");
  const respInput = document.getElementById("responsavel");
  const jogInput  = document.getElementById("jogador");
  const email     = document.getElementById("email");    
  const senha     = document.getElementById("senha");
  const confirma  = document.getElementById("confirma-senha");
  const erroMsg   = document.getElementById("error-message");

  form.addEventListener("submit", e => {
    e.preventDefault();
    if (senha.value !== confirma.value) {
      erroMsg.style.display = "block";
      return;
    }
    erroMsg.style.display = "none";

    // Puxa a lista existente ou cria nova
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // adiciona Responsável
    users.push({
      nome: respInput.value,
      senha: senha.value,
      tipo: "responsavel"
    });

    // adiciona Jogador
    users.push({
      nome: jogInput.value,
      senha: senha.value,
      tipo: "jogador"
    });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Cadastro de responsável + jogador realizado!");
    window.location.href = "login.html";
  });
});
