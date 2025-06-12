import DataTable from './DataTable';

const TableTwo = () => {
    const data = [
        { Product: 'Laptop', Price: '$1000', Stock: 20 },
        { Product: 'Phone', Price: '$500', Stock: 50 },
        { Product: 'AC', Price: '$1000', Stock: 20 },
        { Product: 'Cooler', Price: '$500', Stock: 50 },
        { Product: 'Car', Price: '$1000', Stock: 20 },
        { Product: 'Bike', Price: '$500', Stock: 50 },
        { Product: 'Bag', Price: '$1000', Stock: 20 },
        { Product: 'Pen', Price: '$500', Stock: 50 },
        { Product: 'Fridge', Price: '$1000', Stock: 20 },
        { Product: 'Watch', Price: '$500', Stock: 50 },
        { Product: 'Ear phones', Price: '$1000', Stock: 20 },
        { Product: 'Charging Cable', Price: '$500', Stock: 50 },
    ];

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Tables Two Example</h1>
            <DataTable data={data} />
        </>
    );

};

export default TableTwo;
