import DataTable from './DataTable';

const headers = ['Course', 'Duration', 'Level'];

const data = [
    { id: 1, Course: 'React', Duration: '3 months', Level: 'Beginner' },
    { id: 2, Course: 'TypeScript', Duration: '2 months', Level: 'Intermediate' },
];
const TableThree: React.FC = () => {

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Tables Three Example</h1>
            <DataTable data={data} headers={headers} />
        </>
    );
};

export default TableThree;
