import React from 'react';
import '../styles/DataTable.css';
import SortHeader from '../SortHeader/SortHeader';

type Row = {
    id: number;
    [key: string]: string | number;
};

type SortConfig = {
    key: string;
    direction: 'asc' | 'desc';
} | null;


type Props = {
    data: Row[];
    headers: string[];
    editingId: number | null;
    onEditClick: (id: number) => void;
    onChange: (id: number, key: string, value: string) => void;
    onSaveClick: (id: number) => void;
    onSort: (key: string) => void;
    sortConfig: { key: string; direction: 'asc' | 'desc' } | null;
};

const DataTable: React.FC<Props> = ({
    data,
    headers,
    editingId,
    onEditClick,
    onChange,
    onSaveClick,
    onSort,
    sortConfig,
}) => {
    return (
        <table>
            <thead>
                <tr>
                    {headers.map((header) => (
                        <SortHeader
                            key={header}
                            header={header}
                            sortConfig={sortConfig}
                            onSort={onSort}        // ✅ This must exist and be defined!
                        />
                    ))}
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => {
                    const isEditing = row.id === editingId;
                    return (
                        <tr key={row.id}>
                            {headers.map((header) => (
                                <td key={header}>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={row[header as keyof typeof row]}
                                            onChange={(e) =>
                                                onChange(row.id, header, e.target.value)
                                            }
                                        />
                                    ) : (
                                        row[header as keyof typeof row]
                                    )}
                                </td>
                            ))}
                            <td>
                                {isEditing ? (
                                    <button onClick={() => onSaveClick(row.id)}>💾 Save</button>
                                ) : (
                                    <button onClick={() => onEditClick(row.id)}>✏️ Edit</button>
                                )}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default DataTable;