// TableOne.tsx
import React, { useState } from 'react';
import DataTable from './DataTable';

const headers = ['ID', 'Name', 'Dept'];

const initialData = [
    { id: 1, ID: 'E001', Name: 'John', Dept: 'Engineering' },
    { id: 2, ID: 'E002', Name: 'Sara', Dept: 'Marketing' },
];

const TableThree: React.FC = () => {
    const [data, setData] = useState(initialData);
    const [editingId, setEditingId] = useState<number | null>(null);

    const handleEditClick = (id: number) => {
        setEditingId(id);
    };

    const handleChange = (id: number, key: string, value: string) => {
        const updated = data.map((row) =>
            row.id === id ? { ...row, [key]: value } : row
        );
        setData(updated);
    };

    const handleSaveClick = (id: number) => {
        setEditingId(null);
    };

    return (
        <div>
            <h2>Table Three</h2>
            <DataTable
                data={data}
                headers={headers}
                editingId={editingId}
                onEditClick={handleEditClick}
                onChange={handleChange}
                onSaveClick={handleSaveClick}
            />
        </div>
    );
};

export default TableThree;