import React, { useState, useMemo } from 'react';
import DataTable from './DataTable';
import Pagination from '../Pagination/Pagination';

type Row = {
    id: number;
    Name: string;
    Age: number;
    Country: string;
};

const headers: (keyof Row)[] = ['Name', 'Age', 'Country'];

const initialData: Row[] = [
    { id: 1, Name: 'Alice', Age: 25, Country: 'USA' },
    { id: 2, Name: 'Bob', Age: 30, Country: 'UK' },
    { id: 3, Name: 'Charlie', Age: 28, Country: 'Canada' },
    { id: 4, Name: 'David', Age: 32, Country: 'Germany' },
    { id: 5, Name: 'Eva', Age: 27, Country: 'France' },
    { id: 6, Name: 'Frank', Age: 29, Country: 'Italy' },
];

const TableFour: React.FC = () => {
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
                ? { ...row, [key as keyof Row]: key === 'Age' ? Number(value) : value }
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
            <h2>Table Four</h2>
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

export default TableFour;

