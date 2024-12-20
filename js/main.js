import { displayShows } from './DisplayShows.js';
import { displayMovies } from './DisplayMovies.js';

const global = {
  currentPage: window.location.pathname,
};

// Highlight Active Link
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });
}

// Init App
function App() {
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      displayMovies();
      break;
    case '/pages/shows.html':
      displayShows();
      break;
    case '/pages/movie-details.html':
      console.log('Movie Details');
      break;
    case '/pages/tv-details.html':
      console.log('TV Details');
      break;
    case '/pages/search.html':
      console.log('Search');
      break;
  }
  highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', App);
