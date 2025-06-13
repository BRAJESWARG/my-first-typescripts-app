import React from 'react';
import DataTable from './DataTable';

const headers = ['Product', 'Price', 'Stock'];


const sampleData = [
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
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Tables Two Example</h1>
            <DataTable data={sampleData} headers={headers} />
        </div>
    );
};

export default TableTwo;
