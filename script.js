function consultaApiIBGE () {
    const response = fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    console.log(response)
    const dados = response.data
    let ul = document.getElementById('listaDeEstados');
    for(let i = 0; i < dados.length; i++){
        let li = document.createElement('li');
        li.innerText = dados[i].nome;
        ul.appendChild(li)
    }
}

consultaApiIBGE()