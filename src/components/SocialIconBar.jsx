import React from 'react'
import {FaGithub, FaLinkedin, FaFacebook  } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

function SocialIconBar() {

    const links = [
        {
            id:1,
            name:'LinkedIn',
            icon:<FaLinkedin size={30} />,
            link:"https://www.linkedin.com/in/thisarusupun"
        },
        {
            id:2,
            name:'Github',
            icon:<FaGithub size={30} />,
            link:"https://www.github.com/thisarusupun"
        },
        {
            id:3,
            name:'Gmail',
            icon:<HiOutlineMail size={30} />,
            link:"mailto:thisarusupun1314@gmail.com"
        }
    ]

    return (
        <div>
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>

                    {links.map(({id,name,icon,link}) => (
                        <li key={id} className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[5px] duration-300 bg-gradient-to-b from-gray-900 to-black shadow-md hover:shadow-gray-300 rounded-full my-2'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href={link}>{name}{icon}</a>
                    </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}

export default SocialIconBar