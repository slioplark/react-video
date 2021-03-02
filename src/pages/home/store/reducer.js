import * as actionTypes from './actionTypes';

const defaultState = {
  page: 0,
  list: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_LIST:
      return Object.assign(state, { list: action.payload });
    case actionTypes.UPDATE_PAGE:
      return Object.assign(state, { page: action.payload })
    default:
      return state;
  }
}

export default reducer;