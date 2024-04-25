async function consultaApiIBGE() {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    const dados = await response.json();
    let ul = document.querySelector('ul');
    ul.style = "list-style: none"
    for (let i = 0; i < dados.length; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a')
        li.textContent = dados[i].nome;
        a.appendChild(li)
        a.href = './municipios/index.html?estado=' + dados[i].sigla
        a.style = 'text-decoration: none;'
        ul.appendChild(a)
    }
}


consultaApiIBGE()