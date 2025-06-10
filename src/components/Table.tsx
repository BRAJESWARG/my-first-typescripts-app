import EmptyTable from "./Table/EmptyTable";
import TableFive from "./Table/TableFive";
import TableFour from "./Table/TableFour";
import TableOne from "./Table/TableOne";
import TableThree from "./Table/TableThree";
import TableTwo from "./Table/TableTwo";


function Table() {
    return (
        <div>
            <TableOne />
            <TableTwo />
            <TableThree />
            <TableFour />
            <TableFive />
            <EmptyTable />

        </div>
    );
}

export default Table;
