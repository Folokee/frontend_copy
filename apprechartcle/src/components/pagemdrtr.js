import React,{useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ModifierArticle from "./../pages/modifierArticle"
import { Link } from 'react-router-dom';

const Affich=(props) => {
    const article = props.article;

    const modifpage = useNavigate()

    return (
      <section>
        
            
           <div className='sm:flex grid grid-rows-3 grid-flow-col  items-center justify-center sm:justify-between bg-[#FAFAFA]  rounded-[10px] mr-5  ml-5 mb-3  sm:p-4   sm:mb-2 sm:mr-10 sm:pr-10  '>
            <div className='flex ml-2 '>
             <p className=' font-medium text-11px sm:text-14px md:text-19px   text-[#15245B]  mr-1  '>{article.titre} </p>
             </div>
             <div className=''>
             <p className=' ml-2  font-medium text-11px sm:text-14px md:text-19px  text-[#15245B]'>{article.date_pub}</p>
             </div>
             <div className=" font-medium mt-2   mb-2 sm:ml-10">
             <Link to="/modifierArticle">  <button  className=" px-7 py-1  sm:px-14 sm:py-1 bg-[#15245B] text-[#FAFAFA] text-11px sm:text-14px md:text-19px   sm:ml-2 sm:mb-2  mr-1 rounded-full sm:pr-6 sm:pl-6" onClick={() => {modifpage(`/modifrtcl/${article.id}`)} }> Modifier</button> </Link>
              <button className=" px-5 py-1 sm:px-10 sm:py-1 bg-[#FAFAFA] text-[#15245B] text-11px sm:text-14px md:text-19px  rounded-full border-2 border-[#15245B] sm:pr-4 sm:pl-4 ">Supprimer</button>

             </div>

             </div>
             

      </section>
    )
  }

function Pagemdrtr() {
    const[currentIndex,setcurrentIndex] = useState(0) ;
    let [articles, setArticles] = useState([]);
    useEffect(() => {
      getArticles();
    }, []);

    let getArticles = async () => {
     let response = await fetch("/api/articles/");
     let data = await response.json();
     setArticles(data);
   };

    return( 
    <section>
        <div>
            <div className='flex flex-col pt-3 sm:pt-10 w-full h-full  sm:ml-10 sm:pl-10 mb-5 mt-5  sm:mr-10 sm:pr-10 font-signature '>
               {
                   articles.map((haha,index) =>(
                       <Affich article = {haha} currentIndex={currentIndex} key={index} />
                   ))
               }

                <div className='flex items-center sm:justify-end  justify-center'>
                <button className=' mb-5 mt-7 mr-10 px-10 py-2 bg-[#c3eefb]  text-[#15245B] text-11px sm:text-14px md:text-19px   rounded-full block '>Afficher plus</button>
                </div> 
            </div>


        </div>

  </section>)
}

export default  Pagemdrtr ; 