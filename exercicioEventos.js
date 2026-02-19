function clientePedido()
{
    const mensagem = document.getElementById("mensagem");
    const numeroPedido = document.getElementById("inputBox").value;
    let resposta;

    if(numeroPedido == 1)
    {
        resposta = "Você escolheu uma pizza de calabresa!";
    }
    else if (numeroPedido == 2)
    {
        resposta = "Você escolheu uma pizza de quatro queijos!";
    }
    else if (numeroPedido == 3)
    {
        resposta = "Você escolheu uma pizza de frango com catupiry!";
    }
    else if (numeroPedido == 4)
    {
        resposta = "Você escolheu uma pizza de brigadeiro!";
    }
    else
    {
        resposta = "Número do pedido inválido";
    }

    mensagem.innerHTML = resposta;
}

