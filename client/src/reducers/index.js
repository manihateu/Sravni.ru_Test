import { combineReducers } from 'redux';
import { userReducer } from './usersReducer';
import { photosReducer } from './photosReducer';

const rootReducer = combineReducers({
    user: userReducer,
    photos: photosReducer,
});

export default rootReducer