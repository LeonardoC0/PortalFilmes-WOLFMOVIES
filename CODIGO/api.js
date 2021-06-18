const API_KEY = 'bc0c02063034084a0ba735d21e584077'
// Funções para Pesquisa
function exibeNoticias(){
    let divTela = document.getElementById('tela');
    let texto = '';
    let dados = JSON.parse (this.responseText);
    for(i=0; i < dados.results.length; i++){
        let filme = dados.results[i];
        texto = texto + `
            <div class="filme">
                <a><img src="https://image.tmdb.org/t/p/w500${filme.poster_path}"></a><br>
                <span class="titulo">${filme.title}</span><br>
                <span class="data"> ${filme.release_date} </span><br>
                <span class="descricao">
                        ${filme.overview}
                    <a href="https://www.themoviedb.org/movie/${filme.id}">Leia mais...</a>
                </span>
            </div>
        ` ;
        };
    divTela.innerHTML = texto
}

function aparecerNoticia (){
    let movie_id = document.getElementById('txtpesquisa').value;
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt&query=${movie_id}&page=1&include_adult=false`);
    xhr.send ();
}

document.getElementById('pesquisa').addEventListener('click', aparecerNoticia);
// Fim


//Função Pesquisa para Pagina de Pesquisa










