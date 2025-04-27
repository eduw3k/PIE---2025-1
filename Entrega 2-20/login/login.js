document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("senha");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Recupera os dados do usuário do Local Storage
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            alert("Nenhum usuário cadastrado!");
            return;
        }

        // Verifica se os dados estão corretos
        if (usernameInput.value === user.cpf && passwordInput.value === user.senha) {
            alert("Login realizado com sucesso!");
            window.location.href = "../"; // Redireciona para a tela principal
        } else {
            alert("CPF ou senha incorretos!");
        }
    });
});