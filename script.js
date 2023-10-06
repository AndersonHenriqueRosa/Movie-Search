/* let container = document.querySelector('.informacao')
let formulario = document.querySelector('.formulario')
let filmes = document.querySelector('.form-control')

async function getApi(){
    let request = await fetch(` http://www.omdbapi.com/?s=${filmes}&apikey=e6c43dc6`)
    let data = await request.json()
    
    // exibição
    data.forEach((filme) => {
        console.log(filme.title);
        container.innerHTML += `
        <img src="${data['Search'][0]['Poster']}"></img>
        <p>${data['Search'][0]['Title']}</p>
        `
    })
     
}



formulario.addEventListener('submit', function (e){
    e.preventDefault();

    getApi(filmes.value)
    filmes.value = ''
}) */

let container = document.querySelector('.informacao')
let formulario = document.querySelector('.formulario')
let filme = document.querySelector('.form-control')

async function getApi(filme){
    let request = await fetch(` http://www.omdbapi.com/?s=${filme}&apikey=e6c43dc6`)
    let data = await request.json()
    console.log(data['Search'])
    // exibição
    data['Search'].forEach(movie=> {
        container.innerHTML += `
            <div class="movie">
                <img src="${movie['Poster']}"></img>
                <p>${movie['Title']}</p>
            </div>
        `
    })
    
     
}



formulario.addEventListener('submit', function (e){
    e.preventDefault();

    getApi(filme.value)
    filme.value = ''
})