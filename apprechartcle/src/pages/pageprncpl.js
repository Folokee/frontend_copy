import React from "react" ; 
import Logo from "./../images/logo.png" ;
import image from "./../images/photo.png" ; 
import { Link } from 'react-router-dom';
import Clogo from '../components/logo';
import Cmppagprncp from './../components/cmppagprncp'


function Pageprncpl(){
  
    return (
        
      <div className=" w-full min-h-screen  bg-[#c3eefb]  ">
           <div className="ml-3 pt-5 mb-3 sm:pt-2 sm:ml-10">
           <Clogo/>
            </div>     
                

             
          <div className=" flex justify-around">
            <div className="font-signature">
              <div className=" font-bold text-19px md:text-21px lg:text-40px ml-3 sm:ml-10 ">
                 <h1 className=''>
                 <span className="text-[#F57581]">Exploration</span>
                 <span className="text-[#15245B]">Scientifique</span>
                 </h1>
                 <h1 className='text-[#15245B]  '>Notre Répertoire </h1>
                 <h1 className="text-[#15245B] ">Complet D’articles</h1>
              </div>
              <p className='text-black text-opacity-64  text-14px sm:text-19px lg:text-21px ml-3 sm:ml-10 mt-10 mb-10 font-medium'>
              Explorez des milliers d'articles scientifiques <br /> provenant de domaines variés.
               Scitopia <br />vous permet de plonger au cœur des 
              découvertes <br />les plus récentes et des connaissances <br /> pointues.
              </p>
              <div className="space-x-4 sm:ml-10">
              <Link to="/signin">
              <button  className="  px-10 py-3 bg-[#15245B] text-[#c3eefb] text-14px md:text-19px lg-30px ml-2 mb-5 rounded-full pr-10 pl-10"> S'inscrire</button>
              </Link>
              <Link to="/login">
              <button className=" px-10 py-2 bg-[#c3eefb] text-[#15245B] text-14px md:text-19px rounded-full border-2 border-[#15245B] pr-4 pl-4 ">se connecter</button>
              </Link>

             </div>
             </div>
             <div className=" mb-5 hidden sm:block image">
                 <img src={image}  alt="photo" className=" float-right  object-cover  " />
              </div>
              </div>
              <div className="bg-[#FFFFFF] pt-10  font-signature   ">

              <Cmppagprncp/>
              </div>
              

      </div>
     
    );
  }
  
  export default Pageprncpl;
