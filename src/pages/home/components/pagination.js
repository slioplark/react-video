import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../store';
import { PageWrapper, PageItem } from '../style';

function Pagination({ pageSize = 0, totalNumber = 0, search = '' }) {
  const [list, setList] = useState([]);

  const page = useSelector(state => state.home.page)
  const searchText = useSelector(state => state.home.searchText);
  const nextPageToken = useSelector(state => state.home.nextPageToken);

  const dispatch = useDispatch();

  const clickPage = (index) => {
    dispatch(actionCreators.updatePage(index));
    if (index === list.length && nextPageToken) {
      dispatch(actionCreators.getSearchList(searchText, nextPageToken));
    }
  }

  useEffect(() => {
    const length = Math.ceil(totalNumber / pageSize);
    const list = [];
    for (let i = 1; i <= length; i++) {
      list.push(i);
    }
    setList(list);
    return () => {
      dispatch(actionCreators.updatePage(0));
    }
  }, [pageSize, totalNumber, dispatch]);

  return (
    <PageWrapper>
      {
        list.map((item, index) => {
          return (
            <PageItem
              className={page === index ? 'active' : ''}
              onClick={() => clickPage(index)} key={index}>
              {item}
            </PageItem>
          )
        })
      }
    </PageWrapper>
  );
}

export default Pagination;