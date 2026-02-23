/*function trocaCor()
{
    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
    const div3 = document.getElementById("div3");

    div1.style.backgroundColor = "red";
    div2.style.backgroundColor = "yellow";
    div3.style.backgroundColor = "green";
}

function retornaCor()
{
    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
    const div3 = document.getElementById("div3");

    div1.style.backgroundColor = "";
    div2.style.backgroundColor = "";
    div3.style.backgroundColor = "";
}*/

/*function efetuaOperacao()
{
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operador = document.getElementById("operador").value;
    let resultado;

    switch (operador) {

        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 == 0)
            {
                resultado = "Divisão por 0 é inválida!";
            }
            else
            {
                resultado = num1 / num2;
            }
            break; 
        default:
            resultado = "Operador inválido";
    }

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;

}*/

function mudarIdioma() {

    let idioma = document.getElementById("idiomas").value;
    let saudacao;

    switch (idioma) {

        case "PT-BR":
            saudacao = "Olá, Bom Dia!";
            break;
        case "EN":
            saudacao = "Hello, Good Morning!";
            break;
        case "ES":
            saudacao = "Buenos Dias!";
            break;
        case "FR":
            saudacao = "Bonjour!";
            break;
        default:
            saudacao = "Seleção inválida;"
    }
    document.getElementById("saudacao").innerHTML = saudacao;
}

