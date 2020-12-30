import '../styles.css';
import '@pnotify/core/dist/BrightTheme.css';
import refs from './refs.js';
import fetchCountries from './fetchCountries.js';

const _ = require('lodash');

// console.log('hello');
// console.log(refs.searchInput);

function inputHandler(input) {
  input.addEventListener('input', _.debounce(getCountries, 500));
}

function getCountries(event) {
  const name = event.target.value;
  refs.containerRef.innerHTML = '';

  fetchCountries(name);
}

inputHandler(refs.searchInput);
