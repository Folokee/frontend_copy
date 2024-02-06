import React,{useState, useEffect, useRef } from 'react'

import  image from './../images/cmp1.png'
import image1 from './../images/cmp2.png'
import image2 from './../images/cmp3.png'
import  image3 from './../images/cmp4.png'

const Affich=({ title,description,img}) => {

    return (
      <section>
        
            <div className='flex  w-3/4'>
           <div className=' rounded-[10px] bg-[rgb(21,36,91)]     mb-5 mr-4'>
          <img src={img} alt="photo" className=' p-4 ' />
          </div>
            <div>
             <h1 className='font-extrabold text-14px  sm:text-19px  text-[#15245B]   '>{title}</h1>
             <p className='font-normal text-11px  sm:text-14px text-[#0D0D0D]'>{description}</p>
             </div>
             </div>

      </section>
    )
  }

const text =[
    {
        title: "Personnalisation de Votre Expérience",
        description: "Adaptez votre recherche selon vos intérêts grâce à des filtres et options avancés." ,
        img: image3 
    },
    {
        title: "Sauvegarde Personnalisée",
        description: "Gardez une trace de vos articles préférés pour un accès facile ultérieur." ,
        img: image2 
    },
    
    {
        title: "Optimisation de la decouverte",
        description: "Simplifiez votre exploration grâce à des outils puissants pour une expérience utilisateur fluide." ,
        img: image 
    },
    {
        title: "Acces facile ",
        description: "Profitez d'une passerelle conviviale vers une multitude d'articles scientifiques." ,
        img: image1 
    }
]

function Comp() {
    const[currentIndex,setcurrentIndex] = useState(0) ;

    return(

          <section>
                 <div>
                     <div className='flex flex-col sm:grid sm:grid-cols-2  w-full h-full   pl-10 mb-5 pb-5  font-signature '>
                        {
                            text.map((ptext,index) =>(
                                <Affich {...ptext} currentIndex={currentIndex} key={index} />
                            ))
                        }
                     </div>


                 </div>

           </section>


    )
}


export default Comp ; 