import { searchMovies, getMovieDetails } from './modules/ajaxService.js';
import { renderMovies } from './modules/uiHandler.js';
import { displayMovieDetails } from './modules/movieDetails.js';


document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('searchButton');
  const searchInput = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('resultsSection');

  searchButton.addEventListener('click', async () => {
    const searchTerm = searchInput.value.trim();

    if (searchTerm) {
      const data = await searchMovies(searchTerm);

      if (data && data.Response === 'True') {
        renderMovies(data.Search, resultsContainer);
      }
    }
  });

  resultsContainer.addEventListener('click', async (event) => {
    const movieId = event.target.dataset.movieId;

    if (movieId) {
      const movieDetails = await getMovieDetails(movieId);

      if (movieDetails) {
        displayMovieDetails(movieDetails);
      }
    }
  });
});