import React from "react";

import html from "../assets/experience/html.png";
import css from "../assets/experience/css.png";
import javascript from "../assets/experience/javascript.png";
import reactImage from "../assets/experience/react.png";
import mongodb from "../assets/experience/mongodb.png";

import github from "../assets/experience/github.png";
import tailwind from "../assets/experience/tailwind.png";
import node from "../assets/experience/node.png";
import express from "../assets/experience/express.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: express,
      title: "Express JS",
      style: "shadow-white ",
    },
    {
      id: 7,
      src: node,
      title: "Node",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src:mongodb,
      title: "Mongodb",
      style: "shadow-green-400",
    },
  ];

  return (
    <div
      name="EXPERIENCE"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full pt-20 pb-8 lg:px-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-1 inline">
            Experience
          </p>
          <p className="py-3">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center pb-8 pt-2 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-95 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt=""  className="w-20 mx-auto h-20" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
