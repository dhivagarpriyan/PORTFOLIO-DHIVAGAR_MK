import React from "react";

import ECOMMERCE from "../assets/portfolio/E-commerce.jpg"
import NIKE from "../assets/portfolio/NIKE1.jpeg"
import netflix from "../assets/portfolio/Netflix.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import RestaurantPage from "../assets/portfolio/Capture.PNG";
import CRUD from "../assets/portfolio/MERN-BOOK STORE.jpg";
import CHAT from "../assets/portfolio/Mern-chat_app.jpg"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: CRUD,
      Demo:"",
      Code:"https://github.com/dhivagarpriyan/BOOK-STORE-MERN-APP"
      
    },
    {
      id: 2,
      src: RestaurantPage,
      Demo:"https://fluffy-babka-1b9a64.netlify.app",
      Code:"https://github.com/dhivagarpriyan/Restaurant-frontend-page"
    },
    {
      id: 3,
      src: netflix,
      Demo:"",
      Code:"https://github.com/dhivagarpriyan/Netflix_clone"
    },
    {
      id: 4,
      src: ECOMMERCE,
      Demo:"",
      Code:"https://github.com/dhivagarpriyan/MINI-ECOMMERCE"
    },
    {
      id: 5,
      src:NIKE,
      Demo:"https://magenta-croissant-86843f.netlify.app/",
      Code:"https://github.com/dhivagarpriyan/NIKE-CLONE-PAGE"
    },
    {
      id: 6,
      src: reactWeather,
      Demo:"https://magnificent-semolina-386643.netlify.app/",
      Code:"https://github.com/dhivagarpriyan/Weather-site"
    },
    {
      id: 7,
      src: CHAT,
      Demo:"https://mern-chat-app-h80p.onrender.com/",
      Code:"https://github.com/dhivagarpriyan/MERN-CHAT_APP/tree/main"
    },
  ];

  return (
    <div
      name="PORTFOLIO"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white  pb-8 pt-16 lg:px-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, src,Demo,Code}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                width={1280}
                height={720}
                className="rounded-md duration-200 hover:scale-105 h-[174px]  object-cover "
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={Demo}>DEMO</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 <a href={Code}>Code</a> 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
