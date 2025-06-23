document.addEventListener("DOMContentLoaded", () => {
  const modoSelecao = document.getElementById("modo-selecao");
  const seletorIndividual = document.getElementById("seletor-individual");
  const jogadorSelect = document.getElementById("jogador-select");

  //TODOS OS "ENVIOS" E "SALVAR INFORMAÇÕES" SÃO SIMULAÇÕES PARA O FRONT-END.
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

  //salvar Teste de Desenvolvimento Físico
  const btnSalvarTeste = document.querySelectorAll(".teste-fisico .btn-primary")[0];
  btnSalvarTeste.addEventListener("click", () => {
    const inputs = document.querySelectorAll(".teste-fisico input");
    const data = inputs[0].value;
    const tempo = inputs[1].value;
    const gols = inputs[2].value;
    const faltas = inputs[3].value;
    const freq = inputs[4].value;

    if (!data || !tempo || !gols || !faltas || !freq) {
      alert("Preencha todos os campos do teste físico.");
      return;
    }

    alert(`Teste físico salvo!\nData: ${data}\nTempo: ${tempo}\nGols: ${gols}\nFaltas: ${faltas}\nFrequência Cardíaca: ${freq} BPM`);
  });

  //salvar Controle de Presença
  const btnSalvarPresenca = document.querySelectorAll(".teste-fisico .btn-primary")[1];
  const btnsPresenca = document.querySelectorAll(".presenca button");
  let statusPresenca = "";

  btnsPresenca.forEach((btn) => {
    btn.addEventListener("click", () => {
      btnsPresenca.forEach((b) => b.classList.remove("selecionado"));
      btn.classList.add("selecionado");
      statusPresenca = btn.innerText;
    });
  });

  btnSalvarPresenca.addEventListener("click", () => {
    const dataPresenca = document.querySelectorAll(".teste-fisico input")[5].value;
    if (!dataPresenca || !statusPresenca) {
      alert("Preencha a data e selecione se o jogador esteve presente ou faltou.");
      return;
    }

    const modoAtual = document.getElementById("modo-selecao").value;
    let nomeJogador = "Todos os jogadores";

    if (modoAtual === "individual") {
      nomeJogador = document.getElementById("jogador-select").value;
    }

    alert(`Presença registrada para: ${nomeJogador}\nData: ${dataPresenca}\nStatus: ${statusPresenca}`);
  });

  //feedback e evento enviado
  const btnEnviarFeedback = document.querySelector(".feedback button");
  btnEnviarFeedback.addEventListener("click", () => {
    const comentario = document.querySelector(".feedback textarea").value.trim();
    if (comentario === "") {
      alert("Por favor, escreva um comentário.");
    } else {
      alert("Feedback enviado com sucesso!");
    }
  });

  const btnEnviarEvento = document.querySelector(".alerta button");
  btnEnviarEvento.addEventListener("click", () => {
    const evento = document.querySelector(".alerta textarea").value.trim();
    if (evento === "") {
      alert("Por favor, descreva o evento antes de enviar.");
    } else {
      alert("Alerta de evento enviado com sucesso!");
    }
  });

  //preencher campeonado do jogador
  const botoesCampeonato = document.querySelectorAll(".sidebar .card:nth-child(1) button");

  botoesCampeonato.forEach((botao, index) => {
    botao.addEventListener("click", () => {
      const categoria = prompt("Digite a categoria do campeonato (ex: SUB17):");
      const data = prompt("Digite a data do campeonato (ex: Jan 2025):");

      if (categoria && data) {
        alert("Campeonato inserido com sucesso!");
      } else {
        alert("Preenchimento cancelado ou incompleto.");
      }
    });
  });
});
