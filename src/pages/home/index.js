import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from './store';
import { HomeWrapper, HomeItem, Img, Title, Desc, LoveText, Time } from './style';
import Pagination from './components/pagination';
import moment from 'moment';

function Home() {
  const [love, setLove] = useState({});

  const type = useSelector(state => state.home.type);
  const page = useSelector(state => state.home.page);
  const list = useSelector(state => state.home.list);
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
    dispatch(actionCreators.updateLove(Object.keys(love).length));
    localStorage.setItem('love', JSON.stringify(love));
  }

  useEffect(() => {
    const val = localStorage.getItem('love');
    const love = JSON.parse(val) || {};
    setLove(love);
    dispatch(actionCreators.updateLove(Object.keys(love).length));
  }, [dispatch]);

  useEffect(() => {
    dispatch(actionCreators.getVideosList());
  }, [dispatch]);

  return (
    <HomeWrapper>
      {
        list.map((item, index) => {
          if (index >= page * 24 && index < (page + 1) * 24) {
            const id = type === 'videos' ? item?.id : item?.id?.videoId;
            return (
              <HomeItem key={index}>
                <a href={'https://www.youtube.com/watch?v=' + id} target="_blank" rel="noreferrer">
                  <Img url={item?.snippet?.thumbnails?.medium?.url}>
                    <LoveText onClick={(e) => loveVideo(e, item)}>
                      {love[id] ? '已收藏' : '收藏'}
                    </LoveText>
                    <Time>{getTime(item?.contentDetails?.duration)}</Time>
                  </Img>
                  <Title>{item?.snippet?.channelTitle}</Title>
                  <Desc>{item?.snippet?.description}</Desc>
                </a>
              </HomeItem>
            );
          } else {
            return '';
          }
        })
      }
      <Pagination pageSize={24} totalNumber={list.length} />
    </HomeWrapper >
  );
}

export default Home;