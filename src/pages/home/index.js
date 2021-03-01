import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { HomeWrapper, HomeItem, Img, Title, Desc, Time } from './style';
import moment from 'moment';

function Home() {
  const list = useSelector(state => state.home.list)
  const dispatch = useDispatch();

  const getTime = (time) => {
    const hours = moment.duration(time).hours();
    const minutes = moment.duration(time).minutes();
    const seconds = moment.duration(time).seconds();
    return `${hours ? hours + ':' : ''}${minutes ? minutes + ':' : ''}${seconds}`;
  }

  useEffect(() => {
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