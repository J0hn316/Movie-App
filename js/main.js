import { getTvShows } from './TvShows.js';
import { getMovieInfo, getMovies } from './Movies.js';

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
      getMovies();
      break;
    case '/pages/shows.html':
      getTvShows();
      break;
    case '/pages/movie-details.html':
      getMovieInfo();
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
