import React, { useState } from "react";
import nfav from './../images/nfav.svg';
import fav from './../images/fav.svg';
import articlicone from './../images/article.svg'
import ArticleDetails from "../pages/articleDetailles";
import { Link } from "react-router-dom";
function Article(article) {
  const title = article.title;
  const author = article.author;
  const keyword = article.keyword;
  const sumup = article.sumup;
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

const Articles = [
  {
    id:"1",
    title: "Understanding Machine Learning Algorithms",
    author: "John Smith",
    institutions :"Ecole superieur d'informatique",
    keyword:"Machine Learning, Algorithms, Data Science, Artificial Intelligence",
    références:"",
    sumup:"This article by John Smith provides an insightful overview of various machine learning algorithms commonly used in data science and artificial intelligence" ,
    date:"12/12/2023",
    details:"Le machine learning, ou apprentissage automatique, est une branche de l'intelligence artificielle qui révolutionne de nombreux domaines. Il permet aux ordinateurs d'apprendre et de s'améliorer à partir de données, sans être explicitement programmés pour chaque tâche. Ce champ d'étude repose sur des algorithmes et des modèles qui permettent aux machines de détecter des modèles dans les données et de prendre des décisions intelligentes en se basant sur ces modèles. Les Types de Machine Learning 1. Apprentissage Supervisé :Ce type implique des données étiquetées, où l'algorithme apprend à prédire des résultats basés sur des exemples fournis. Par exemple, la classification d'emails en spam ou non spam.                                                     2. Apprentissage Non Supervisé :Les données non étiquetées sont utilisées ici. L'algorithme trouve des structures et des modèles par lui-même. Un exemple est la segmenta                                           afficher plus...."
  },
  {
    id:"2",
    title: "Understanding Machine Learning Algorithms",
    author: "John Smith",
    institutions :"Ecole superieur d'informatique",
    keyword:"Machine Learning, Algorithms, Data Science, Artificial Intelligence",
    références:"",
    sumup:"This article by John Smith provides an insightful overview of various machine learning algorithms commonly used in data science and artificial intelligence" ,
    date:"12/12/2023",
    details:"Le machine learning, ou apprentissage automatique, est une branche de l'intelligence artificielle qui révolutionne de nombreux domaines. Il permet aux ordinateurs d'apprendre et de s'améliorer à partir de données, sans être explicitement programmés pour chaque tâche. Ce champ d'étude repose sur des algorithmes et des modèles qui permettent aux machines de détecter des modèles dans les données et de prendre des décisions intelligentes en se basant sur ces modèles. Les Types de Machine Learning 1. Apprentissage Supervisé :Ce type implique des données étiquetées, où l'algorithme apprend à prédire des résultats basés sur des exemples fournis. Par exemple, la classification d'emails en spam ou non spam.                                                     2. Apprentissage Non Supervisé :Les données non étiquetées sont utilisées ici. L'algorithme trouve des structures et des modèles par lui-même. Un exemple est la segmenta                                           afficher plus...."
  },
  {
    id:"3",
    title: "Understanding Machine Learning Algorithms",
    author: "John Smith",
    institutions :"Ecole superieur d'informatique",
    keyword:"Machine Learning, Algorithms, Data Science, Artificial Intelligence",
    références:"",
    sumup:"This article by John Smith provides an insightful overview of various machine learning algorithms commonly used in data science and artificial intelligence" ,
    date:"12/12/2023",
    details:"Le machine learning, ou apprentissage automatique, est une branche de l'intelligence artificielle qui révolutionne de nombreux domaines. Il permet aux ordinateurs d'apprendre et de s'améliorer à partir de données, sans être explicitement programmés pour chaque tâche. Ce champ d'étude repose sur des algorithmes et des modèles qui permettent aux machines de détecter des modèles dans les données et de prendre des décisions intelligentes en se basant sur ces modèles. Les Types de Machine Learning 1. Apprentissage Supervisé :Ce type implique des données étiquetées, où l'algorithme apprend à prédire des résultats basés sur des exemples fournis. Par exemple, la classification d'emails en spam ou non spam.                                                     2. Apprentissage Non Supervisé :Les données non étiquetées sont utilisées ici. L'algorithme trouve des structures et des modèles par lui-même. Un exemple est la segmenta                                           afficher plus...."
  },
  {
    id:"4",
    title: "Understanding Machine Learning Algorithms",
    author: "John Smith",
    institutions :"Ecole superieur d'informatique",
    keyword:"Machine Learning, Algorithms, Data Science, Artificial Intelligence",
    références:"",
    sumup:"This article by John Smith provides an insightful overview of various machine learning algorithms commonly used in data science and artificial intelligence" ,
    date:"12/12/2023",
    details:"Le machine learning, ou apprentissage automatique, est une branche de l'intelligence artificielle qui révolutionne de nombreux domaines. Il permet aux ordinateurs d'apprendre et de s'améliorer à partir de données, sans être explicitement programmés pour chaque tâche. Ce champ d'étude repose sur des algorithmes et des modèles qui permettent aux machines de détecter des modèles dans les données et de prendre des décisions intelligentes en se basant sur ces modèles. Les Types de Machine Learning 1. Apprentissage Supervisé :Ce type implique des données étiquetées, où l'algorithme apprend à prédire des résultats basés sur des exemples fournis. Par exemple, la classification d'emails en spam ou non spam.                                                     2. Apprentissage Non Supervisé :Les données non étiquetées sont utilisées ici. L'algorithme trouve des structures et des modèles par lui-même. Un exemple est la segmenta                                           afficher plus...."
  },
];

function Results() {
  return (
    <div className="">
      <div>
        {Articles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </div>
  );
}

export default Results;
