import * as actionTypes from './actionTypes';

const defaultState = {
  data: {}
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA:
      return Object.assign(state, { data: action.payload });
    default:
      return state;
  }
}

export default reducer;