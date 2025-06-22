import EmptyTable from "./Table/EmptyTable";
import TableOne from "./Table/TableOne";
import TableTwo from "./Table/TableTwo";
import TableThree from "./Table/TableThree";
import TableFour from "./Table/TableFour";
import TableFive from "./Table/TableFive";


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
