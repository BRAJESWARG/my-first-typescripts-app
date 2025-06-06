import React from "react";

type ColorButtonProps = {
    label: string;
    color: string;
}

const ColorButton: React.FC<ColorButtonProps> = ({ label, color }) => {
    return (
        <button
            style={{
                backgroundColor: color,
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '8px',
                margin: '10px',
                cursor: 'pointer',
            }}
        >
            {label}
        </button>
    )
}

export default ColorButton;