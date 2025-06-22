import React, { useState } from 'react';
import DataTable from './DataTable';

const headers = ['City', 'Population', 'Language'];

const initialData = [
  { id: 1, City: 'Mumbai', Population: 20000000, Language: 'Marathi' },
  { id: 2, City: 'Delhi', Population: 18000000, Language: 'Hindi' },
];

const TableFive: React.FC = () => {
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
      <h2>Table Five</h2>
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

export default TableFive;
