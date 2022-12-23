import { useMemo } from 'react'
import { useTable } from 'react-table';
import { ordersData } from '../../data/dummy'
import { COLUMNS } from './columns'

// interface Columns {
//     Header: string,
//     accessor: string
// }

type Cols = { Header: string; accessor: string }

const Orders = () => {

    const data = useMemo(() => ordersData, [])
    const columns = useMemo((): Cols[] =>
        /* ovde filtriramo za sliku,  39 min. */
        COLUMNS, [])

    console.log(columns);


    const tableInstance = useTable<any>({
        columns,
        data
    })
    console.log(columns);
    console.log(data);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance


    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column) => (

                                    <th {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map((cell) => {
                                    console.log(cell.getCellProps());
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>

                                })
                            }
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Orders

