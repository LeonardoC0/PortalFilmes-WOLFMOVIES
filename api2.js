const API_KEY = 'bc0c02063034084a0ba735d21e584077'
// Funções para Pesquisa
function exibeNoticias(){
    let divTela = document.getElementById('tela');
    let texto = '';
    let dados = JSON.parse (this.responseText);
    for(i=0; i < 4; i++){
        let filme = dados.results[i];
        texto = texto + `

                <div class="col-md-6 col-lg-3">
                    <div class="card">
                    <img alt="Card image cap" class="card-img-top img-fluid" src="https://image.tmdb.org/t/p/w500${filme.poster_path}" /><br>
                    <span class="titulo">${filme.title}</span><br>
                    <span class="data"> ${filme.release_date} </span><br>
                    <span class="descricao">
                        ${filme.overview}
                    </span>
                    <a href="https://www.themoviedb.org/movie/${filme.id}">Leia mais...</a>
                    </div>
                </div>
        ` ;
        };
    divTela.innerHTML = texto
}

function aparecerNoticia (){
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt`);
    xhr.send ();
}
window.onload = () => {
    aparecerNoticia()
}

// Fim


//Função Pesquisa para Pagina de Pesquisa

function mudarPagina1(){
    
}
function mudarPagina2(){

}
function mudarPagina3(){

}
function mudarPagina4(){
    
}