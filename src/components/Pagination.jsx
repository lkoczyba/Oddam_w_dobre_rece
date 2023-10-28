import React, {useEffect} from 'react';

const Pagination = ({data, postsPerPage, currentPage, setPage}) => {

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex-postsPerPage;
    const currentPosts = data.slice(firstPostIndex, lastPostIndex);

    const pages=[];

    for (let i = 1; i <= Math.ceil(data.length/postsPerPage) ; i++) {
        pages.push(i)
    }

    return (
        <>

        <ul className='pagination'>
            {
                currentPosts.map(item => <li className='pagination__list-el' key={item.id}>
                    <div className='pagination__container'>
                        <p className='pagination__name'>{item.name}</p>
                        <p className='pagination__description'>{item.description}</p>
                    </div>
                    <p className='pagination__need'>{item.need.join(", ")}</p>
                </li>)
            }
        </ul>
            <div>
                {
                    pages.map((page, index) => <button className={page===currentPage ? "pagination__button pagination__button--active" : "pagination__button"} onClick={()=>setPage(page)} key={index}>{page}</button>)
                }
            </div>

        </>
    );
};

export default Pagination;