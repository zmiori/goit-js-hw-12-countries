import countriesTpl from '../templates/countries.hbs';
import singleCountryTpl from '../templates/singleCountry.hbs';
import refs from './refs.js';

import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

function makeCountriesMarkup(countries) {
  // refs.containerRef.innerHTML = '';
  if (countries.length === 1) {
    const markup = singleCountryTpl({ countries });
    refs.containerRef.insertAdjacentHTML('beforeend', markup);
    return;
  } else if (countries.length >= 2 && countries.length <= 10) {
    const markup = countriesTpl({ countries });
    refs.containerRef.insertAdjacentHTML('beforeend', markup);
  } else if (countries.length > 10) {
    const myError = error({
      title: 'Too many matches found',
      text: 'Please enter a more specific query!',
      animation: 'fade',
      delay: 4000,
      addClass: 'my-error',
    });
  } else {
    refs.containerRef.innerHTML = 'Ничего не найдено. Попробуйте еще';
  }
}

export default makeCountriesMarkup;
