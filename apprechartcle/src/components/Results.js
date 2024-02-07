import React, { useEffect, useState } from 'react';
import nfav from './../images/nfav.svg';
import fav from './../images/fav.svg';
import articlicone from './../images/article.svg'
import ArticleDetails from "../pages/articleDetailles";
import { Link } from "react-router-dom";
function Article(article) {
  const title = article.titre;
  const author = article.auteurs;
  const keyword = article.mot_cles;
  const sumup = article.resume;
    const [icon, setIcon] = useState(nfav);

  function changeIcon() {
    setIcon((currentIcon) => (currentIcon === nfav ? fav : nfav));
  }
  return (
    <div className=" cursor-pointer shadow-md p-2 m-2 h-full w-full bg-[#F5F5F5] rounded-2xl md:p-10">
    <h4 className="text-[#15245B] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> {title} </h4>
    <h5 className="text-[#15245B] font-poppins text-10px font-medium tracking-wide md:text-20px lg:text-26px  "> Auteur :</h5>
    <p className="text-[#4F5557] font-poppins text-10px font-medium tracking-wide md:text-20px lg:text-26px"> {author}</p>
    <h5 className="text-[#15245B] font-poppins text-10px font-medium tracking-wide md:text-20px lg:text-26px  "> Mot clé :</h5>
    <p className="text-[#4F5557] font-poppins text-10px font-medium tracking-wide md:text-20px lg:text-26px  "> {keyword}</p>
    <h5 className="text-[#15245B] font-poppins text-10px font-medium tracking-wide md:text-20px lg:text-26px  "> Résumé :</h5>
    <p className="text-[#4F5557] font-poppins text-10px font-medium tracking-wide md:text-20px lg:text-26px "> {sumup}</p>
    <div className="flex items-center space-x-4 p-4">
         <img onClick={changeIcon} src={icon} className="h-6 w-6" alt="" />
         <Link to={`/article-details/${article}`} className="bg-[#15245B] text-white px-4 py-2 text-8px rounded-full md:text-16px lg:text-20px">
          Plus de detaille
        </Link>
        <button className="bg-[#F5F5F5] border-2 border-solid border-[#15245B] text-[#15245B] text-8px px-4 py-2 rounded-full md:text-16px md:text-20px">
          Voir le PDF 
        </button>
      </div>
    </div>
  );
}

function Results(props) {
  const query = props.query;
  const domain = props.domain ; 
  let [articlesq, setArticles] = useState([]);
    useEffect(() => {
      SendQuery();
    }, []);
  let SendQuery = async () => {
    let response = await fetch(`/api/articles/sr/${domain}/${query}`);
    let data = await response.json()
    setArticles(data)
  };
  return (
    <div className="">
      <div>
        {articlesq.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </div>
  );
}

export default Results;
