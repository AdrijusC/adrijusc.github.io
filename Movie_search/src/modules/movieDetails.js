export const displayMovieDetails = (movie) => {
    const modal = document.getElementById('movieModal');
    const modalContent = document.getElementById('movieDetails');
  
    modalContent.innerHTML = `
      <h2>${movie.Title}</h2>
      <p><strong>Year:</strong> ${movie.Year}</p>
      <p><strong>Director:</strong> ${movie.Director}</p>
      <p><strong>Cast:</strong> ${movie.Actors}</p>
      <p><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>
      <p>${movie.Plot}</p>
      <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title}">
    `;
  
    modal.style.display = 'flex';

    const closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  };