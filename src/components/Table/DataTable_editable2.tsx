import React, { useState, useMemo } from 'react';
import '../styles/DataTable.css';

type TableProps = {
    data: { [key: string]: string | number }[];
    rowsPerPage?: number;
};

type SortConfig = {
    key: string;
    direction: 'asc' | 'desc';
} | null;

const DataTable: React.FC<TableProps> = ({ data, rowsPerPage = 5 }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState<SortConfig>(null);

    // const [sortConfig, setSortConfig] = useState<SortConfig>({
    //     key: data.length > 0 ? Object.keys(data[0])[0] : '',
    //     direction: 'asc',
    // });

    const [editingRowIndex, setEditingRowIndex] = useState<number | null>(null);
    const [tableData, setTableData] = useState(data);
    // const [editCell, setEditCell] = useState<{ row: number; column: string } | null>(null);


    const headers = data.length > 0 ? Object.keys(data[0]) : [];

    // Sorting

    // const sortedData = useMemo(() => {
    //     if (!sortConfig) return data;

    //     return [...data].sort((a, b) => {
    //         const aVal = a[sortConfig.key];
    //         const bVal = b[sortConfig.key];

    //         if (aVal === bVal) return 0;

    //         const sortOrder = sortConfig.direction === 'asc' ? 1 : -1;

    //         return aVal > bVal ? sortOrder : -sortOrder;
    //     });
    // }, [data, sortConfig]);

    const sortedData = useMemo(() => {
        if (!sortConfig) return tableData;

        return [...tableData].sort((a, b) => {
            const aVal = a[sortConfig.key];
            const bVal = b[sortConfig.key];
            if (aVal === bVal) return 0;
            const sortOrder = sortConfig.direction === 'asc' ? 1 : -1;
            return aVal > bVal ? sortOrder : -sortOrder;
        });
    }, [tableData, sortConfig]);

    // Pagination
    const totalPages = Math.ceil(sortedData.length / rowsPerPage);
    const paginatedData = sortedData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const handleSort = (key: string) => {
        if (sortConfig?.key === key) {
            setSortConfig({
                key,
                direction: sortConfig.direction === 'asc' ? 'desc' : 'asc',
            });
        } else {
            setSortConfig({ key, direction: 'asc' });
        }
    };

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    if (data.length === 0) return <p>No data available</p>;

    return (
        <div className="table-wrapper">
            <table className="custom-table">
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th key={header} onClick={() => handleSort(header)}>
                                {header.toUpperCase()}{' '}
                                {sortConfig?.key === header ? (
                                    sortConfig.direction === 'asc' ? '▲' : '▼'
                                ) : '▲'}
                            </th>
                        ))}

                    </tr>
                    <tr>
                        {headers.map((header) => (
                            <th key={header}>{header.toUpperCase()}</th>
                        ))}
                        <th>Action</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {paginatedData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {headers.map((header) => (
                                <td
                                    key={header}
                                    onDoubleClick={() => setEditCell({ row: rowIndex, column: header })}
                                >
                                    {editCell?.row === rowIndex && editCell?.column === header ? (
                                        <input
                                            type="text"
                                            value={tableData[rowIndex][header]}
                                            autoFocus
                                            onChange={(e) => {
                                                const updated = [...tableData];
                                                updated[rowIndex][header] = e.target.value;
                                                setTableData(updated);
                                            }}
                                            onBlur={() => setEditCell(null)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') setEditCell(null);
                                            }}
                                        />
                                    ) : (
                                        tableData[rowIndex][header]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody> */}
                <tbody>
                    {paginatedData.map((row, rowIndex) => {
                        // Adjust index to match the data array
                        const actualIndex = (currentPage - 1) * rowsPerPage + rowIndex;

                        return (
                            <tr key={actualIndex}>
                                {headers.map((header) => (
                                    <td key={header}>
                                        {editingRowIndex === actualIndex ? (
                                            <input
                                                type="text"
                                                value={tableData[actualIndex][header]}
                                                onChange={(e) => {
                                                    const updated = [...tableData];
                                                    updated[actualIndex][header] = e.target.value;
                                                    setTableData(updated);
                                                }}

                                            />

                                        ) : (
                                            tableData[actualIndex][header]
                                        )}
                                    </td>
                                ))}
                                <td>
                                    {editingRowIndex === actualIndex ? (
                                        <button
                                            className="save-button"
                                            onClick={() => setEditingRowIndex(null)}
                                        >
                                            Save
                                        </button>
                                    ) : (
                                        <button
                                            className="edit-button"
                                            onClick={() => setEditingRowIndex(actualIndex)}
                                        >
                                            ✏️
                                        </button>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>

            </table>

            <div className="pagination">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    ⬅ Prev
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next ➡
                </button>
            </div>
        </div>
    );
};

export default DataTable;