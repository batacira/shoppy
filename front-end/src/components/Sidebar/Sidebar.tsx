import { links } from '../../data/dummy'
import SidebarIconName from '../Sidebar/SidebarIconName'
import { FaShopware } from 'react-icons/fa'

const Sidebar = () => {

    return (
        <section className='w-350 fixed sidebar  bg-white '>
            <div className=' ml-3 h-screen md:overflow-hidden md:hover:overflow-auto pb-10 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full pr-2'>
                <div className='m-4 flex items-center mb-10 tracking-tight ml-3 '>
                    <FaShopware className='text-2xl mr-3 tracking-light ' />
                    <p className='text-xl font-semibold'>Shoppy</p>
                </div>
                <div>
                    {links.map((item) => {
                        console.log(item);
                        return (
                            <div key={item.title}>
                                <p className='text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase text-xl '>{item.title}</p>
                                <div>{item.links.map(({ name, icon, path }) => {
                                    return (
                                        <SidebarIconName key={name} name={name} Icon={icon} path={path} />
                                    )
                                })}</div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </section>
    )
}

export default Sidebar
