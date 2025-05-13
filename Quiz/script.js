const perguntas = [
    {
        pergunta: "Qual é a raiz quadrada de 144?",
        opcoes: ["12", "14", "10", "16"],
        correta: 0
    },
    {
        pergunta: "Quanto é 25 + 17?",
        opcoes: ["42", "45", "38", "39"],
        correta: 2
    },
    {
        pergunta: "Qual é o valor de π (pi) até a segunda casa decimal?",
        opcoes: ["3.14", "3.15", "3.13", "3.10"],
        correta: 0
    },
    {
        pergunta: "Quanto é 7 x 8?",
        opcoes: ["56", "54", "62", "64"],
        correta: 0
    },
    {
        pergunta: "Qual é a fração equivalente a 0.5?",
        opcoes: ["1/3", "2/5", "1/2", "3/5"],
        correta: 2
    },
    {
        pergunta: "Quanto é 9²?",
        opcoes: ["81", "72", "91", "63"],
        correta: 0
    },
    {
        pergunta: "Qual é o valor de 100 dividido por 4?",
        opcoes: ["25", "30", "20", "40"],
        correta: 0
    },
    {
        pergunta: "Quanto é 15 - 6?",
        opcoes: ["11", "9", "10", "8"],
        correta: 1
    },
    {
        pergunta: "Qual é o número primo entre 12, 14, 17 e 18?",
        opcoes: ["12", "14", "17", "18"],
        correta: 2
    },
    {
        pergunta: "Qual é o ângulo complementar de 30°?",
        opcoes: ["60°", "50°", "70°", "80°"],
        correta: 0
    }
]

let perguntaAtual = 0
let pontuacao = 0
let erros = 0
let opcaoSelecionada = null

const pergunta = document.getElementById("pergunta")
const opcoes = document.getElementById("opcoes")
const botaoProxima = document.getElementById("proxima")
const quiz = document.getElementById("quiz")
const pontuacaoFinal = document.getElementById("pontuacao")
const valorPontuacao = document.getElementById("valor-pontuacao")
const botaoReiniciar = document.getElementById("reiniciar")
const errosContador = document.getElementById("erros")
const acertos = document.getElementById("acertos")

function atualizarPlacar() {
    acertos.textContent = pontuacao
    errosContador.textContent = erros
}

function mostrarPergunta(){
    const perguntaAtualObj = perguntas[perguntaAtual]
    pergunta.textContent = perguntaAtualObj.pergunta
    opcoes.textContent = ""
    perguntaAtualObj.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button")
        botao.textContent = opcao
        botao.classList.add("opcao")
        botao.addEventListener("click", ()=>selecionarOpcao(indice))
        opcoes.appendChild(botao)
    })
    opcaoSelecionada = null
    botaoProxima.disabled = true
}

function selecionarOpcao(indice){
    opcaoSelecionada = indice
    const botoes = document.querySelectorAll(".opcao")
    botoes.forEach((botao, i)=>{
        botao.classList.toggle("selecionada", i == indice)
    })
    botaoProxima.disabled = false
}

function mostrarPontuacao(){
    quiz.classList.add("esconder")
    pontuacaoFinal.classList.remove("esconder")
    valorPontuacao.textContent = pontuacao
}

botaoProxima.addEventListener("click", ()=>{
    if(opcaoSelecionada == perguntas[perguntaAtual].correta){
        pontuacao++
    } else {
        erros++
    }
    atualizarPlacar()

    perguntaAtual++
    if(perguntaAtual < perguntas.length){
        mostrarPergunta()
    } else {
        mostrarPontuacao()
    }
})

botaoReiniciar.addEventListener("click", ()=>{
    perguntaAtual = 0
    pontuacao = 0
    erros = 0

    quiz.classList.remove("esconder")
    pontuacaoFinal.classList.add("esconder")

    atualizarPlacar()
    mostrarPergunta()
})

mostrarPergunta()