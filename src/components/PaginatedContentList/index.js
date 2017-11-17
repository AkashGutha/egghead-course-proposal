import React from 'react'
import PropTypes from 'prop-types'
import Pagination from 'components/Pagination';
import ContentList from 'components/ContentList';


const PaginatedContentList = ({
  total,
  pageSize,
  content_list,
  currentPage,
  requestNextPage,
}) => {
  const maxPage = Math.floor((total - 1) / pageSize) + 1;
  return (
    <div className="w-100 ph3-ns">
      <div className='mb4 br2-ns overflow-hidden-ns'>
        <ContentList
          content_list={content_list}
          paginate={true}
        />
      </div>
      {maxPage > 1 ?
        <Pagination
          paginatorWidth={5}
          selectedPage={currentPage}
          maxPage={maxPage}
          onPageSelected={(page) => {
            if (currentPage !== page) {
              requestNextPage(page)
            }
          }}
        /> :
        null
      }
    </div>
  );
}

PaginatedContentList.propTypes = {
  total: PropTypes.number,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  requestNextPage: PropTypes.func,
  content_list: PropTypes.array,
};

export default PaginatedContentList;
