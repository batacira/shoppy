import { links } from '../../data/dummy'
import SidebarIconName from '../Sidebar/SidebarIconName'
import { FaShopware } from 'react-icons/fa'

const Sidebar = () => {

    return (
        <section className='mt-4'>
            <div className='m-6 flex items-center'>
                <FaShopware className='text-2xl mr-3 ' />
                <p className='font-bold text-xl'>Shoppy</p>
            </div>
            <div>
                {links.map((item) => {
                    console.log(item);
                    return (
                        <div key={item.title}>
                            <p className='text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase'>{item.title}</p>
                            <div>{item.links.map(({ name, icon, path }) => {
                                return (
                                    <SidebarIconName key={name} name={name} Icon={icon} path={path} />
                                )
                            })}</div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Sidebar
