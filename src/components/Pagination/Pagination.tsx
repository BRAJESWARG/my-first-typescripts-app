// src/components/Pagination.tsx
import React from 'react';
import './Pagination.css';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    return (
        <div className="pagination">
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                Prev
            </button>

            <span>
                Page {currentPage} of {totalPages}
            </span>

            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
};

export default Pagination;
