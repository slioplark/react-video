import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoveWrapper, LoveItem, Img, LoveText, Time, Title, Desc } from './style';
import moment from 'moment';

function Love() {
  const [love, setLove] = useState({})
  const [list, setList] = useState([]);

  const getTime = (time) => {
    const hours = moment.duration(time).hours();
    const minutes = moment.duration(time).minutes();
    const seconds = moment.duration(time).seconds();
    return `${hours ? hours + ':' : ''}${minutes ? minutes + ':' : ''}${seconds}`;
  }

  const loveVideo = (e, video) => {
    e.preventDefault();
    e.stopPropagation();

    const val = localStorage.getItem('love');
    const love = JSON.parse(val) || {};

    if (love[video.id]) delete love[video.id]
    else love[video.id] = video

    setLove(love);
    localStorage.setItem('love', JSON.stringify(love));
  }

  useEffect(() => {
    const val = localStorage.getItem('love');
    const love = JSON.parse(val) || {};
    const list = Object.values(love);
    setLove(love);
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
                  <LoveText onClick={(e) => loveVideo(e, item)}>
                    {love[item?.id] ? '已收藏' : '收藏'}
                  </LoveText>
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