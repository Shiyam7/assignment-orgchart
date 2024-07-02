import { useState } from 'react'
import { Employee } from '../../utils'
import './index.css'

import ReactPaginate from 'react-paginate'
import Items from './items'



function PaginatedItems({
    itemsPerPage,
    items,
}: {
    itemsPerPage: number
    items: Employee[]
}) {
    const [itemOffset, setItemOffset] = useState(0)
    const endOffset = itemOffset + itemsPerPage
    const currentItems = items.slice(itemOffset, endOffset)
    const pageCount = Math.ceil(items.length / itemsPerPage)

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % items.length
        setItemOffset(newOffset)
    }

    return (
        <div className="list-items">
            <Items currentItems={currentItems} />
            <div className="paginate">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={1}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    )
}

export default PaginatedItems
