import React from 'react' ;
import { useState } from 'react' ;
import  image from './../images/image3.png'
import image1 from './../images/image1.png'
import image2 from './../images/image2.png'

const Optionrech=({ title,description,img}) => {

  return (
    <section>
        <div className=' h-full w-4/5 bg-[rgb(21,36,91)] rounded-[20px]  ml-1 mb-7 pb-5 '>
        <img src={img} alt="" className='h-60 w-60  ml-8 pl-8     ' />
           <h1 className=' font-semibold text-13px sm:text-18px flex items-center justify-center mb-2 mt-4  text-[#FFFFFF]  '>{title}</h1>
           <p className=' font-medium text-11px sm:text-14px text-center    text-[#FAFAFA] '>{description}</p>
        </div>
       
    </section>
  )
}
  const options =[
    {
        title: "Recherche Avancée",
        description: "Explorez des articles scientifiques avec précision en utilisant notre fonction de recherche avancée. Cherchez dans le titre, les mots-clés, les auteurs et le texte intégral pour des résultats pertinents" ,
        img: image 
    },
    {
        title: "Filtrage des Résultats",
        description: "Affinez vos résultats de recherche selon vos besoins spécifiques. Filtrez par mots-clés, auteurs, institutions, et période de publication pour une expérience de recherche personnalisée." ,
        img: image1 
    },
    
    {
        title: "Affichage des Détails des Articles",
        description: "Plongez dans chaque article scientifique. Visualisez les détails tels que le titre, le résumé, les auteurs, les mots-clés, et accédez au texte intégral et au PDF associé pour une exploration approfondie." ,
        img: image2 
    }
]
const Options = () =>{
    const[currentIndex,setcurrentIndex] = useState(0) ;

     return(
           <section>
                 <div>
                     <h1 className='flex items-center justify-center  font-signature font-extrabold text-[#15245B] mt-10 pt-1 mb-1 ml-2 sm:ml-6 text-19px md:text-26px lg:text-34px'> Outils de Recherche  </h1> 
                     <h1 className='flex items-center justify-center  font-signature font-extrabold text-[#15245B] mt-1 pt-1 mb-10 ml-2 sm:ml-6 text-19px md:text-26px lg:text-34px'> Scientifique </h1>  
                     <div className='   flex flex-col w-full h-full sm:grid sm:grid-cols-3 sm:gap-3 pl-6 font-signature '>
                        {
                            options.map((option,index) =>(
                                <Optionrech {...option} currentIndex={currentIndex} key={index} />
                            ))
                        }
                     </div>


                 </div>

           </section>
     )
}

export default Options ; 
