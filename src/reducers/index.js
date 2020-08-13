import { combineReducers } from 'redux';
import { titleReducer } from './titleReducers'
import { imageReducer } from './imageReducers'
import { termReducer } from './termReducers'

export default combineReducers({
    title: titleReducer,
    images: imageReducer,
    term: termReducer
});