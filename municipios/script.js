const urlSearchParams = new URLSearchParams(location.search)
const estadoNome = urlSearchParams.get('estado')

function adicionarAoLocalStorage(cidade){
    console.log(cidade)
    if(localStorage.getItem('favoritos') == null){
        let nomeCidade = {nome: [cidade]}
        let favoritos = JSON.stringify(nomeCidade)
        localStorage.setItem('favoritos', favoritos)
    } else {
        let cidadesFavoritas = localStorage.getItem('favoritos')
        let cidadesFavoritasToJson = JSON.parse(cidadesFavoritas);
        cidadesFavoritasToJson.nome.push(cidade)
        console.log(   cidadesFavoritasToJson)
        let cidadesFavoritasToString = JSON.stringify(cidadesFavoritasToJson);
        localStorage.setItem('favoritos', cidadesFavoritasToString)
    }
}
async function descobreEstado() {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    const dados = await response.json();

    for (let i = 0; i < dados.length; i++) {
        if (dados[i].sigla == estadoNome) {
            document.getElementById('estadoBr').innerHTML = dados[i].nome;
            return;
        }
    }
    return 
}
async function consultaMunicipios() {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoNome}/municipios`);
    const dados = await response.json();
    let ul = document.querySelector('ul');
    ul.style = "list-style: none"
    for (let i = 0; i < dados.length; i++) {
        let li = document.createElement('li');
        let button = document.createElement('button')
        let a = document.createElement('a')
        li.textContent = dados[i].nome;
        li.style = "list-style: none; margin-right: 15px;"
        button.textContent = "Adicionar aos favoritos";
        button.onclick = function() {adicionarAoLocalStorage(dados[i].nome)};

        li.appendChild(button)
        ul.appendChild(li)
    }
}

descobreEstado()
consultaMunicipios()