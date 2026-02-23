function precoFinal()
{
    let valorOriginal = document.getElementById("valor").value;
    let valorDesconto = document.getElementById("desconto").value;
    console.log("Valor Original: ", valorOriginal);
    console.log("Valor Desconto: ", valorDesconto);
    let calculo = valorOriginal * (1-(valorDesconto/100))

    if (valorDesconto >= 50) 
    {
        document.getElementById("desconto").innerHTML = "Muito desconto! Consulte a gerencia";
        alert("Não dá pra fazer esse valor quiridu!");
    }
    else 
    {
        document.getElementById("preco").innerHTML = `R$ ${calculo.toFixed(2)}` ;
        alert(`Vaix pagar: R$ ${calculo.toFixed(2)}`);
    }
}

