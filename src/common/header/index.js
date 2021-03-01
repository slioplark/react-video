import { Link } from 'react-router-dom';
import { HeaderWrapper, MenuWrapper, MenuItem } from './style';

function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        Home
      </Link>
      <MenuWrapper>
        <Link to="/love">
          <MenuItem>Love</MenuItem>
        </Link>
        <Link to="/play">
          <MenuItem>Play</MenuItem>
        </Link>
      </MenuWrapper>
    </HeaderWrapper>
  );
}

export default Header;