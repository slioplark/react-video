import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from './store';
import { PlayWrapper, Title, Desc, Divider } from './style';

function Play(props) {
  const data = useSelector(state => state.play.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const id = props.match.params.id;
    dispatch(actionCreators.getData(id));
    return () => {
      dispatch(actionCreators.clearData());
    }
  }, [props, dispatch]);

  return (
    <PlayWrapper>
      <img src={data?.snippet?.thumbnails?.high?.url} alt="thumbnails" />
      <Title>{data?.snippet?.channelTitle}</Title>
      <Divider />
      <Desc dangerouslySetInnerHTML={{ __html: data?.snippet?.description }} />
    </PlayWrapper>
  );
}

export default Play;