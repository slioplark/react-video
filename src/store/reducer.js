import { combineReducers } from 'redux';
import { reducer as HomeReducer } from '../pages/home/store';
import { reducer as PlayReducer } from '../pages/play/store';

const reducer = combineReducers({
  home: HomeReducer,
  play: PlayReducer
});

export default reducer;