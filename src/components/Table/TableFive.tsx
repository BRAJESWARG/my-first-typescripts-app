import DataTable from './DataTable';

const headers = ['City', 'Population', 'Language'];

const TableFive = () => {
    const data = [
        { id: 1, City: 'Mumbai', Population: 20000000, Language: 'Marathi' },
        { id: 2, City: 'Delhi', Population: 18000000, Language: 'Hindi' },
    ];

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Tables Five Example</h1>
            <DataTable data={data} headers={headers} />
        </>
    );
};

export default TableFive;
