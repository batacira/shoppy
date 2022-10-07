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
            isActive ? 'bg-red-500' : 'bg-slate-600'
        }
        >
            <div className='bg-inherit'>
                <p className='capitalize'>{name}</p>
                <div>
                    <Icon size={27} />
                </div>
            </div>
        </NavLink>
    )
}

export default SidebarIconName
