import React from 'react'

const Contact = () => {
  return (
    <div name="CONTACT" className='w-full h-screen bg-gradient-to-b from-black to-gray-800'>
        <div className='max-w-screen-lg flex  flex-col justify-center w-full h-full mx-auto '>
            <div>
                <h2 className='text-gray-500 font-bold text-2xl border-b-4 border-gray-500 '>CONTACT</h2>
                <p className=' text-white pt-4 text-xl font-medium'>Submit the form below to get in touch with me</p>
            </div>
        
        <div>
            <form action='https://getform.io/f/b2c13607-8303-45c9-b7d7-fb22771f5502' method='post' className='flex flex-col justify-center mt-4 w-1/2 mx-auto'>
                <input name='name' type='text' placeholder='ENTER YOUR NAME...' className='p-2 border-2  outline-none  rounded-md  bg-transparent'/>
                
                <input name='email' type='email' placeholder='ENTER YOUR EMAIL...' className='p-2 my-2  outline-none rounded-md bg-transparent border-2'/>
               
               <textarea name="textarea"   rows="10" placeholder='ENTER YOUR MESSAGE' className='p-2 outline-none rounded-md bg-transparent border-2 text-white'></textarea>
               

               <button type='submit' className=' bg-gradient-to-b from-cyan-500 to-blue-800 text-white mt-2 rounded-md w-40 p-2 mx-auto bg-transparent'>SUBMIT</button>
            </form>

          </div>
        </div>
    </div>
  )
}

export default Contact