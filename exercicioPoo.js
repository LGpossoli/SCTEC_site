class Produto{
    constructor(nome, preco){
        this.nome = nome; //Propriedade da Classe
        this.preco = preco; //Propriedade da Classe
        
    }
     mostrarDetalhes()
    {
        console.log(`${this.nome} -  ${this.preco} `);
    }
}

class Eletronico extends Produto{
    constructor(nome,preco,garantia){
        super(nome,preco);
        this.garantia = garantia;
    }
     mostrarDetalhes()
    {
        console.log(`${this.nome} -  ${this.preco} - ${this.garantia} meses`);
    }
}

const Fruta = new Produto("Banana","5,99");
const Celulares = new Eletronico("Celular","999,90","12");

Fruta.mostrarDetalhes();
Celulares.mostrarDetalhes();

