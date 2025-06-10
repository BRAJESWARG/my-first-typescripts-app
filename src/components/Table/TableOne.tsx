import DataTable from './DataTable';

const TableOne = () => {
    const data = [
        { Name: 'Alice', Age: 25, Country: 'USA' },
        { Name: 'Bob', Age: 30, Country: 'Canada' },
    ];

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Tables One Example</h1>
            <DataTable data={data} />
        </>
    );
};

export default TableOne;
