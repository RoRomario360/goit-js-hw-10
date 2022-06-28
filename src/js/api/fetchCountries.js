import Notiflix from 'notiflix';
export default function fetchCountries(name) {
  const BASE_URL = 'https://restcountries.com/v2/name/';
  const searchUrl = '?fields=name,capital,population,flags,languages';
  const response = fetch(`${BASE_URL}${name}${searchUrl}`)
    .then(data => {
      if (!data.ok) {
        throw new Error(data.status);
      }
      return data.json();
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
  return response;
}
