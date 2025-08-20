const { rm } = require("fs")
const perguntar = require("../utilitarios/pergunta.js")
const rl = require("../utilitarios/rl.js")


function menuBaralho(Baralho,menuPrincipal){
    return async function voltar(){
    console.log(`==== Menu Baralho ====
    
    1 - Criar Baralho
    2 - Listar Baralhos
    3 - Atualizar Baralho
    4 - Deletar Baralho
    5 - Voltar
    `)
    let inputMenuBaralho = await perguntar("Resposta: ")
    let rMb = parseInt(inputMenuBaralho)

    switch (rMb) {
        case 1: criarBaralho(Baralho,voltar); break;
        case 2: listarBaralhos(Baralho,true,voltar); break;
        case 3: atualizarBaralho(Baralho,voltar); break;
        case 4: deletarBaralho(Baralho,voltar); break;
        case 5: return menuPrincipal();
        default: console.log("Opção inválida!"); return voltar();
    }
}
}

module.exports = menuBaralho;