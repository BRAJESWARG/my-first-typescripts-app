import React, { useState, useMemo } from 'react';
import Pagination from '../Pagination/Pagination';
import TableRow from './TableRow';
import '../styles/DataTable.css';

type TableRowType = {
    id: number;
    [key: string]: string | number;
};

type Props = {
    data: TableRowType[];
    headers: string[];
};

const DataTable: React.FC<Props> = ({ data, headers }) => {
    const [tableData, setTableData] = useState<TableRowType[]>(data);
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 3;

    const totalPages = Math.ceil(tableData.length / rowsPerPage);

    const sortedData = useMemo(() => {
        if (!sortConfig) return [...tableData];
        return [...tableData].sort((a, b) => {
            const aVal = a[sortConfig.key];
            const bVal = b[sortConfig.key];
            const sortOrder = sortConfig.direction === 'asc' ? 1 : -1;
            return aVal > bVal ? sortOrder : aVal < bVal ? -sortOrder : 0;
        });
    }, [tableData, sortConfig]);

    const paginatedData = sortedData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const handleSort = (key: string) => {
        const direction = sortConfig?.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
        setSortConfig({ key, direction });
    };

    const handleUpdate = (updatedRow: TableRowType) => {
        const newData = tableData.map((row) =>
            row.id === updatedRow.id ? updatedRow : row
        );
        setTableData(newData);
    };

    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th key={header} onClick={() => handleSort(header)}>
                                {header.toUpperCase()}
                                {sortConfig?.key === header ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : null}
                            </th>
                        ))}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((row) => (
                        <TableRow
                            key={row.id}
                            row={row}
                            headers={headers}
                            onUpdate={handleUpdate}
                        />
                    ))}
                </tbody>
            </table>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default DataTable;
