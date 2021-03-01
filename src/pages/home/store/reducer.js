import * as actionTypes from './actionTypes';

const defaultState = {
  list: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_LIST:
      return Object.assign(state, { list: action.payload });
    default:
      return state;
  }
}

export default reducer;