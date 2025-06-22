import React, { useState, useMemo } from 'react';
import '../styles/DataTable.css';
import Pagination from '../Pagination/Pagination';

type TableRow = {
    id: number;
    [key: string]: string | number;
};

type Props = {
    data: TableRow[];
    headers: string[];
};

const DataTable: React.FC<Props> = ({ data, headers }) => {
    const [tableData, setTableData] = useState<TableRow[]>(data);
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 3;
    const [editingRowId, setEditingRowId] = useState<number | null>(null);

    const sortedData = useMemo(() => {
        if (!sortConfig) return [...tableData];
        return [...tableData].sort((a, b) => {
            const aVal = a[sortConfig.key];
            const bVal = b[sortConfig.key];
            const sortOrder = sortConfig.direction === 'asc' ? 1 : -1;
            return aVal > bVal ? sortOrder : aVal < bVal ? -sortOrder : 0;
        });
    }, [tableData, sortConfig]);

    const totalPages = Math.ceil(tableData.length / rowsPerPage);

    const paginatedData = sortedData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const handleSort = (key: string) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig?.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const handleInputChange = (rowId: number, key: string, value: string) => {
        const updated = tableData.map((row) =>
            row.id === rowId ? { ...row, [key]: value } : row
        );
        setTableData(updated);
    };

    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th key={header} onClick={() => handleSort(header)}>
                                {header.toUpperCase()}
                                {sortConfig?.key === header ? (
                                    sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽'
                                ) : ' 🔼'}
                            </th>
                        ))}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((row) => {
                        const isEditing = editingRowId === row.id;
                        return (
                            <tr key={row.id}>
                                {headers.map((header) => (
                                    <td key={header}>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={row[header]}
                                                onChange={(e) =>
                                                    handleInputChange(row.id, header, e.target.value)
                                                }
                                            />
                                        ) : (
                                            row[header]
                                        )}
                                    </td>
                                ))}
                                <td>
                                    {isEditing ? (
                                        <button className="save-button" onClick={() => setEditingRowId(null)}>💾 Save</button>
                                    ) : (
                                        <button className="edit-button" onClick={() => setEditingRowId(row.id)}>✏️ Edit</button>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </div>
    );
};

export default DataTable;
