import DataTable from './DataTable';

const TableFour = () => {
    const data = [
        { ID: 'E001', Name: 'John', Dept: 'Engineering' },
        { ID: 'E002', Name: 'Sara', Dept: 'Marketing' },
    ];

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Tables Four Example</h1>
            <DataTable data={data} />
        </>
    );
};

export default TableFour;
