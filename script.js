
let container = document.querySelector('.informacao')
let formulario = document.querySelector('.formulario')
let filme = document.querySelector('.form-control')

async function getApi(filme){
    let request = await fetch(`https://www.omdbapi.com/?s=${filme}&apikey=e6c43dc6`)
    let data = await request.json()
    
    container.innerHTML = ''
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
