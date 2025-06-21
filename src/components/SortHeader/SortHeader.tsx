import React from 'react';

type SortConfig = {
    key: string;
    direction: 'asc' | 'desc';
} | null;

type Props = {
    header: string;
    sortConfig: SortConfig;
    onSort: (key: string) => void;
};

const SortHeader: React.FC<Props> = ({ header, sortConfig, onSort }) => {
    const isActive = sortConfig?.key === header;
    const symbol = isActive
        ? sortConfig.direction === 'asc'
            ? ' 🔼'
            : ' 🔽'
        : '';

    return (
        <th onClick={() => onSort(header)} style={{ cursor: 'pointer' }}>
            {header.toUpperCase()}
            {symbol}
        </th>
    );
};

export default SortHeader;
