import React from 'react';

const PagePagination = ({totalPosts, postPerPage, setCurrentPage}) => {

  let pages = [];

  for(let i = 1; i < Math.ceil(totalPosts / postPerPage); i++){
    pages.push(i)
  }

  return (
    <div className='pag'>
        {
          pages.map((page, i) => (
            <button onClick={() => setCurrentPage(page)} key={i}>
              {page}
            </button>
          ))
        }
    </div>
  )
}

export default PagePagination
