import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';

const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');

form.addEventListener('submit', e => {
  e.preventDefault();

  const query = input.value.trim();

  showLoader();

  getImagesByQuery(query)
    .then(data => {
      clearGallery();
      if (data.hits.length === 0) {
        setTimeout(() => {
          iziToast.error({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            backgroundColor: '#EF4040',
            messageColor: '#fff',
          });
        }, 250);
        return;
      }

      createGallery(data.hits);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      hideLoader();
    });
});
