import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../../pages/home/store';
import { HeaderWrapper, MenuWrapper, Search } from './style';

function Header() {
  const love = useSelector(state => state.home.love);
  const dispatch = useDispatch();

  const search = (e) => {
    if (e.key === 'Enter') {
      const val = e.target.value;
      dispatch(actionCreators.getSearchList(val));
    }
  }

  return (
    <HeaderWrapper>
      <MenuWrapper>
        <Link to="/react-video">
          <span className="iconfont">&#xe7a6;</span>
          <span>Youtube</span>
        </Link>
        <Search placeholder="search" onKeyDown={(e) => search(e)}></Search>
        <Link to="/react-video/love">
          <span className="iconfont">&#xe64d;</span>
          {love}
        </Link>
      </MenuWrapper>
    </HeaderWrapper>
  );
}

export default Header;