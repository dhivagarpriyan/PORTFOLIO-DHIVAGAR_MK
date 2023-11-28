import React from 'react'


const Home = () => {
  return (
    <div
      name="HOME"
      className='h-screen w-full bg-gradient-to-b from-black to-gray-800 '
     >
        <div className=' flex flex-col justify-center items-center max-w-screen-lg mx-auto h-full px-4 md:flex-row'>
            <div className=' flex flex-col justify-center h-full '>
                <h2 className=' text-2xl sm:text-5xl text-white'>I AM FULL STACK DEVELOPER</h2>
                <p className=' text-gray-500 py-4'>An aspiring software engineer with knowledge in softwareengineering practices such as HTML5, CSS3, JAVASCRIPT(ES6),JAVA,NODE JS,EXPRESS JS,MONGODB AND MONGOOSE etc. Strong ability  to communicate with clients and abilityto express ideas clearly and concisely. Ability to learn new softwares and technologies quickly. Capability to work in teamsby providing valuable support.</p>

          <div>
            <button className=' text-white rounded-2xl bg-gradient-to-l from-cyan-500 to-blue-800 p-4   hover:scale-110 duration-200'>
              PORTFOLIO
          
           
              
            </button>
        </div>
            </div>
        </div>
        
    </div>
  )
}

export default Home