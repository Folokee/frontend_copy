import React from "react";
import image from "./../images/searchimg.png";
import SearchBar from "./../components/searchbar";

function Search() {
  return (
    <div className="min-h-screen bg-[#c3eefb]">
      <div className="relative p-8 md:p-16 lg:flex lg:items-center lg:justify-between">
        <div className=" text-20px md:text-30px lg:text-40px text-left">
          <h1>
            <span className="text-20px md:text-30px lg:text-40px text-[#15245B] font-poppins font-extrabold">
              Quel Savoir Désirez-vous Découvrir ?
            </span>
          </h1>
          <p className="text-10px md:text-20px lg:text-26px text-black text-opacity-64 font-poppins font-medium">
            Plongez dans une mer d'articles : titres, mots-clés,<br />
            auteurs, contenu intégral.<br /> Trouvez ce que vous cherchez
            <br />
          </p>
        </div>
        <div className="mt-8 lpx g:mt-0 lg:ml-10 image">
          <img
            src={image}
            alt=""
            className="w-full h-auto object-cover lg:w-auto lg:h-auto"
          />
        </div>
      </div>
      <div className="flex items-center justify-center p-8 lg:p-0">
        <SearchBar />
      </div>
    </div>
  );
}

export default Search;
