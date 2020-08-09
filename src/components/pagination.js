import React from 'react'
import { Pagination } from 'semantic-ui-react'

const PaginationComponent = (props) => {
  if(props.pageInfo.count > 0){
    return <Pagination totalPages={props.pageInfo.pageCount}/>
  } else {
    return <div></div>
  }
}

export default PaginationComponent;
