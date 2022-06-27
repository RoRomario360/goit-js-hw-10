import createMarkup from './js/templates/createmarkup';
import fetchCountries from './js/api/fetchCountries';
import './css/styles.css';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
Notiflix.Notify.init({
  width: '300px',
  position: 'center-top',
  closeButton: false,
});
input.addEventListener('input', onInput);

function onInput(e) {
  const query = e.target.value;
  if (query === '') {
    return;
  }
  // console.log(e.target.value);
  fetchCountries(query).then(response => {
    console.log(response);
    // console.log(createMarkup);
    createMarkup(response);
  });
}
