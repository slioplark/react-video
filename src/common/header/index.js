import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HeaderWrapper, MenuWrapper } from './style';

function Header() {
  const love = useSelector(state => state.home.love);

  return (
    <HeaderWrapper>
      <MenuWrapper>
        <Link to="/react-video">
          <span className="iconfont">&#xe7a6;</span>
          <span>Youtube</span>
        </Link>
        <Link to="/react-video/love">
          <span className="iconfont">&#xe64d;</span>
          {love}
        </Link>
      </MenuWrapper>
    </HeaderWrapper>
  );
}

export default Header;