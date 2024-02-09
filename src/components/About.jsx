import React from 'react'
import SocialLinks from './SocialLinks'
const About = () => {
  return (
    <div name="ABOUT" className='  w-full  bg-gradient-to-b from-gray-800 to-black pt-20 lg:px-16'>
        
            <div className=' flex flex-col mx-auto justify-center max-w-screen-lg w-full h-full md:h-screen p-2 '>
              <div>
                <p className=' text-gray-500  mt-8 inline text-2xl border-b-4  border-gray-400 font-bold'>ABOUT</p>
               </div>
                <p className=' text-white font-medium text-lg px-2 py-4'>HI i am DHIVAGAR MK from tamilnadu and my hometown is sivaganga.i have completed my secondary school in st.joseph's matriculation school(2017) in  okkur sivaganga with 96% and i have completed my higher secondary school in 21st century international hr sec school(2017-2019) in sivaganga with 80% and i have completed my bachelor's degree in computer science engineering in hindusthan college of engineering and technology in coimbatore with 8.47cgpa.i belong to a nuclear family of 5members and my father is a retired driver and my mother is a housewife and my younger sister is currently BA physics and my younger brother is currently studying 12th grade. </p>

                <br></br>

                <p className=" text-white   font-medium text-lg px-2">
                My strengths are having Good communication Skills, a Positive attitude, self-motivated, and a hard-working person towards my career and my life.My weakness is I feel uncomfortable until I finish my work.My short-term goal is to get a job in a reputed organisation.My long-term goal is to achieve a good position where I'm working.


                </p>
            </div>
            <SocialLinks />
        </div>
    
  )
}

export default About