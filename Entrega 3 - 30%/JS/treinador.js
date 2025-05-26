document.addEventListener("DOMContentLoaded", () => {
    const modoSelecao = document.getElementById("modo-selecao");
    const seletorIndividual = document.getElementById("seletor-individual");
    const jogadorSelect = document.getElementById("jogador-select");

    //carrega o treinador logado
    const treinadorLogado = JSON.parse(localStorage.getItem("userLogado"));

    if (!treinadorLogado || treinadorLogado.tipo !== "treinador") {
      alert("Acesso negado. Faça login como treinador.");
      window.location.href = "login.html";
      return;
    }

    //busca todos os jogadores vinculados ao treinador
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const jogadoresDoTreinador = users.filter(user =>
      user.tipo === "jogador" && user.treinador === treinadorLogado.nome
    );

    //preenche o select com os jogadores
    jogadorSelect.innerHTML = "";
    if (jogadoresDoTreinador.length === 0) {
      jogadorSelect.innerHTML = "<option>Nenhum jogador vinculado</option>";
    } else {
      jogadoresDoTreinador.forEach(jogador => {
        const option = document.createElement("option");
        option.value = jogador.nome;
        option.textContent = jogador.nome;
        jogadorSelect.appendChild(option);
      });
    }

    //alternar entre seleção individual e todos
    modoSelecao.addEventListener("change", () => {
      const modo = modoSelecao.value;
      if (modo === "todos") {
        seletorIndividual.style.display = "none";
      } else {
        seletorIndividual.style.display = "block";
      }
    });
  });