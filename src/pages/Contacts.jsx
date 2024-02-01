import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Contacts() {

  const {theme} = useContext(ThemeContext)

  return (
    <div
      name='contacts'
      className=
      {`${theme ? 'bg-gradient-to-b from-gray-900 to-black text-white' : 'bg-white text-black'}
            w-full h-auto sm:min-h-screen sm:h-auto pt-[60px] pb-[10px] px-[10px] sm:px-[50px] md:px-[100px]`}>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div className=''>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='text-2xl pt-6'>Submit to contact me</p>
        </div>

        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/7b8fbcd9-155c-46a3-bccf-116ffc5f3394"
            method='post'
            className='flex flex-col w-full md:w-1/2'>

            <input type="text" name='name' placeholder='Enter your name'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

            <input type="text" name='email' placeholder='Enter your email'
              className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

            <textarea name="message" placeholder='Enter your text' rows="7" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

            <button
              className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
            >Let's talk</button>

          </form>
        </div>

      </div>

    </div>
  )
}

export default Contacts