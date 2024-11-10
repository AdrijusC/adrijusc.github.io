const apiKey = "7863be49";
const baseUrl = "https://www.omdbapi.com/";

export const searchMovies = (term) => {
  const url = `${baseUrl}?apikey=${apiKey}&s=${term}`;
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.error("Search error:", error);
      return null;
    });
};

export const getMovieDetails = (movieId) => {
  const url = `${baseUrl}?apikey=${apiKey}&i=${movieId}`;
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.error("Details fetch error:", error);
      return null;
    });
};
