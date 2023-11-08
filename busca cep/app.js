function CliqueBotao(){
    const cep = document.querySelector('.cep').value
    BuscarDados(cep)

}
async function BuscarDados(cep){
    const dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(Response => Response.json());
    DadosTela(dados)


}

function DadosTela(dados){
    document.querySelector('.logradouro').value =  dados.logradouro
    document.querySelector('.bairro').value = dados.bairro
    document.querySelector('.localidade').value =  dados.localidade
    document.querySelector('.uf').value = dados.uf
    document.querySelector('.ddd').value =  dados.ddd
   

}