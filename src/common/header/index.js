import { Link } from 'react-router-dom';
import { HeaderWrapper, MenuWrapper, MenuItem } from './style';

function Header() {
  return (
    <HeaderWrapper>
      <Link to="/react-video">
        Home
      </Link>
      <MenuWrapper>
        <Link to="/react-video/love">
          <MenuItem>Love</MenuItem>
        </Link>
        <Link to="/react-video/play">
          <MenuItem>Play</MenuItem>
        </Link>
      </MenuWrapper>
    </HeaderWrapper>
  );
}

export default Header;