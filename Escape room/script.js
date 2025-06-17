const enigmas = {
  balao: {
    pergunta: "🎈 Qual gás é mais leve que o ar e usado em balões de festa?",
    resposta: "hélio"
  },
  formula: {
    pergunta: "🧬 Qual o símbolo químico da água?",
    resposta: "h2o"
  },
  cofre: {
    pergunta: "🔒 Resolva o código: Se A=1, B=2, C=3, qual o número da palavra 'CAB'?",
    resposta: "312"
  },
  painel: {
    pergunta: "📟 Quanto é 9 x 9?",
    resposta: "81"
  }
};

const resolvidos = {
  balao: false,
  formula: false,
  cofre: false,
  painel: false
};

let objetoAtual = "";

function abrirEnigma(obj) {
  if (resolvidos[obj]) {
    setFeedback("✅ Você já resolveu este enigma!");
    return;
  }
  objetoAtual = obj;
  document.getElementById("enigma-pergunta").textContent = enigmas[obj].pergunta;
  document.getElementById("resposta-input").value = "";
  document.getElementById("enigma-box").style.display = "block";
  document.getElementById("feedback").textContent = "";
  document.getElementById("botoes-enigma").style.display = "block";
  document.getElementById("botoes-feedback").style.display = "none";
}

function fecharEnigma() {
  document.getElementById("enigma-box").style.display = "none";
  setFeedback("");
}

function enviarResposta() {
  const respostaUsuario = document.getElementById("resposta-input").value.trim().toLowerCase();
  const respostaCorreta = enigmas[objetoAtual].resposta.toLowerCase();

  if (respostaUsuario === respostaCorreta) {
    resolvidos[objetoAtual] = true;
    document.getElementById("som-acerto").play();
    setFeedback("🎉 Resposta correta! Clique em 'Avançar' para continuar.");
    document.getElementById("botoes-enigma").style.display = "none";
    document.getElementById("botoes-feedback").style.display = "flex";
    document.querySelector("#botoes-feedback button:last-child").style.display = "none"; // esconde "Tentar novamente"
    atualizarProgresso();
  } else {
    document.getElementById("som-erro").play();
    setFeedback("❌ Resposta incorreta. Clique em 'Tentar Novamente'.");
    document.getElementById("botoes-enigma").style.display = "none";
    document.getElementById("botoes-feedback").style.display = "flex";
    document.querySelector("#botoes-feedback button:last-child").style.display = "inline-block";
    document.querySelector("#botoes-feedback button:first-child").style.display = "none"; // esconde "Avançar"
  }
}

function tentarNovamente() {
  document.getElementById("botoes-enigma").style.display = "block";
  document.getElementById("botoes-feedback").style.display = "none";
  setFeedback("");
}

function tentarSair() {
  if (Object.values(resolvidos).every(v => v)) {
    document.getElementById("tela-final").style.display = "flex";
  } else {
    setFeedback("🔒 A porta está trancada! Resolva todos os enigmas primeiro.");
  }
}

function setFeedback(msg) {
  document.getElementById("feedback").textContent = msg;
}

function atualizarProgresso() {
  const qtd = Object.values(resolvidos).filter(v => v).length;
  document.getElementById("progresso").textContent = `Enigmas resolvidos: ${qtd} / 4`;
}

function iniciarJogo() {
  document.getElementById("overlay-inicio").style.display = "none";
}
