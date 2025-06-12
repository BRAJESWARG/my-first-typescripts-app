import DataTable from './DataTable';

const TableOne = () => {
    const data = [
        { Name: 'Alice', Age: 25, Country: 'USA' },
        { Name: 'Bob', Age: 30, Country: 'Canada' },
        { Name: 'Charlie', Age: 28, Country: 'UK' },
        { Name: 'David', Age: 22, Country: 'India' },
        { Name: 'Eve', Age: 35, Country: 'Germany' },
        { Name: 'Frank', Age: 27, Country: 'France' },
        { Name: 'Grace', Age: 24, Country: 'Spain' },
    ];

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Tables One Example</h1>
            <DataTable data={data} />
        </>
    );
};

export default TableOne;
