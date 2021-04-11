import * as actionTypes from './actionTypes';

const defaultState = {
  love: 0,
  page: 0,
  type: null,
  list: [],
  searchText: null,
  searchInfo: {},
  nextPageToken: null
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_LIST:
      return Object.assign(state, { list: action.payload });
    case actionTypes.UPDATE_LIST:
      return Object.assign(state, { list: [...state.list, ...action.payload] });
    case actionTypes.UPDATE_TYPE:
      return Object.assign(state, { type: action.payload });
    case actionTypes.UPDATE_LOVE:
      return Object.assign(state, { love: action.payload });
    case actionTypes.UPDATE_PAGE:
      return Object.assign(state, { page: action.payload });
    case actionTypes.UPDATE_SEARCH_TEXT:
      return Object.assign(state, { searchText: action.payload });
    case actionTypes.UPDATE_NEXT_PAGE_TOKEN:
      return Object.assign(state, { nextPageToken: action.payload });
    default:
      return state;
  }
}

export default reducer;