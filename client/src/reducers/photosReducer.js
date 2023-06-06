const initialState = {
    photos: [],
    isLoading: false,
  };
  
export const photosReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PHOTOS_REQUEST':
        return {
          ...state,
          isLoading: true,
        };
      case 'FETCH_PHOTOS_SUCCESS':
        return {
          ...state,
          photos: action.payload,
          isLoading: false,
        };
      case 'FETCH_PHOTOS_FAILURE':
        return {
          ...state,
          isLoading: false,
        };
      default:
        return state;
    }
  };