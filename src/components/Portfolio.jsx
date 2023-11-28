import React from 'react'
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg"
import installNode from "../assets/portfolio/installNode.jpg"
import navbar from "../assets/portfolio/navbar.jpg"
import reactWeather from "../assets/portfolio/reactWeather.jpg"
import reactPortfolio from "../assets/portfolio/reactPortfolio2.jpg"
import  reactSmooth from "../assets/portfolio/reactSmooth.jpg"
const Portfolio = () => {

    const port=[
        {
            id:1,
            src:reactWeather
        },
      
        {
            id:2,
            src:installNode
        },

        {
            id:3,
            src:reactSmooth
        },

        {
            id:4,
            src:arrayDestruct
        },

        {
            id:5,
            src:navbar
        },

        {
            id:6,
            src:reactPortfolio
        },
    ]
  return (
    <div name="PORTFOLIO" className='w-full md:h-screen h-full bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className=' max-w-screen-lg flex flex-col justify-center mx-auto w-full h-full p-4'>
            <div>
                <h2 className=' text-gray-500 text-2xl font-bold border-b-4 border-gray-500'>PORTFOLIO</h2>
                <p className='py-6 text-xl font-medium'>Here you can see some of my work here</p>
            </div>
            <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8  px-12 w-full '>
         
         {port.map(({id,src})=>(
         <div key={id} className=' shadow-md shadow-gray-500 rounded-lg hover:scale-110 duration-200'>
              <img src={src} alt=""  className='rounded-md '/>
            <div className=' flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3  '>DEMO</button>
              <button className='w-1/2 px-6 py-3'>CODE</button>
             </div>
         </div>
         ))}
        
        
      
        </div>
        </div>

        
        
        
      
        </div>
    )
}

export default Portfolio