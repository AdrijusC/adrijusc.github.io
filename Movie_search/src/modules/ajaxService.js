const apiKey = "7863be49";
const baseUrl = "https://www.omdbapi.com/";

export const searchMovies = async (term) => {
  try {
    const response = await fetch(`${baseUrl}?apikey=${apiKey}&s=${term}`);
    if (!response.ok) {
      throw new Error(`Network response was not ok, status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Search error:", error);
    return null;
  }
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
