import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { HomeWrapper, HomeItem, Img, Title, Desc, Love, Time } from './style';
import moment from 'moment';

function Home() {
  const [love, setLove] = useState({});

  const list = useSelector(state => state.home.list)
  const dispatch = useDispatch();

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
    setLove(love);
    dispatch(actionCreators.getList());
  }, [dispatch])

  return (
    <HomeWrapper>
      {
        list.map(item => {
          return (
            <HomeItem key={item?.id}>
              <Link to={'/react-video/play/' + item?.id}>
                <Img url={item?.snippet?.thumbnails?.medium?.url}>
                  <Love onClick={(e) => loveVideo(e, item)}>
                    {love[item?.id] ? '已收藏' : '收藏'}
                  </Love>
                  <Time>{getTime(item?.contentDetails?.duration)}</Time>
                </Img>
                <Title>{item?.snippet?.channelTitle}</Title>
                <Desc>{item?.snippet?.description}</Desc>
              </Link>
            </HomeItem>
          );
        })
      }
    </HomeWrapper>
  );
}

export default Home;