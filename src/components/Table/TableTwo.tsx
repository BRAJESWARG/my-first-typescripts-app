import React, { useState } from 'react';
import DataTable from './DataTable';

const headers = ['Product', 'Price', 'Stock'];

const initialData = [
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
            <h2>Table Two</h2>
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

export default TableTwo;
