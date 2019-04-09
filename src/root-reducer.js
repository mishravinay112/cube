import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import HomeReducer from './reducers/homeReducer';

// import all reducers here

export default combineReducers({
  HomeReducer
});
