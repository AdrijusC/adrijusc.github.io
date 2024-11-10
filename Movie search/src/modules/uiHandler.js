import { getMovieDetails } from "./ajaxService";
import { displayMovieDetails } from "./movieDetails";

export const renderMovies = (movies, container) => {
    container.innerHTML = '';
    movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
      movieCard.innerHTML = `
        <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title}">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
      `;
  
      movieCard.addEventListener('click', () => showMovieDetails(movie.imdbID));
      container.appendChild(movieCard);
    });
};
  
const showMovieDetails = async (movieId) => {
const details = await getMovieDetails(movieId);
if (details) {
    displayMovieDetails(details);
 }
};