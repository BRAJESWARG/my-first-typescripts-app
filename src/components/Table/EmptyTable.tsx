import React, { useState } from 'react';
import DataTable from './DataTable';


const EmptyTable = () => {
  const emptyData: any[] = [];

  const headers: any[] = [];

  const [data, setData] = useState(emptyData);
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
      <h3>Empty Table Example</h3>
      {/* <DataTable data={emptyData} /> */}
      <DataTable
        data={emptyData}
        headers={headers}
        editingId={editingId}
        onEditClick={handleEditClick}
        onChange={handleChange}
        onSaveClick={handleSaveClick}
      />
    </div>
  );
};

export default EmptyTable;




// import React, { useState } from 'react';
// import DataTable from './DataTable';

// const headers = ['name', 'age', 'country'];

// const initialData = [
//   { id: 1, name: 'Alice', age: 25, country: 'USA' },
//   { id: 2, name: 'Bob', age: 30, country: 'UK' },
// ];

// const EmptyTable: React.FC = () => {
//   const [data, setData] = useState(initialData);
//   const [editingId, setEditingId] = useState<number | null>(null);

//   const handleEditClick = (id: number) => {
//     setEditingId(id);
//   };

//   const handleChange = (id: number, key: string, value: string) => {
//     const updated = data.map((row) =>
//       row.id === id ? { ...row, [key]: value } : row
//     );
//     setData(updated);
//   };

//   const handleSaveClick = (id: number) => {
//     setEditingId(null);
//   };

//   return (
//     <div>
//       <h2>Table One</h2>
//       <DataTable
//         data={data}
//         headers={headers}
//         editingId={editingId}
//         onEditClick={handleEditClick}
//         onChange={handleChange}
//         onSaveClick={handleSaveClick}
//       />
//     </div>
//   );
// };

// export default EmptyTable;
