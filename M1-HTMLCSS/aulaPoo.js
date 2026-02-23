class Veiculo{
    constructor(marca,modelo,ano,tipo,qtdPortas){
        this.marca = marca; //Propriedade da Classe
        this.modelo = modelo; //Propriedade da Classe
        this.ano = ano; //Propriedade da Classe
        this.tipo = tipo; //Propriedade da Classe
        this.qtdPortas = qtdPortas; //Propriedade da Classe
    }
     mostrarDadosDoVeiculo()
    {
        console.log(`${this.marca} ${this.modelo} ${this.ano}, ${this.tipo} ${this.qtdPortas} portas`);
    }

    mostrarModelo(){
        console.log(`A marca da moto é ${this.marca}`)
    }
}

class Moto extends Veiculo{
    constructor(marca,modelo,ano,cilindradas){
        super(marca,modelo,ano);
        this.cilindradas = cilindradas;
    }
     mostrarDadosDoVeiculo()
    {
        console.log(`${this.marca} ${this.modelo} ${this.ano}, ${this.cilindradas} cilindradas`);
    }
}
class Carro extends Veiculo{
    constructor(marca,modelo,ano,tipo,qtdPortas){
        super(marca,modelo,ano,tipo,qtdPortas);
    }
}


const meuCarro = new Carro("Ford","KA","2008","Sedan","4");
const minhaMoto = new Moto("Yamaha","K2","2008",300);

meuCarro.mostrarDadosDoVeiculo();
minhaMoto.mostrarDadosDoVeiculo();

