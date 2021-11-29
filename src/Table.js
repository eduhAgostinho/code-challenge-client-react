import React from 'react';

export default function Table({ columns, items }) {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column) => <th align="left" key={`th${column.field}`} data-testid={`th${column.field}`}>{column.name}</th>)}
                </tr>
            </thead>
            <tbody>
                {Object.keys(items).map((itemKey, index) => (
                    <tr key={`tr${index}`}>
                        {columns.map((column) => (
                            <td width={150} key={`td${column.field}${index}`} data-testid={`td${column.field}${index}`}>{items[itemKey][column.field]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
