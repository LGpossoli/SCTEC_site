/*function mostraSaudacao(){
    const nome = document.getElementById("nome").value;
    const hora = parseInt(document.getElementById("hora").value,10);
    const mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = saudacaoPersonalizada(nome, hora);
}

function saudacaoPersonalizada(nome, hora)
{
    if(hora <12)
    {
        return "Bom dia, " + nome + "!";
    }
    else if (hora > 12 && hora <18)
    {
        return "Boa tarde, " + nome + "!";
    }
    else if (hora > 18)
    {
        return "Boa noite, " + nome + "!";
    }
    else
    {
        return "";
    }
}*/
function setBackgroundColor (color)
{
    document.body.style.backgroundColor = color;
}


document.getElementById("redButton").addEventListener("click", function(){setBackgroundColor("red");});
document.getElementById("greenButton").addEventListener("click", function(){setBackgroundColor("green");});
document.getElementById("blueButton").addEventListener("click", function(){setBackgroundColor("blue");});

document.getElementById("inputBox").addEventListener("keypress", function(event){
    alert("Tecla pressionada: "+ event.key)});