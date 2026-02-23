const carros = ["Uno","Fusca","Escort","Gol"];

var i = 0;
var rodando = true;

/*Do While */

function continuar() {

    if (!rodando || i>= carros.length) return;

do
{
    document.getElementById("saida").innerHTML += "<p>"+carros[i]+"</p>";
    
    i++;
}

while(false);
}
function parar() {
    rodando = false;
}