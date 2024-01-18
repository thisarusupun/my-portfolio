import React from 'react'
import currencyconverter from "../assets/currencyconverter.png"
import moviereviews from "../assets/moviereviews.png"

function Projects() {

  const projects = [
    {
      id: 1,
      name: "Employee Management System",
      src: currencyconverter
    },
    {
      id: 2,
      name: "Currency Converter",
      src: currencyconverter
    },
    {
      id: 3,
      name: "Movie Reviews",
      src: moviereviews
    },
    {
      id: 4,
      name: "User registration",
      src: currencyconverter
    },
    {
      id: 5,
      name: "Weather Application",
      src: currencyconverter
    },
  ]

  const handleDemo = () => {
      window.location.href = "http://www.google.com"
  }

  return (
    <div name='projects'
      className='bg-gradient-to-b from-gray-900 to-black w-full h-auto sm:min-h-screen sm:h-auto pt-[60px] pb-[10px] px-0 sm:px-[80px]'>
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white'>

        <div className='pb-8'>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Projects</p>
          <p className='py-6'>These are the projects I have done</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

          {
            projects.map(({ id, name, src }) => (
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />


                <div className='grid items-center justify-center py-2'>
                  <p className='text-center'>{name}</p>
                  <div className='flex items-center justify-center py-2'>
                    <button className="w-1/2 px-6 duration-200 hover:scale-105" onClick={handleDemo}>Demo</button>
                    <button className="w-1/2 px-6 duration-200 hover:scale-105">Code</button>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Projects