import React, { useState } from 'react';
import DataTable from './DataTable';

const headers = ['name', 'age', 'country'];

const initialData = [
  { id: 1, name: 'Bob', age: 25, country: 'USA' },
  { id: 2, name: 'Alice', age: 30, country: 'UK' },
  { id: 3, name: 'Frank', age: 28, country: 'Canada' },
  { id: 4, name: 'Eva', age: 32, country: 'Germany' },
  { id: 5, name: 'Charlie', age: 27, country: 'France' },
  { id: 6, name: 'David', age: 29, country: 'Italy' },
];

const TableOne: React.FC = () => {
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
      <h2>Table One</h2>
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

export default TableOne;
