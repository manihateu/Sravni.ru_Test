import axios from 'axios';

export const fetchPhotosRequest = () => {
  return {
    type: 'FETCH_PHOTOS_REQUEST',
  };
};

export const fetchPhotosSuccess = (photos) => {
  return {
    type: 'FETCH_PHOTOS_SUCCESS',
    payload: photos,
  };
};

export const fetchPhotosFailure = () => {
  return {
    type: 'FETCH_PHOTOS_FAILURE',
  };
};

export const fetchPhotos = () => {
  return (dispatch) => {
    dispatch(fetchPhotosRequest());

    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        const photos = response.data;
        dispatch(fetchPhotosSuccess(photos));
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
        dispatch(fetchPhotosFailure());
      });
  };
};
