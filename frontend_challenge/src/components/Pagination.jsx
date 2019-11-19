import React from 'react';
import Pagination from 'react-bootstrap/Pagination'


const Paginate = ({ active, totalCharacters, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCharacters / 10); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <Pagination >
                {pageNumbers.map(number => (
                    <Pagination.Item key={number} active={number === active} onClick={() => paginate(number)}>
                        {number}
                    </Pagination.Item>
                ))}

            </Pagination>
        </div>
    )

}

export default Paginate;