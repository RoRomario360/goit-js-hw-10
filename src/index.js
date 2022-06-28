import createMarkup from './js/templates/createmarkup';
import fetchCountries from './js/api/fetchCountries';
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
  const query = e.target.value;
  if (query === '') {
    return;
  }
  // console.log(e.target.value);
  fetchCountries(query).then(response => {
    // console.log(response);
    // console.log(createMarkup);
    createMarkup(response);
  });
}
