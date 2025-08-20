function listarTodos(arr,controle,voltar){
    if(arr.length === 0){
        console.log(`\nNão há Flashcards cadastrados\n`);
        return voltar()
    }
    console.log(`==== Listando Todos ====\n`)
    arr.forEach(a => {
    console.log(`id: ${a.id}
    frente: ${a.frente}
    verso: ${a.verso}
    `)
    });
    if(controle){return voltar()}
}

module.exports = listarTodos;