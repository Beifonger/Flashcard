const { rm } = require("fs")
const perguntar = require("../utilitarios/pergunta.js")
const rl = require("../utilitarios/rl.js")

const criarFlashcard = require("./functions Flashcard/criarFlashcard.js")
const listarFlashcards = require("./functions Flashcard/listarFlashcards.js")

function menuFlashcard (flashcard,menuPrincipal){
    return async function voltar (){
    console.log(`==== Menu Flashcard ====
    
    1 - Criar Flashcard
    2 - Listar Flashcards
    3 - Atualizar Flashcard
    4 - Deletar Flashcard
    5 - filtrar
    6 - Voltar
    `)

    let inputMenuFlashcard = await perguntar("Reposta: ")
    let rMf = parseInt(inputMenuFlashcard)



    switch (rMf) {
        case 1: criarFlashcard(flashcard,voltar); break;
        case 2: listarFlashcards(flashcard,true,voltar)(); break;
        case 3: atualizarFlashcard(flashcard,voltar); break;
        case 4: deletarFlashcard(flashcard,voltar); break;
        case 5: filtrarFlashcards(flashcard,voltar); break;
        case 6: menuPrincipal(flashcard,voltar); break;
        default: console.log("Opção inválida!"); return voltar();
    }
}
}
module.exports = menuFlashcard;