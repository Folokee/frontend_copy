import React, { useState } from "react";
import nfav from './../images/nfav.svg';
import fav from './../images/fav.svg';
import articlicone from './../images/article.svg'
import SearchBar from "./../components/searchbar" ;

function ArticleDetails({ article }) {
  const title = article[1];
  const author = article[2];
  const institutions = article[3];
  const keyword = article[4];
  const reference = article[5];
  const sumup = article[6];
  const date = article[7];
  const details = article[8];
    const [icon, setIcon] = useState(nfav);

    function changeIcon() {
      setIcon((currentIcon) => (currentIcon === nfav ? fav : nfav));
    }

    return (
      <div className=" w-ful h-full bg-[#FFFFFF]  top-0 left-0 right-0 ">
          <div className="flex justify-center mt-10  ">
            <SearchBar/>
       </div>
    <div className=" relative cursor-pointer shadow-md p-2 m-2 h-auto w-auto bg-[#F5F5F5] rounded-2xl md:p-6 md:m-20">
     <div className="flex justify-items">
        <img src={articlicone} alt=""  className="w-16 h-16 "/>   
        <h4 className="text-[#15245B] font-poppins text-20px  underline font-medium tracking-wide ml-4 md:ml-8 md:text-30px lg:text-40px  "> {title} </h4>
    </div>
    <h5 className="text-[#15245B] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> Auteur :</h5>
    <p className="text-[#4F5557] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px "> {author}</p>
    <h5 className="text-[#15245B] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> institutions :</h5>
    <p className="text-[#4F5557] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px "> {institutions }</p>
    <h5 className="text-[#15245B] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> Mot clé :</h5>
    <p className="text-[#4F5557] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> {keyword}</p>
    <h5 className="text-[#15245B] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> références Bibliographiques :</h5>
    <p className="text-[#4F5557] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px "> {reference}</p>
    <h5 className="text-[#15245B] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> Résumé :</h5>
    <p className="text-[#4F5557] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> {sumup}</p>
    <h5 className="text-[#15245B] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> Publie le:</h5>
    <p className="text-[#4F5557] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> {date}</p>
    <div className=" flex items-center space-x-4 p-4 ">
         <img onClick={changeIcon} src={icon} className="h-6 w-6" alt="" />
        <button className="bg-[#F5F5F5] border-2 border-solid border-[#15245B] text-[#15245B] text-10px px-4 py-2 rounded-full md:text-16px md:text-20px">
          Voir le PDF 
        </button>
      </div>
    </div>
    <div className="relative cursor-pointer shadow-md p-2 m-2 h-auto w-auto bg-[#F5F5F5] text-[#37474F] text-16px md:text-26px lg:text-30px rounded-2xl md:p-10 md:m-20">
         {details}
    </div>
      </div>
    );
  }
  export default ArticleDetails;