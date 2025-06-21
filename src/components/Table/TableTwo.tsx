import React, { useState, useMemo } from 'react';
import DataTable from './DataTable';
import Pagination from '../Pagination/Pagination';

type Row = {
    id: number;
    Product: string;
    Price: string;
    Stock: number;
};

const headers: (keyof Row)[] = ['Product', 'Price', 'Stock'];

const initialData: Row[] = [
    { id: 1, Product: 'Laptop', Price: '$1000', Stock: 20 },
    { id: 2, Product: 'Phone', Price: '$500', Stock: 50 },
    { id: 3, Product: 'AC', Price: '$1000', Stock: 20 },
    { id: 4, Product: 'Cooler', Price: '$500', Stock: 50 },
    { id: 5, Product: 'Car', Price: '$1000', Stock: 20 },
    { id: 6, Product: 'Bike', Price: '$500', Stock: 50 },
    { id: 7, Product: 'Bag', Price: '$1000', Stock: 20 },
    { id: 8, Product: 'Pen', Price: '$500', Stock: 50 },
    { id: 9, Product: 'Fridge', Price: '$1000', Stock: 20 },
    { id: 10, Product: 'Watch', Price: '$500', Stock: 50 },
    { id: 11, Product: 'Ear phones', Price: '$1000', Stock: 20 },
    { id: 12, Product: 'Charging Cable', Price: '$500', Stock: 50 },
];

const TableTwo: React.FC = () => {
    const [data, setData] = useState<Row[]>(initialData);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 3;

    const sortedData = useMemo(() => {
        if (!sortConfig) return [...data];
        return [...data].sort((a, b) => {
            const aVal = a[sortConfig.key as keyof Row];
            const bVal = b[sortConfig.key as keyof Row];
            const sortOrder = sortConfig.direction === 'asc' ? 1 : -1;
            return aVal > bVal ? sortOrder : aVal < bVal ? -sortOrder : 0;
        });
    }, [data, sortConfig]);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * rowsPerPage;
        return sortedData.slice(start, start + rowsPerPage);
    }, [sortedData, currentPage]);

    const totalPages = Math.ceil(data.length / rowsPerPage);

    const handleEditClick = (id: number) => setEditingId(id);
    const handleSaveClick = () => setEditingId(null);

    const handleChange = (id: number, key: string, value: string) => {
        const updated = data.map((row) =>
            row.id === id
                ? { ...row, [key as keyof Row]: key === 'Price' ? Number(value) : value }
                : row
        );
        setData(updated);
    };

    const handleSort = (key: string) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig?.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    return (
        <div>
            <h2>Table Two</h2>
            <DataTable
                data={paginatedData}
                headers={headers as string[]}
                editingId={editingId}
                onEditClick={handleEditClick}
                onSaveClick={handleSaveClick}
                onChange={handleChange}
                onSort={handleSort}
                sortConfig={sortConfig}
            />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default TableTwo;

