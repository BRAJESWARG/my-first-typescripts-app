import React from 'react';
import './styles/DataTable.css';

type TableProps = {
    data: { [key: string]: string | number }[];
};


const DataTable: React.FC<TableProps> = ({ data }) => {
    if (data.length === 0) return <p>No data available</p>;

    const headers = Object.keys(data[0]);

    return (
        <>
            <table className="custom-table">
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th key={header}>{header.toUpperCase()}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i}>
                            {headers.map((header) => (
                                <td key={header}>{row[header]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default DataTable;
