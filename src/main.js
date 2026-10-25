import "./style.css";

document.querySelector("#app").innerHTML = `
  <header class="topo">
    <div class="marca">
      <span class="icone">❤</span>
      <span>ONG Solidária</span>
    </div>
    <span class="slogan">Juntos, podemos transformar vidas.</span>
  </header>

  <main class="conteudo">
    <section class="apresentacao">
      <p class="destaque">FAÇA PARTE DESSA CORRENTE DO BEM</p>
      <h1>Pequenas atitudes,<br>grandes transformações.</h1>
      <p class="descricao">
        Acreditamos que a solidariedade tem o poder de transformar
        realidades. Nosso objetivo é conectar pessoas dispostas a ajudar
        com quem mais precisa.
      </p>
      <a class="botao" href="#sobre">Conheça nosso propósito</a>
    </section>

    <section id="sobre" class="cartao">
      <h2>Nosso propósito</h2>
      <p>
        Promover a solidariedade, incentivar ações sociais e contribuir
        para uma comunidade mais justa, acolhedora e inclusiva.
      </p>
    </section>

    <section class="status">
      <h2>Status do sistema</h2>
      <p id="api-status">Verificando conexão com a API...</p>
      <p id="data-hora">Carregando data e hora...</p>
    </section>
  </main>

  <footer>
    <p>ONG Solidária · Juntos fazemos a diferença.</p>
  </footer>
`;

async function verificarAPI() {
  const status = document.querySelector("#api-status");

  try {
    const resposta = await fetch("/api/health");

    if (!resposta.ok) {
      throw new Error("Falha ao consultar a API");
    }

    const dados = await resposta.json();
    status.textContent = `Status da API: ${dados.status}`;
  } catch (erro) {
    status.textContent = "Não foi possível conectar à API.";
    console.error(erro);
  }
}

function atualizarDataHora() {
  const agora = new Date();

  document.querySelector("#data-hora").textContent =
    `Data e hora: ${agora.toLocaleString("pt-BR")}`;
}

verificarAPI();
atualizarDataHora();
setInterval(atualizarDataHora, 1000);
