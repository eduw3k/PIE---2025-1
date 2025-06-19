document.addEventListener("DOMContentLoaded", function () {
  //geração dos botões de avaliação
  const container = document.getElementById("avaliacao");

  for (let i = 1; i <= 10; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;

    btn.onclick = function () {
      document.querySelectorAll("#avaliacao button").forEach((b) => b.classList.remove("selecionado"));
      btn.classList.add("selecionado");
    };

    container.appendChild(btn);
  }

  //simulação de salvar avaliação
  window.salvarAvaliacao = function () {
    const data = document.getElementById("data").value;
    const notaSelecionada = document.querySelector("#avaliacao button.selecionado");

    if (!data || !notaSelecionada) {
      alert("Preencha a data e selecione uma nota de 1 a 10.");
      return;
    }

    const nota = notaSelecionada.innerText;
    alert(`Avaliação salva!\nData: ${data}\nNota: ${nota}`);
  };
});

//metas pessoais
function alternarStatus(el) {
  el.classList.toggle("atingida");
}

function removerMeta(button) {
  const item = button.closest(".meta-item");
  if (item) item.remove();
}

function adicionarMeta() {
  const lista = document.getElementById("metas-lista");
  const novaMeta = document.createElement("div");
  novaMeta.className = "meta-item";
  novaMeta.innerHTML = `
    <span class="status" onclick="alternarStatus(this)"></span>
    <textarea placeholder="Escreva sua meta..."></textarea>
    <button class="remover-meta" onclick="removerMeta(this)">✕</button>
  `;
  lista.appendChild(novaMeta);
}
