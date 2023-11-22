function CliqueBotao(){
    var cep = document.querySelector('#cep').value 
    BuscarDados(cep)
}

async function BuscarDados(cep){
    var dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(x => x.json())
    dadosNaTela(dados)
}

function dadosNaTela(dados){
    document.querySelector('#endereco').value = dados.logradouro
    document.querySelector('#bairro').value = dados.bairro
    document.querySelector('#cidade').value = dados.localidade
    document.querySelector('#estado').value = dados.uf
}