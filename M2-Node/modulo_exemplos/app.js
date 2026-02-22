/*var pessoa = require("./commons/pessoa");
var soma = require("./commons/soma");
var imposto = require("./commons/calculoImposto");*/
var calculadora = require("./commons/exercicioCalculadora");

/*luis = pessoa();

console.log(JSON.stringify(luis));
console.log(soma(2,2));

console.log("Valor do produto com imposto: "+ imposto.adicionar(10));
console.log("Valor do imposto: "+ imposto.valor(10));
console.log("Taxa do imposto: "+ imposto.taxa);*/

console.log("A soma dos valores é: ", calculadora.soma(2,3));
console.log("A subtração dos valores é: ", calculadora.subtracao(2,3));
console.log("A multiplicação dos valores é: ", calculadora.multiplicacao(2,3));
console.log("A divisão dos valores é: ", calculadora.divisao(2,3));