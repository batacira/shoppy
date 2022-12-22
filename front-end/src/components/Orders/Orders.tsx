import { useMemo } from 'react'
import { useTable } from 'react-table';
import { ordersGrid } from '../../data/dummy'
import { COLUMNS } from './columns'

// interface Columns {
//     Header: string,
//     accessor: string
// }

type Cols = { Header: string; accessor: string }

const Orders = () => {

    const columns = useMemo((): Cols[] => COLUMNS, [])
    const data = useMemo(() => ordersGrid, [])

    console.log(columns);


    const tableInstance = useTable<any>({
        columns,
        data
    })

    return (
        <div>
            <p>nesto</p>
        </div>
    )
}

export default Orders

