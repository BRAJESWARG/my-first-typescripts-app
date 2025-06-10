import DataTable from './DataTable';

const EmptyTable = () => {
    const emptyData: any[] = [];

    return (
        <div>
            <h3>Empty Table Example</h3>
            <DataTable data={emptyData} />
        </div>
    );
};

export default EmptyTable;
