import React, { useState } from 'react';

type Props = {
    row: {
        id: number;
        [key: string]: string | number;
    };
    headers: string[];
    onUpdate: (updatedRow: { id: number;[key: string]: string | number }) => void;
};

const TableRow: React.FC<Props> = ({ row, headers, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedRow, setEditedRow] = useState({ ...row });

    const handleChange = (key: string, value: string) => {
        setEditedRow({ ...editedRow, [key]: value });
    };

    const handleSave = () => {
        onUpdate(editedRow);
        setIsEditing(false);
    };

    return (
        <tr>
            {headers.map((header) => (
                <td key={header}>
                    {isEditing ? (
                        <input
                            type="text"
                            value={editedRow[header]}
                            onChange={(e) => handleChange(header, e.target.value)}
                        />
                    ) : (
                        row[header]
                    )}
                </td>
            ))}
            <td>
                {isEditing ? (
                    <button onClick={handleSave}>💾 Save</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>✏️ Edit</button>
                )}
            </td>
        </tr>
    );
};

export default TableRow;
