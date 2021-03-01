import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { HomeWrapper, HomeItem, Img, Title } from './style';

function Home() {
  const list = useSelector(state => state.home.list)
  const dispatch = useDispatch();

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
                <Img url={item?.snippet?.thumbnails?.medium?.url} />
                <Title>{item?.snippet?.channelTitle}</Title>
              </Link>
            </HomeItem>
          );
        })
      }
    </HomeWrapper>
  );
}

export default Home;