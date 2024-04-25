function pegaFavoritos(){
    if(localStorage.getItem('favoritos') == null){
        document.getElementById('listaDeEstados').innerHTML = "Nenhum favorito encontrado!"
    } else {
        let json = JSON.parse(localStorage.getItem('favoritos'));
        let ul = document.getElementById('listaDeEstados')

        for(let i = 0; i < json.nome.length; i++){
            let li = document.createElement('li');
            li.textContent = json.nome[i]
            ul.appendChild(li)
        }
    }
}
pegaFavoritos()