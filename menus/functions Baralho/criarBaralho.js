const perguntar = require("../../utilitarios/pergunta")

async function criarBaralho(Baralho,voltar){
    console.log(`==== Criar baralho ====`)
    inputBaralho = await perguntar("Nome: ")
    if(!inputBaralho||!isNaN(inputBaralho)){
        console.log(`Nome de baralho invalido!`)
        return criarBaralho
    }
    BaralhoAtual = {id:Date.now(), baralho: inputBaralho}

}