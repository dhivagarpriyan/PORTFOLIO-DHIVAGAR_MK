import React from 'react'
import html from "../assets/experience/html.png"
import css from "../assets/experience/css.png"
import  javascript  from "../assets/experience/javascript.png"
import reactimg from "../assets/experience/react.png"
import node from "../assets/experience/node.png"
import github from "../assets/experience/github.png"
import nextjs from "../assets/experience/nextjs.png"
import graphql from "../assets/experience/graphql.png"
import tailwind from "../assets/experience/tailwind.png"
const Experience = () => {

    const temp=[
        {
            id:1,
            src:html,
            tittle:"HTML",
            style:"shadow-orange-500"
        },

        {
            id:2,
            src:css,
            tittle:"CSS",
            style:"shadow-blue-500"
        },

        {
            id:3,
            src:javascript,
            tittle:"JAVASCRIPT",
            style:"shadow-yellow-500"
        },

        {
            id:4,
            src:reactimg,
            tittle:"REACT",
            style:"shadow-sky-500"
        },

        {
            id:5,
            src:node,
            tittle:"NODE JS",
            style:"shadow-green-500"
        },

        {
            id:6,
            src:github,
            tittle:"GITHUB",
            style:"shadow-white"
        },

        {
            id:7,
            src:nextjs,
            tittle:"NEXT JS",
            style:"shadow-white"
        },
        
        {
            id:8,
            src:graphql,
            tittle:"GRAPHQL",
            style:"shadow-pink-500"
        },
        
        {
            id:9,
            src:tailwind,
            tittle:"TAILWIND",
            style:"shadow-sky-500"
        },
        
    ]
  return (
    <div name="EXPERIENCE" className=' h-screen w-full bg-gradient-to-b from-gray-800 to-black'>
        <div className=' max-w-screen-lg flex flex-col  justify-center mx-auto w-full h-full p-4 text-white'>
            <div>
                <h2 className='text-2xl font-bold border-b-4 border-gray-400 text-gray-500'>EXPERIENCE</h2>

                <p className=' py-4 text-xl font-medium'>Technologies that i have worked with </p>
            </div>
            <div className=" w-full grid grid-cols-2 sm:grid-cols-3  gap-8 text-center py-8 px-12 sm:px-0">
             {
              temp.map(({id,src,tittle,style})=>(
                <div key={id} className={` shadow-md hover:scale-105 duration-300 py-2 ${style}`}>
                    <img src={src} alt={tittle} className='w-20 mx-auto'/>
                    <p className='mt-4'>{tittle}</p>
                </div>
              ))
             }
        </div>
        </div>
       
    </div>
  )
}

export default Experience