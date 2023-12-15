function adicionarTarefa() {
    const inputTarefa = document.getElementById('novaTarefa');
    const textoTarefa = inputTarefa.value.trim();
    
    if(textoTarefa !== "") {
        const listaTarefas = document.getElementById("listaTarefas");

        listaTarefas.innerHTML += `
            <li>
                <span>${textoTarefa}</span>
                <button onclick="marcarConcluida(this)">Concluída</button>
                <button onclick="removerTarefa(this)">Remover</button>
            </li>
        `
    }
    inputTarefa.value = "";
    
}

function marcarConcluida(botaoConcluir){
    const tarefa = botaoConcluir.parentNode;

    //Adiciona a classe "completed" para mudar o estilo
    tarefa.classList.toggle("completed");

    if(tarefa.classList.contains(completed)){
        //Move a tarefa para final da lista
        document.getElementById("listaTarefas").appendChild(tarefa);

        //Remove os botões da tarefa concluída
        const botoes = tarefa.querySelectorAll("button");
        botoes.Remover.parentNode.remove();

    }
}

function removerTarefa(botaoRemover) {
    botaoRemover.parentNode.remove();
    
    
    }