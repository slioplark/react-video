import axios from 'axios';
import * as actionTypes from './actionTypes';

const api = 'https://www.googleapis.com/youtube/v3/videos';
const key = 'AIzaSyAHfMbZqL9NiqUmQTNT_3V2lhDdkGC7AsI';
const part = 'snippet,contentDetails';

const changeData = (data) => ({
  type: actionTypes.GET_DATA,
  payload: data.items[0]
});

export const getData = (id) => {
  return (dispatch) => {
    axios.get(`${api}?part=${part}&key=${key}&id=${id}`)
      .then(res => dispatch(changeData(res.data)))
      .catch(err => console.log(err));
  }
}

export const clearData = () => ({
  type: actionTypes.CLEAR_DATA,
  payload: {}
});