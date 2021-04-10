import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../../pages/home/store';
import { Input } from "@chakra-ui/react"
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
          <span className="iconfont">&#xe7a6;</span>
          <span>Youtube</span>
        </Link>
        <Input placeholder="search" onKeyDown={(e) => search(e)} />
        <Link to="/react-video/love">
          <span className="iconfont">&#xe64d;</span>
          {love}
        </Link>
      </MenuWrapper>
    </HeaderWrapper>
  );
}

export default Header;