import makeCountriesMarkup from './make-countries-markup';

function fetchCountries(name) {
  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => {
      //response handling
      return response.json();
    })
    .then(countries => {
      // data handling
      // console.log(countries);
      makeCountriesMarkup(countries);
    })
    .catch(error => {
      // error handling
    });
}

export default fetchCountries;
