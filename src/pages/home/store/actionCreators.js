import axios from 'axios';
import * as actionTypes from './actionTypes';

const key = 'AIzaSyAot6Axw_WWo69WCvnrnCSJo-DYbHZD2Ds';
const type = 'video';
const chart = 'mostPopular';
const maxResults = 50;

const changeList = (data) => ({
  type: actionTypes.GET_LIST,
  payload: data.items
});

const changeType = (type) => ({
  type: actionTypes.UPDATE_TYPE,
  payload: type
});

const changeNextPageToken = (token) => ({
  type: actionTypes.UPDATE_NEXT_PAGE_TOKEN,
  payload: token
});

export const getSearchList = (q, pageToken = '') => {
  const api = 'https://www.googleapis.com/youtube/v3/search';
  const part = 'snippet';
  return (dispatch) => {
    axios.get(`${api}?part=${part}&type=${type}&maxResults=${maxResults}&key=${key}&q=${q}&pageToken=${pageToken}`)
      .then(res => {
        dispatch(changeType('search'));
        dispatch(changeNextPageToken(res.data.nextPageToken));
        dispatch(updateSearchText(q));
        if (pageToken) {
          dispatch(updateList(res.data));
        } else {
          dispatch(updatePage(0));
          dispatch(changeList(res.data));
        }
      })
      .catch(err => alert('由於多次得調用 youtube api，所以目前暫時無法回傳資料，請耐心等待一段時間後，再重新進入頁面。'));
  }
}

export const getVideosList = (pageToken = '') => {
  const api = 'https://www.googleapis.com/youtube/v3/videos';
  const part = 'snippet,contentDetails';
  return (dispatch) => {
    axios.get(`${api}?part=${part}&chart=${chart}&maxResults=${maxResults}&key=${key}&pageToken=${pageToken}`)
      .then(res => {
        dispatch(changeType('videos'));
        dispatch(changeNextPageToken(res.data.nextPageToken));
        if (pageToken) {
          dispatch(updateList(res.data));
        } else {
          dispatch(updatePage(0));
          dispatch(changeList(res.data));
        }
      })
      .catch(err => alert('由於多次得調用 youtube api，所以目前暫時無法回傳資料，請耐心等待一段時間後，再重新進入頁面。'));
  }
}

export const updateList = (data) => ({
  type: actionTypes.UPDATE_LIST,
  payload: data.items
})

export const updateLove = (value) => ({
  type: actionTypes.UPDATE_LOVE,
  payload: value
});

export const updatePage = (index) => ({
  type: actionTypes.UPDATE_PAGE,
  payload: index
});

export const updateSearchText = (text) => ({
  type: actionTypes.UPDATE_SEARCH_TEXT,
  payload: text
});