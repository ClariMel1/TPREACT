export function getLocalMovies() {
    const movies = localStorage.getItem("movies");
    return movies ? JSON.parse(movies) : [];
}

export function addMovie(movie) {
    movie.id = Date.now(); // Assign a unique ID based on the current timestamp
    const movies = getLocalMovies();
    const newMovies = [...movies, movie];
    localStorage.setItem("movies", JSON.stringify(newMovies));
}

export function removeMovie(id) {
    const movies = getLocalMovies();
    const newMovies = movies.filter((movie) => movie.id !== id);
    localStorage.setItem("movies", JSON.stringify(newMovies));
}

export function updateMovie(id, updatedMovie) {
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
