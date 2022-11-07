import { IconType } from 'react-icons/lib';
import { NavLink } from "react-router-dom";

interface Props {
    name: string,
    Icon: IconType,
    path: string
}

const SidebarIconName = ({ name, Icon, path }: Props) => {

    return (
        <NavLink to={path} className={({ isActive }) =>
            isActive ? 'bg-active-blue text-white rounded-lg' : ''
        }
        >
            <div className='bg-inherit flex items-center gap-5 pt-4 pl-3 pb-4 rounded-lg text-md ml-3 text-inherit mb-2'>
                <div>
                    <Icon size={20} />
                </div>
                <p className='capitalize pr-2 text-xl'>{name}</p>
            </div>
        </NavLink>
    )
}

export default SidebarIconName
