import DataTable from './DataTable';

const headers = ['ID', 'Name', 'Dept'];

const TableFour = () => {
    const data = [
        { id: 1, ID: 'E001', Name: 'John', Dept: 'Engineering' },
        { id: 2, ID: 'E002', Name: 'Sara', Dept: 'Marketing' },
    ];

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Tables Four Example</h1>
            <DataTable data={data} headers={headers} />
        </>
    );
};

export default TableFour;