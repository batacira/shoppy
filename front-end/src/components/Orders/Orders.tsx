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

    console.log(ordersData, 'dddddddddddddddddddddddddddddddddddddddddddddddddddd');
    const data = useMemo(() => ordersData, [])
    const columns = useMemo((): Cols[] =>
        ordersData[0] ? COLUMNS.map((obj) => {
            if (obj.Header === 'Image')
                return {
                    Header: "Image",
                    accessor: "ProductImage",
                    Cell: ({ value }: any) => <img src={value} alt={value} width={100} className='m-auto rounded-xl text-opacity-100' />,
                }
            return obj
        }) : []
        , [])

    console.log(columns);


    const tableInstance = useTable<any>({
        columns,
        data
    })
    console.log(columns);
    console.log(data);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance


    return (
        <div>
            <p className='text-4xl font-bold mb-10'>Orders</p>
            <div className='border-1 border-gray-300'>
                <table {...getTableProps()} className='w-full'>
                    <thead>
                        {
                            headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()} className='text-opacity-50'>
                                    {
                                        headerGroup.headers.map((column) => (

                                            <th {...column.getHeaderProps()} className='border-1 border-gray-300 opacity-60'>
                                                {column.render('Header')}
                                            </th>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </thead>
                    <tbody {...getTableBodyProps()} >
                        {rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()} className='border-1 border-gray-300'>
                                    {
                                        row.cells.map((cell) => {
                                            console.log(cell.getCellProps());
                                            return <td className='text-center p-2' {...cell.getCellProps()}>{cell.render('Cell')}</td>

                                        })
                                    }
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </ div>
    )
}

export default Orders

