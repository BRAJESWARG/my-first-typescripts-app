import DataTable from './DataTable';

const TableTwo = () => {
    const data = [
        { Product: 'Laptop', Price: '$1000', Stock: 20 },
        { Product: 'Phone', Price: '$500', Stock: 50 },
    ];

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Tables Two Example</h1>
            <DataTable data={data} />
        </>
    );

};

export default TableTwo;
