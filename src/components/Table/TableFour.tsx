import React, { useState } from 'react';
import DataTable from './DataTable';

const headers = ['Course', 'Duration', 'Level'];

const initialData = [
    { id: 1, Course: 'React', Duration: '3 months', Level: 'Beginner' },
    { id: 2, Course: 'TypeScript', Duration: '2 months', Level: 'Intermediate' },
];

const TableFour: React.FC = () => {
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
            <h2>Table Four</h2>
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

export default TableFour;
