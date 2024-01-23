import React from 'react'
import currencyconverter from "../assets/currency-converter.png"
import moviereviews from "../assets/moviereviews.png"
import employeems from "../assets/Employee-MS.png"
import userregistration from "../assets/user-registration.png"

function Projects() {

  const projects = [
    {
      id: 1,
      name: "Employee Management System",
      src: employeems
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
      src: userregistration
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
      className='bg-gradient-to-b from-gray-900 to-black w-full h-auto sm:min-h-screen sm:h-auto pt-[60px] pb-[30px] px-[10px] sm:px-[50px] md:px-[100px]'>
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white'>

        <div className='pb-8'>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Projects</p>
          <p className='py-6'>These are the projects I have done</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

          {
            projects.map(({ id, name, src }) => (
              <div key={id} className='shadow-md shadow-gray-600 hover:shadow-yellow-400 rounded-lg p-3'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 w-full h-[200px]' />


                <div className='grid items-center justify-center py-2'>
                  <p className='text-center'>{name}</p>
                  <div className='flex items-center justify-center py-2'>
                    <button className="w-1/2 px-6 mx-2 py-1 duration-200 hover:scale-105 text-white bg-gradient-to-b from-gray-900 to-black rounded-full items-center shadow-sm shadow-gray-400 hover:shadow-blue-600" onClick={handleDemo}>Demo</button>
                    <button className="w-1/2 px-6 mx-2 py-1 duration-200 hover:scale-105 text-white bg-gradient-to-b from-gray-900 to-black rounded-full items-center shadow-sm shadow-gray-400 hover:shadow-blue-600">Code</button>
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