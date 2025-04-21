import demoMovies from "./movies.json";

export function getLocalMovies() {
    let movies = localStorage.getItem("movies");
    if (movies === null) {
        // If no movies in local storage, initialize with demo movies
        localStorage.setItem("movies", JSON.stringify(demoMovies));
        movies = localStorage.getItem("movies");
    }

    return movies ? JSON.parse(movies) : [];
}

export function addMovie(movie) {
    movie.id = Date.now(); // Assign a unique ID based on the current timestamp
    const movies = getLocalMovies();
    // [{"title":"The Matrix","image":"https://th.bing.com/th/id/OIP.nq66xqwF5qVWxt11yjmU6gHaLH?rs=1&pid=ImgDetMain","type":"Película","director":"Lana Wachowski, Lilly Wachowski","genre":"Acción","year":1999,"rating":5,"seen":true,"id":1744842952377},{"title":"Interstellar","image":"https://image.tmdb.org/t/p/original/tYaC23U62BOJRNVIlFGT6iowEwj.jpg","type":"Película","director":"Christopher Nolan","genre":"Ciencia Ficción","year":2014,"rating":4,"seen":false,"id":1744842992827},{"title":"Rick and Morty","image":"https://es.web.img3.acsta.net/pictures/18/10/31/17/34/2348073.jpg","type":"Serie","director":"Dan Harmon, Justin Roiland","genre":"Animación","year":2013,"rating":5,"seen":true,"id":1744843044327},{"id":1744843082197,"title":"Breaking Bad","image":"https://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg","type":"Serie","director":"Vince Gilligan","genre":"Suspenso","year":2008,"rating":5,"seen":true}]
    const newMovies = [...movies, movie];
    localStorage.setItem("movies", JSON.stringify(newMovies));
}

export function removeMovie(id) {
    const movies = getLocalMovies();
    const newMovies = movies.filter((movie) => movie.id !== id);
    localStorage.setItem("movies", JSON.stringify(newMovies));
}

export function updateMovie(id, updatedMovie) {
    updatedMovie.id = id; // Ensure the ID remains the same
    const movies = getLocalMovies();
    const newMovies = movies.map((movie) => (movie.id === id ? updatedMovie : movie));
    localStorage.setItem("movies", JSON.stringify(newMovies));
}

export function getMovieById(id) {
    const movies = getLocalMovies();
    return movies.find((movie) => movie.id === id);
}

export function getCategories() {
    const movies = getLocalMovies();
    const categories = movies.map((movie) => movie.category);
    return [...new Set(categories)];
}
