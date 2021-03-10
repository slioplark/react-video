import axios from 'axios';
import * as actionTypes from './actionTypes';

const key = 'AIzaSyAHfMbZqL9NiqUmQTNT_3V2lhDdkGC7AsI';
const type = 'video';
const chart = 'mostPopular';
const maxResults = 50;

const changeList = (data) => ({
  type: actionTypes.GET_LIST,
  payload: data.items
});

export const getSearchList = (q, pageToken = '') => {
  const api = 'https://www.googleapis.com/youtube/v3/search';
  const part = 'snippet';
  return (dispatch) => {
    axios.get(`${api}?part=${part}&type=${type}&maxResults=${maxResults}&key=${key}&q=${q}&pageToken=${pageToken}`)
      .then(res => dispatch(changeList(res.data)))
      .catch(err => alert('由於多次得調用 youtube api，所以目前暫時無法回傳資料，請耐心等待一段時間後，再重新進入頁面。'));
  }
}

export const getVideosList = (pageToken = '') => {
  const api = 'https://www.googleapis.com/youtube/v3/videos';
  const part = 'snippet,contentDetails';
  return (dispatch) => {
    axios.get(`${api}?part=${part}&chart=${chart}&maxResults=${maxResults}&key=${key}&pageToken=${pageToken}`)
      .then(res => dispatch(changeList(res.data)))
      .catch(err => alert('由於多次得調用 youtube api，所以目前暫時無法回傳資料，請耐心等待一段時間後，再重新進入頁面。'));
  }
}

export const updateLove = (value) => ({
  type: actionTypes.UPDATE_LOVE,
  payload: value
});

export const updatePage = (index) => ({
  type: actionTypes.UPDATE_PAGE,
  payload: index
});