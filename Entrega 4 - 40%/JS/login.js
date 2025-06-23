document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");
  const userInput = document.getElementById("username");
  const passInput = document.getElementById("senha");

  form.addEventListener("submit", e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u =>
      u.nome === userInput.value.trim() && u.senha === passInput.value
    );

    if (!user) {
      alert("Nome completo ou senha incorretos!");
      return;
    }

    //guardar o usuário logado no LocalStorage
    localStorage.setItem("userLogado", JSON.stringify(user));

    switch (user.tipo) {
      case "jogador":
        alert("Login realizado com sucesso! Bem-vindo, jogador.");
        window.location.href = "jogador.html";
        break;
      case "treinador":
        alert("Login realizado com sucesso! Bem-vindo, treinador.");
        window.location.href = "treinador.html";
        break;
      case "responsavel":
        alert("Login realizado com sucesso! Bem-vindo, responsável.");
        window.location.href = "responsavel.html";
        break;
      default:
        alert("Tipo de usuário desconhecido.");
    }
  });
});

