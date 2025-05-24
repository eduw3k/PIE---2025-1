document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".cadastro");
  const nomeInput = document.getElementById("treinador");
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

    const users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({
      nome: nomeInput.value,
      senha: senha.value,
      tipo: "treinador"
    });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Cadastro de treinador realizado!");
    window.location.href = "login.html";
  });
});
