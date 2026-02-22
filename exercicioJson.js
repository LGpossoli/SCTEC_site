
console.log("Inicio da execução");

const produtos = [
    {id:1,nome:"Camiseta",preco:25.99},
    {id:2,nome:"Calça",preco:39.99},
    {id:3,nome:"Tênis",preco:299.99},
];

function carregarProduto(id) {

    return new Promise((resolve, reject) => {
        console.log("Buscando produtos...");

        setTimeout(() => {
            
            const produto = produtos.find(p => p.id === Number(id));

            if (produto) {
                resolve(produto);
            }
            else {
                reject("Produto não encontrado");
            }
        }, 2000);
    });
}

carregarProduto(5)
    .then(produto => {

        try {

            console.log("Produto recebido:", produto);

            // Converte para JSON
            const json = JSON.stringify(produto);
            console.log("Convertido para JSON:", json);

            // Converte de volta para objeto
            const objetoNovamente = JSON.parse(json);
            console.log("Convertido novamente para objeto:", objetoNovamente);

        } catch (erro) {
            console.log("Erro ao manipular JSON:", erro);
        }

    })
    .catch(erro => {
        console.log("Erro na Promise:", erro);
    });

async function buscarProduto(id) {

    try {

        const produto = await carregarProduto(id);

        console.log("Produto recebido:", produto);

        // Converter para JSON
        const json = JSON.stringify(produto);
        console.log("Convertido para JSON:", json);

        // Reverter para objeto
        const objetoNovamente = JSON.parse(json);
        console.log("Convertido novamente:", objetoNovamente);

    } catch (erro) {

        console.log("Erro capturado:", erro);

    }

}

buscarProduto(3);

console.log("Final da execução");



