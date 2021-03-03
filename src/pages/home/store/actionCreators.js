import axios from 'axios';
import * as actionTypes from './actionTypes';

const api = 'https://www.googleapis.com/youtube/v3/videos';
const key = 'AIzaSyAHfMbZqL9NiqUmQTNT_3V2lhDdkGC7AsI';
const part = 'snippet,contentDetails';
const chart = 'mostPopular';

const chageList = (data) => ({
  type: actionTypes.GET_LIST,
  payload: data.items
});

export const getList = (pageToken = '') => {
  return (dispatch) => {
    axios.get(`${api}?part=${part}&chart=${chart}&maxResults=100&key=${key}&pageToken=${pageToken}`)
      .then(res => dispatch(chageList(res.data)))
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