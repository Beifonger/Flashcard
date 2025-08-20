const perguntar = require("../../utilitarios/pergunta")
const listarTodos = require("./functions Listar/listarTodos.js")
const listarFiltrado = require("./functions Listar/listarFiltrado.js")

function listarFlashcards(flashcard,controle,menuFlashcard){
    return async function voltar(){
        if(controle){console.log(`==== Listar ====`)}
        console.log(`
    1 - listar todos
    2 - listar (baralho)
    3 - voltar
        `)
        let inputMenuLista = await perguntar("Resposta: ")
        let rMl = parseInt(inputMenuLista)

        switch(rMl){
            case 1: listarTodos(flashcard,controle,voltar); break;
            case 2: listarFiltrado(flashcard,controle,voltar); break;
            case 3: return menuFlashcard()
            default: console.log("Opção inválida!"); return voltar();
        }
    }
}

module.exports = listarFlashcards;