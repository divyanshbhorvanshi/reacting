import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {
    return(
       <nav className='flex items-center justify-between p-5 shadow-md bg-neutral-300'>
        <div>
            <img src={logo} alt="" className='w-10 h-10' />
        </div>
        <ul className='flex gap-5 text-lg font-medium'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </ul>
       </nav>
    )
}