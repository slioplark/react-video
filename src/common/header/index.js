import { Link } from 'react-router-dom';
import { HeaderWrapper, MenuWrapper } from './style';

function Header() {
  return (
    <HeaderWrapper>
      <MenuWrapper>
        <Link to="/react-video">Home</Link>
        <Link to="/react-video/love">Love</Link>
      </MenuWrapper>
    </HeaderWrapper>
  );
}

export default Header;