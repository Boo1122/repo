import './Movie_Page.css'

export class MoviePage {
  constructor() {
    this.moviePage();
    this.generateUrl();
    this.getMovies();
   
 
  }

  moviePage() {
    const body = document.getElementById("body");
    const container = document.createElement("div");
    container.id = "movie-page";
    container.classList.add("page");

    body.appendChild(container);
   
  }
  
  generateUrl(par) {
    return `https://movies-api-siit.herokuapp.com/movies${par}`;
  }
  
  getMovies() {
    const url = this.generateUrl("?take=10&skip=10");
   
    
    fetch(url)
    .then((response) => response.json())
    .then((movieData) => {
      this.movieData = movieData;ko
      this.renderMovieList();
    });
  }
  
  renderMovieList() {
    for (const movie of this.movieData.results) {
      this.moviesContent(movie);
    }
    this.moviesPagination();
  }
  
  moviesContent(movie) {
    const body = document.getElementById("movie-page");
    
    const container = document.createElement("div");
    container.id = "movie-page-container";
    
    const posters = document.createElement("div");
    posters.className = "posters";
    
    const p = document.createElement("p");
    p.innerHTML = movie.Title;
    
    
    
    const img = document.createElement("img");
    img.classList.add("detail-posters");
    img.setAttribute("src", movie.Poster);
    img.classList.add("nav-link");
    img.setAttribute("data-target", "single-movie-page");
    
    body.appendChild(container);
    container.appendChild(posters);
    posters.appendChild(p);
    posters.appendChild(img);
  
  }



  moviesPagination() {
    const body = document.getElementById('body')
    const paginationMovie = document.getElementById('movie-page')

    const paginationDiv = document.createElement("div");
    paginationDiv.className = "pagination-div";

    const previous = document.createElement("button");
    previous.id = "previous-movie";
    previous.className = "previous";
    previous.innerText = `Previous`;

    const next = document.createElement("button");
    next.id = "next-movie";
    next.className = "next";
    next.innerText = `Next`;
    
    body.appendChild(paginationMovie;
    paginationMovie.appendChild(paginationDiv);
    paginationDiv.appendChild(previous);
    paginationDiv.appendChild(next);
  }
  
}
