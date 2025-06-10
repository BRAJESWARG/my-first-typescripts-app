import DataTable from './DataTable';

const TableFive = () => {
    const data = [
        { City: 'Mumbai', Population: 20000000, Language: 'Marathi' },
        { City: 'Delhi', Population: 18000000, Language: 'Hindi' },
    ];

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Tables Five Example</h1>
            <DataTable data={data} />
        </>
    );
};

export default TableFive;
