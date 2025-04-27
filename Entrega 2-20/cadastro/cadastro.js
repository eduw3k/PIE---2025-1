document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".cadastro"); // Corrigido o seletor do formulário
    const nome = document.getElementById("nome");
    const cpf = document.getElementById("cpf");
    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirma-senha");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Verifica se as senhas são iguais
        if (senha.value !== confirmarSenha.value) {
            errorMessage.style.display = "block";
            return;
        } else {
            errorMessage.style.display = "none";
        }

        // Salva os dados no localStorage
        const user = {
            nome: nome.value,
            cpf: cpf.value,
            senha: senha.value,
        };

        localStorage.setItem("user", JSON.stringify(user));

        alert("Cadastro realizado com sucesso!");
        window.location.href = "../login/login.html"; // Redireciona para a página de login
    });
});