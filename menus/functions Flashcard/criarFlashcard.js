const perguntar = require("../../utilitarios/pergunta.js")
const rl = require("../../utilitarios/rl.js")

async function criarFlashcard(arr,voltar){
    console.log(`==== Criar Flashcard ====\n`)

    let textoFrente = await criarFrente()
    let textoVerso = await criarVerso()

    let flashcard = {id:Date.now(),frente:textoFrente,verso:textoVerso}
    arr.push(flashcard)
    console.log(`\nFlashcard cadastrado com sucesso!\n`)
    return voltar()
}

async function criarFrente(){
    let inputFrente = await perguntar("Frente (texto): ")
    if (!inputFrente || !isNaN(inputFrente)){
        console.log(`Texto invalido!\n`)
        return criarFrente()
    }
    return inputFrente;
}

async function criarVerso(){
    let inputVerso = await perguntar("Verso (texto): ")
    if (!inputVerso || !isNaN(inputVerso)){
        console.log(`Texto invalido!\n`)
        return criarVerso()
    }
    return inputVerso
}

module.exports = criarFlashcard;
