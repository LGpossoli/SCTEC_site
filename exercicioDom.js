function novaTarefa(){
    /* pega o conteudo do input*/
    const input = document.getElementById("tarefa");
    const texto = input.value.trim();

    if (texto === "") return;

    /*Cria o li */
    const li = document.createElement("li");
    /*Coloca o texto dentro da li */
    li.textContent = texto;

    /*Chama a ul e adiciona li na ul*/
    const lista = document.getElementById("tarefas");
    lista.appendChild(li);

    input.value = "";

}

