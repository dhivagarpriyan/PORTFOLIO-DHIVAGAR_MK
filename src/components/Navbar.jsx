import React, { useState } from 'react'
import { FaBars,FaTimes} from "react-icons/fa";
import {Link} from "react-scroll"
const Navbar = () => {
  
  const[nav,setNav]=useState(false);
  const links=[
    {
      id:1,
      link:"HOME"
    },

    {
      id:2,
      link:"ABOUT"
    },
    
    {
      id:3,
      link:"PORTFOLIO"
    },
    
    {
      id:4,
      link:"EXPERIENCE"
    },
    {
      id:5,
      link:"CONTACT"
    },
    
  ]
  return (
    <div className=' flex justify-between items-center w-full  h-20 px-4 bg-black fixed'>
        <div >
            <h2 className=' font-signature text-xl text-white'>DHIVAGAR MK</h2>
        </div>
        
        <ul className='hidden md:flex'>
          {links.map(({id,link})=>(
            <li key={id} className=' px-2 hover:scale-105 duration-100 text-xl cursor-pointer text-gray-500 font-medium'>
                  <Link to={link} smooth  duration={500} > {link}  </Link> 
            </li>
          ))}
        </ul>
        
        <div onClick={()=>{setNav(!nav)}} className=' cursor-pointer z-10 text-gray-500 md:hidden pr-4'>
          {nav?<FaTimes size={30}/>:<FaBars size={30}/>}
        </div>
        {nav &&(
           <ul className='flex  flex-col w-full h-screen justify-center items-center  absolute  right-0 top-0 bg-gradient-to-b from-black to-gray-800 '>
           {links.map(({id,link})=>(
             <li key={id} className=' px-4 py-6 text-3xl cursor-pointer text-gray-500'>
                 <Link to={link} smooth  duration={500} onClick={()=>{setNav(!nav)}}> {link}  </Link> 
             </li>
           ))}
         </ul>
        )}
        
    </div>
  )
}

export default Navbar