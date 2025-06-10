import DataTable from './DataTable';

const TableThree = () => {
    const data = [
        { Course: 'React', Duration: '3 months', Level: 'Beginner' },
        { Course: 'TypeScript', Duration: '2 months', Level: 'Intermediate' },
    ];
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Tables Three Example</h1>
            <DataTable data={data} />
        </>
    );
};

export default TableThree;
