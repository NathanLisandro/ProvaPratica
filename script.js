async function consultaApiIBGE () {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    console.log(response)
    const dados = response.data
    let ul = document.getElementById('listaDeEstados');
    for(let i = 0; i < dados.length; i++){
        let li = document.createElement('li');
        let a = document.createElement('a');
        li.innerText = dados[i].nome;
        a.innerText = li
        a.href = '/' + dados[i].nome;
        ul.appendChild(a)
    }
}

consultaApiIBGE()