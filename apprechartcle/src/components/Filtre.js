import React, { useState } from "react";
import Word from "./../images/word.svg";
import Author from "./../images/author.svg";
import Instituts from "./../images/instituts.svg";
import date from "./../images/date.svg";
import downarrow from "./../images/down.svg";
import rightparrow from "./../images/right.svg";
import loop from "./../images/simpleloop.svg";

function Filter({ title, icon }) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [icone, setIcon] = useState(downarrow);

  function changeIcon() {
    setIcon((currentIcon) => (currentIcon === downarrow ? rightparrow : downarrow));
    setIsSearchVisible(!isSearchVisible);
  }
  return (
    <div  className=" bg-[#c3eefb] rounded-xl cursor-pointer shadow-md p-2 m-4  h-auto w-auto relative">
      <div className=" bg-[#c3eefb] relative flex justify-center">
      <div className="absolute inset-y-0 left-0 pl-3 pr-6 flex items-center">
        <img src={icon} className="h-6 w-6 text-gray-400" alt="Filter Icon" />
      </div>
      <div className="text-[#15245B] font-poppins text-20px font-medium tracking-wide">
        {title}
      </div>
      <div className="absolute  right-0 ">
          <img onClick={changeIcon} src={icone} className="h-6 w-6" alt="" />
        </div>
      </div>
      {isSearchVisible && (
        <div className=" relative m-4 ">
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded-xl w-full"
          />
          <div className="absolute inset-y-0 right-0 pl-6 pr-3 flex items-center ">
        <img src={loop} className="h-6 w-6 text-gray-400" />
          </div>
        </div>

      )}
    </div>
  );
}

const filters = [
  {
    title: "Mots clés",
    icon: Word,
  },
  {
    title: "Auteur",
    icon: Author,
  },
  {
    title: "Institutions",
    icon: Instituts,
  },
  {
    title: "Periode",
    icon: date,
  },
];

function Filters() {
  return (
    <div className="">
      <h4 className="text-[#15245B] font-poppins text-20px font-bold tracking-wide uppercase m-4 md:text-30px lg:text-40px">
        Filtres
      </h4>
      <div className="w-full h-full">
        {filters.map((filter, index) => (
          <Filter key={index} {...filter} />
        ))}
      </div>
    </div>
  );
}

export default Filters;
