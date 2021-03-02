import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoveWrapper, LoveItem, Img, Time, Title, Desc } from './style';
import moment from 'moment';

function Love() {
  const [list, setList] = useState([]);

  const getTime = (time) => {
    const hours = moment.duration(time).hours();
    const minutes = moment.duration(time).minutes();
    const seconds = moment.duration(time).seconds();
    return `${hours ? hours + ':' : ''}${minutes ? minutes + ':' : ''}${seconds}`;
  }

  useEffect(() => {
    const val = localStorage.getItem('love');
    const love = JSON.parse(val) || {};
    const list = Object.values(love);
    setList(list);
  }, [])

  return (
    <LoveWrapper>
      {
        list.map(item => {
          return (
            <LoveItem key={item?.id}>
              <Link to={'/react-video/play/' + item?.id}>
                <Img url={item?.snippet?.thumbnails?.medium?.url}>
                  <Time>{getTime(item?.contentDetails?.duration)}</Time>
                </Img>
                <Title>{item?.snippet?.channelTitle}</Title>
                <Desc>{item?.snippet?.description}</Desc>
              </Link>
            </LoveItem>
          )
        })
      }
    </LoveWrapper>
  );
}

export default Love;