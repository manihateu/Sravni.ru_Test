const initialUserState = {
    data: null,
    loading: false,
  };
  
export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
      case 'FETCH_USER_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_USER_SUCCESS':
        return {
          ...state,
          data: action.payload,
          loading: false,
        };
      case 'FETCH_USER_FAILURE':
        return {
          ...state,
          loading: false,
        };
      default:
        return state;
    }
  };