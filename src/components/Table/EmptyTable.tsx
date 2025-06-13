import DataTable from './DataTable';

const EmptyTable = () => {
    const emptyData: any[] = [];
    const headers: any[] = [];


    return (
        <div>
            <h3>Empty Table Example</h3>
            <DataTable data={emptyData} headers={headers} />
        </div>
    );
};

export default EmptyTable;
