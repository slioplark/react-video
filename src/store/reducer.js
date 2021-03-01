import { combineReducers } from 'redux';
import { reducer as HomeReducer } from '../pages/home/store';

const reducer = combineReducers({
  home: HomeReducer,
});

export default reducer;