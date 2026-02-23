const celulas = document.querySelectorAll(".celula");

let vezDoX = true;
document.getElementById("restart").addEventListener("click",iniciarJogo)

function iniciarJogo(){
    celulas.forEach(celula => {
        celula.textContent = "";
        celula.addEventListener("click", tratarClick, {once:true})
    })
}

function tratarClick (evento){
    evento.target.textContent = vezDoX ? "X" : "O"; /*Pergunta se é a vez do X ou não */
    vezDoX = !vezDoX; /*Aqui alterna entre X e O. True e False*/
}

iniciarJogo();