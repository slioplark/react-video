import { Link } from 'react-router-dom';
import { HeaderWrapper, MenuWrapper } from './style';

function Header() {
  return (
    <HeaderWrapper>
      <MenuWrapper>
        <Link to="/react-video">
          <span className="iconfont">&#xe7a6;</span>
        </Link>
        <Link to="/react-video/love">
          <span className="iconfont">&#xe64d;</span>
        </Link>
      </MenuWrapper>
    </HeaderWrapper>
  );
}

export default Header;