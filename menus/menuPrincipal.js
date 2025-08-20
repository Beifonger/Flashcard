const perguntar = require("../utilitarios/pergunta.js")
const rl = require("../utilitarios/rl.js")
const menuBaralho = require("./menuBaralho.js")
const menuFlashcard = require("./menuFlashcard.js")

function menuPrincipal(b,f){
    return async function voltar(){
    console.log(`==== Menu Principal ====
    
    1 - Baralho
    2 - Flashcard
    3 - sair
    `)

    let inputMenuPrincipal = await perguntar("Resposta: ")
    let respostaMp = parseInt(inputMenuPrincipal)

    const Baralho = menuBaralho(b,voltar)
    const Flashcard = menuFlashcard(f,voltar)

    switch (respostaMp) {
        case 1: Baralho(); break;
        case 2: Flashcard(); break;
        case 3: console.log("Saindo..."); rl.close(); break;
        default: console.log("Opção inválida!"); return voltar();
    }    
}
}

module.exports = menuPrincipal;