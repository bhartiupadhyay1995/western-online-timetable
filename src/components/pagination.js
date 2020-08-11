import { Pagination } from 'semantic-ui-react';
import React, { useState } from 'react';
import '../styles/paginate.css';

const PaginationComponent = (props) => {
  const [activePage, setActivePage] = useState(1);

  const onPageChange = (e, pageInfo) => {
    const currentPage = pageInfo.activePage
    setActivePage(pageInfo.activePage);
    props.onChange(currentPage);
    console.log('PAGE CHANGE', currentPage);
  }

  if(props.pageInfo.count > 0){
    return <div className='paginate'>
        <Pagination totalPages={props.pageInfo.pageCount} onPageChange={onPageChange} activePage={activePage} color="blue" ellipsisItem={null}/>
      </div>
  } else {
    return <div></div>
  }
}

export default PaginationComponent;
