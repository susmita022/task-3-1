const searchapi= "https://api.themoviedb.org/3/search/movie?&api_key=77d8d6a6ad8f60ce6d162a40d37ab525&query=";
const rated= " https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=77d8d6a6ad8f60ce6d162a40d37ab525&page=1";
const img="https://image.tmdb.org/t/p/w1280";


getmovies(rated);
function getmovies(url){
    fetch(url)
    .then(res => res.json())
    
    .then(data => {
        Movies(data.results);
    }) 
}
 function Movies(data) {
     main.innerHTML = "";

     data.forEach((movie) => {
        const { poster_path, title, overview } = movie;

        const eachmovie = document.createElement("div");
        eachmovie.classList.add("movie");

        eachmovie.innerHTML = `
        <div class="each">
        <div class="image">
      <img src="${img + poster_path}" alt="${title}" class="poster">
      <div class="overlay">
        <div class="plot"><h2>PLOT</h2> ${overview}</div>
      </div></div>
      <div class="movieabout">
          <div class="title">${title}</div> </div>`
       
      main.appendChild(eachmovie);
     });
     
 }
 const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
 form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML='';
    const searchmovie = search.value;

    if (searchmovie) {
        getmovies(searchapi + searchmovie);

        search.value = "";
    }
});