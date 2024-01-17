import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Java from '../assets/java.png';
import SpringBoot from '../assets/springboot.png';
import MySQL from '../assets/mysql.png';
import Mongo from '../assets/mongo.png';
import GitHub from '../assets/github.png';

function Skills() {

    const techs = [
        {
            id: 1,
            src: SpringBoot,
            title: 'Java',
            style: 'shadow-red-500'
        },
        {
            id: 2,
            src: SpringBoot,
            title: 'Spring Boot',
            style: 'shadow-green-500'
        },
        {
            id: 3,
            src: HTML,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 4,
            src: CSS,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: JavaScript,
            title: 'Java Script',
            style: 'shadow-yellow-500'
        },
        {
            id: 6,
            src: ReactImg,
            title: 'React JS',
            style: 'shadow-blue-600'
        },
        {
            id: 7,
            src: Tailwind,
            title: 'Tailwind CSS',
            style: 'shadow-sky-500'
        },
        {
            id: 8,
            src: GitHub,
            title: 'Github',
            style: 'shadow-gray-400'
        },
        {
            id: 9,
            src: MySQL,
            title: 'MySQL',
            style: 'shadow-blue-500'
        },
        {
            id: 10,
            src: Mongo,
            title: 'Mongo DB',
            style: 'shadow-green-500'
        }
    ]

    return (
        <div name='skills'
            className='bg-gradient-to-b from-gray-900 to-black w-full h-auto sm:min-h-screen sm:h-auto pt-[60px] pb-[10px] px-0 sm:px-[80px] '>
            <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white'>
                
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                    <p className='py-6'>These are the technologies I work with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0'>

                    {techs.map(({ id, src, title, style }) => (
                        <div 
                        key={id}
                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                    }

                </div>

            </div>
        </div >
    )
}

export default Skills


{/* <div name='skill'
    className='w-full h-screen bg-[#0a192f] text-gray-300'>

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p  className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'>These are the technologies I work with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 '>
                <div>
                    <img className='w-20 mx-auto' src={Java} alt="JAVA.Logo" />
                    <p></p>
                </div>

                
            </div>

        </div>
        
    </div> */}