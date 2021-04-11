import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../../pages/home/store';
import { Input, Icon } from "@chakra-ui/react"
import { MdHome, MdPlaylistPlay, MdPeople } from 'react-icons/md';
import { HeaderWrapper, MenuWrapper } from './style';

function Header() {
  const love = useSelector(state => state.home.love);
  const dispatch = useDispatch();

  const search = (e) => {
    if (e.key === 'Enter') {
      const val = e.target.value;
      dispatch(actionCreators.getSearchList(val));
      dispatch(actionCreators.updateSearchText(val));
    }
  }

  return (
    <HeaderWrapper>
      <MenuWrapper>
        <Link to="/react-video">
          <Icon as={MdHome} />
          <span>Youtube</span>
        </Link>
        <Input variant="flushed" placeholder="search" onKeyDown={(e) => search(e)} />
        <section>
          <Link to="/react-video/love">
            <Icon as={MdPlaylistPlay} />
            <span>{love}</span>
          </Link>
          <Link to="/react-video/login">
            <Icon as={MdPeople} />
          </Link>
        </section>
      </MenuWrapper>
    </HeaderWrapper>
  );
}

export default Header;