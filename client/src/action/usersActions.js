import axios from 'axios';

export const fetchUserRequest = () => {
  return {
    type: 'FETCH_USER_REQUEST',
  };
};

export const fetchUserSuccess = (user) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: user,
  };
};

export const fetchUserFailure = () => {
  return {
    type: 'FETCH_USER_FAILURE',
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const user = response.data;
        dispatch(fetchUserSuccess(user));
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
        dispatch(fetchUserFailure());
      });
  };
};
