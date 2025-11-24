import axios from 'axios';

export function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '53385798-f9f5c437f9a7cc006b35ba392',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    })
    .then(res => res.data)
    .catch(err => {
      console.log(err);
    });
}
