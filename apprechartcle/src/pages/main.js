import React from "react" ; 
import image from "./../images/photo.png" ; 
import Cmppagprncp2 from './../components/cmppagprncp2'

function Main(){
    return (
        
      <div className=" mt-0 w-full p-0 h-full mb-0   grid-cols-{1} ">
        <div className=" ">
       
        <div className=" bg-[#c3eefb]  w-full h-full  flex justify-around ">
            <div className="font-signature pt-8 mt-8  ">
              <div className=" font-bold text-19px md:text-26px lg:text-40px  ml-3 sm:ml-10 ">
                 <h1 className=''>
                 <span className="text-[#F57581]">Exploration </span>
                 <span className="text-[#15245B]">Scientifique</span>
                 </h1>
                 <h1 className='text-[#15245B]  '>Notre Répertoire </h1>
                 <h1 className="text-[#15245B] ">Complet D’articles</h1>
              </div>
              <p className='text-black text-opacity-64  text-14px sm:text-19px lg:text-21px ml-3 mr-2 sm:ml-10 mt-10 mb-10 font-medium'>
              Explorez des milliers d'articles scientifiques <br /> provenant de domaines variés.
               Scitopia <br />vous permet de plonger au cœur des 
              découvertes <br />les plus récentes et des connaissances <br /> pointues.
              </p>
             
             </div>
             <div className="hidden sm:block image">
                 <img src={image}  alt="photo" className="float-right  object-cover " />
              </div>
              </div>
        </div> 

        <div className="bg-[#FFFFFF] pt-10  font-signature   ">

            <Cmppagprncp2/>
         </div>
      </div>
     
    );
  }
  
  export default Main;
