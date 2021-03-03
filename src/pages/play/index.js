import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from './store';
import { PlayWrapper, Ad, Title, Desc, Divider } from './style';
import videojs from 'video.js';

function Play(props) {
  const [isAd, setIsAd] = useState(false);
  const data = useSelector(state => state.play.data);
  const dispatch = useDispatch();
  const playerRef = useRef();

  const playAd = () => {
    setIsAd(true);
  }

  const stopAd = () => {
    setIsAd(false);
  }

  const skipAd = () => {
    setIsAd(false);
    playerRef.current.play();
  }

  useEffect(() => {
    const id = props.match.params.id;
    dispatch(actionCreators.getData(id));

    return () => {
      dispatch(actionCreators.clearData());
    }
  }, [props, dispatch]);

  useEffect(() => {
    const player = videojs(
      playerRef.current,
      {
        muted: true,
        autoplay: true
      },
      () => {
        player.src(
          'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'
        );
      }
    );
  }, []);

  return (
    <PlayWrapper>
      <video
        controls
        className="video-js"
        ref={playerRef}
        onPlay={stopAd}
        onPause={playAd}
      >
      </video>
      {
        isAd
          ? (
            <Ad>
              <span>AD Time</span>
              <button onClick={skipAd}>Skip</button>
            </Ad>
          )
          : ''
      }
      <Title>{data?.snippet?.channelTitle}</Title>
      <Divider />
      <Desc dangerouslySetInnerHTML={{ __html: data?.snippet?.description }} />
    </PlayWrapper>
  );
}

export default Play;