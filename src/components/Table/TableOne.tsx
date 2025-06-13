import React from 'react';
import DataTable from './DataTable';

const headers = ['Name', 'Age', 'Country'];

const sampleData = [
    { id: 1, Name: 'Alice', Age: 25, Country: 'USA' },
    { id: 2, Name: 'Bob', Age: 30, Country: 'UK' },
    { id: 3, Name: 'Charlie', Age: 28, Country: 'Canada' },
    { id: 4, Name: 'David', Age: 32, Country: 'Germany' },
    { id: 5, Name: 'Eva', Age: 27, Country: 'France' },
    { id: 6, Name: 'Frank', Age: 29, Country: 'Italy' },
];

const TableOne: React.FC = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Tables One Example</h1>
            <DataTable data={sampleData} headers={headers} />
        </div>
    );
};

export default TableOne;
