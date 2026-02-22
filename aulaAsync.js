
/*setTimeout(() => {
    console.log("alerta");
}, 3000);*/

/*setInterval(() => {
    console.log("alerta");
}, 3000);*/
console.log("Inicio da execução");

function buscaDadosDoServidor() {

    return new Promise((resolve, reject) => {
        console.log("Buscando dados no servidor");

        setTimeout(() => {
            let sucesso = Math.random() > 0.5;

            if (sucesso) {
                resolve("Dados recebidos com sucesso");
            }
            else {
                reject("Falha ao buscar dados no servidor");
            }
        }, 2000);
    });
}

/*buscaDadosDoServidor().then((mensagem) => {
    console.log(mensagem)
}).catch((erro) => {
    console.error(erro);
});*/

const minhaFuncaoAssincrona = async () =>{
    try{
        const resultado = await buscaDadosDoServidor();
        console.log(resultado);
    }
    catch(erro){
        console.error(erro);
    }
}

minhaFuncaoAssincrona();

console.log("Final da execução");