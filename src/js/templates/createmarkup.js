import Notiflix from 'notiflix';
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

export default function createMarkup(arr) {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
  // console.log(arr);
  if (arr.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  } else if (arr.length >= 2) {
    createList(arr);
  } else {
    createCard(arr);
  }
}

function createList(arr) {
  const listOfCountry = arr
    .map(elem => {
      //   console.log(elem);
      return ` 
       <li>
    <img src="${elem.flags.svg}" alt="${elem.name}" width="100">
    <h2>${elem.name}</h2>
  </li>
  `;
    })
    .join('');

  countryList.innerHTML = listOfCountry;
}

function createCard(arr) {
  const markup = `<h2 class="title">
            <img  src="${arr[0].flags.svg}" alt="${arr[0].name}" width="60">${
    arr[0].name
  }
          </h2>
          <p> <span >Capital: </span>${arr[0].capital}</p>
          <p> <span>Population: </span>${arr[0].population}</p>
            <p> <span>Languages: </span>${arr[0].languages
              .map(item => item.name)
              .join(' ,')}</p>`;
  countryInfo.innerHTML = markup;
}
