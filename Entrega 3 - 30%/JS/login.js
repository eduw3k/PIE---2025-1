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

    switch (user.tipo) {
      case "jogador":
        window.location.href = "jogador.html";
        break;
      case "treinador":
        window.location.href = "treinador.html";
        break;
      case "responsavel":
        window.location.href = "responsavel.html";
        break;
      default:
        alert("Tipo de usuário desconhecido.");
    }
  });
});
