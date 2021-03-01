import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from './store';
import { PlayWrapper, Title, Desc, Divider } from './style';
import videojs from 'video.js';

function Play(props) {
  const data = useSelector(state => state.play.data);
  const dispatch = useDispatch();
  const playerRef = useRef();

  const setPlayer = () => {
    const player = videojs(
      playerRef.current,
      { autoplay: true, muted: true },
      () => {
        player.src(
          'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'
        );
      }
    );
  }

  useEffect(() => {
    const id = props.match.params.id;
    dispatch(actionCreators.getData(id));
    setPlayer();

    return () => {
      dispatch(actionCreators.clearData());
    }
  }, [props, dispatch]);

  return (
    <PlayWrapper>
      <video className="video-js" controls ref={playerRef}></video>
      <Title>{data?.snippet?.channelTitle}</Title>
      <Divider />
      <Desc dangerouslySetInnerHTML={{ __html: data?.snippet?.description }} />
    </PlayWrapper>
  );
}

export default Play;