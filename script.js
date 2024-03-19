/*
Jokenpo é uma brincadeira japonesa, onde dois jogadores escolhem um dentre três possíveis itens: Pedra, Papel ou Tesoura.

O objetivo é fazer um juiz de Jokenpo que dada a jogada dos dois jogadores informa o resultado da partida.

As regras são as seguintes:

    ->Pedra empata com Pedra e ganha de Tesoura
    ->Tesoura empata com Tesoura e ganha de Papel
    ->Papel empata com Papel e ganha de Pedra
*/
let uPoint = 0
let alexaPoint = 0
let suaJogada = document.querySelectorAll("#rock, #paper, #scissors")



suaJogada.forEach(jogada => {
    jogada.addEventListener("click", function () {
        let alexaJogou = alexa()
        suaJogada = jogada.id
        console.log("Você clicou em: ", suaJogada)
        console.log("Alexa jogou: ", alexaJogou)
        resultado(suaJogada, alexaJogou)
    })
});

function resultado(you, alexa) {
    let showResult = document.querySelector(".result")
    let uScore = document.querySelector(".your-score")
    let alexaScore = document.querySelector(".machine-score")

    if (you === alexa) {
        console.log("empate")
        console.log(`Você: ${uPoint} X ${alexaPoint} `)
        showResult.textContent = "Empate!"
    } else if ((you === "rock") && (alexa === "scissors")) {
        console.log("Você ganhou")
        uPoint++
        console.log(`Você: ${uPoint} X ${alexaPoint} `)
        showResult.textContent = "Você ganhou"
    } else if ((you === "scissors") && (alexa === "rock")) {
        console.log("Alexa ganhou")
        alexaPoint++
        console.log(`Você: ${uPoint} X ${alexaPoint} `)
        showResult.textContent = "Alexa ganhou"
    } else if ((you === "scissors") && (alexa === "paper")) {
        console.log("Você ganhou")
        uPoint++
        console.log(`Você: ${uPoint} X ${alexaPoint} `)
        showResult.textContent = "Você ganhou"
    } else if ((you === "paper") && (alexa === "scissors")) {
        console.log("Alexa ganhou")
        alexaPoint++
        console.log(`Você: ${uPoint} X ${alexaPoint} `)
        showResult.textContent = "Alexa ganhou"
    } else if ((you === "paper") && (alexa === "rock")) {
        console.log("Você ganhou")
        uPoint++
        console.log(`Você: ${uPoint} X ${alexaPoint} `)
        showResult.textContent = "Você ganhou"
    } else if ((you === "rock") && (alexa === "paper")) {
        console.log("Alexa ganhou")
        alexaPoint++
        console.log(`Você: ${uPoint} X ${alexaPoint} `)
        showResult.textContent = "Alexa ganhou"
    }

    uScore.textContent = uPoint 
    alexaScore.textContent = alexaPoint

}

function alexa() {
    let maoAlexa = Math.floor(Math.random() * 3) + 1
    let jogadaAlexa = ""

    if (maoAlexa == 1) {
        jogadaAlexa = "rock"
    } else if (maoAlexa == 2) {
        jogadaAlexa = "paper"
    } else {
        jogadaAlexa = "scissors"
    }
    return jogadaAlexa
}

