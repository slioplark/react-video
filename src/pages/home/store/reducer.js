import * as actionTypes from './actionTypes';

const defaultState = {
  list: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_LIST:
      return state;
    default:
      return state;
  }
}

export default reducer;