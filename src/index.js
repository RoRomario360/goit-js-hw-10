import fetchCountries from './js/api/fetchCountries';
import {
  createMarkup,
  countryList,
  countryInfo,
} from './js/templates/createmarkup';
import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;

Notiflix.Notify.init({
  width: '300px',
  position: 'right-top',
  closeButton: false,
});
const input = document.querySelector('#search-box');
input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
  const query = e.target.value.trim();
  if (query === '') {
    return;
  }

  fetchCountries(query).then(response => {
    createMarkup(response);
  });
}
