import React, { useContext, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/pandacoding.png'
import { Link } from 'react-scroll'
import ThemeContext from '../context/themeContext'
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

function Navbar() {

    const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)

    const { theme, setTheme } = useContext(ThemeContext)

    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'skills',
        },
        {
            id: 4,
            link: 'projects',
        },
        {
            id: 5,
            link: 'contacts',
        }
    ]

    return (
        <div
            className={`fixed w-full h-[50px] flex justify-between items-center px-4 
        ${theme ? 'bg-gradient-to-b from-gray-900 to-black text-yellow-300' : 'bg-slate-300 text-black'}`}>

            <div>
                <img src={Logo} alt="Logo Image" className='w-[35px] rounded-full' />
            </div>

            <div className='flex justify-end'>
                
                {/* Menu */}
                <ul className='hidden md:flex'>
                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200'>
                            <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Menu */}
                <div onClick={handleClick} className='md:hidden z-10 cursor-pointer pr-4'>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>

                {/* Mobile Menu */}
                {nav && (
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500'>
                        {links.map(({ id, link }) => (
                            <li key={id} className='px-4 cursor-pointer py-6 text-4xl'>
                                <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                            </li>
                        ))}
                    </ul>
                )}

                {/* dark mode button */}
                <div>
                    <button
                        onClick={() => setTheme(!theme)}>
                        {theme ? <MdOutlineLightMode size={20}/> : <MdDarkMode size={20}/>}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Navbar