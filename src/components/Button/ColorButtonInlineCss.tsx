import React from "react";

type ColorButtonProps = {
    label: string;
    bgcolor: string;
    color: string;
}

const ColorButton: React.FC<ColorButtonProps> = ({ label, bgcolor, color }) => {
    return (
        <button
            style={{
                backgroundColor: bgcolor,
                color: color,
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