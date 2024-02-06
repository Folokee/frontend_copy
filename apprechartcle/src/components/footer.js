import React from "react" ; 
import Clogo from './logo' ;
import message from "./../images/message.png"
import phone from "./../images/phone.png"
import { Link } from 'react-router-dom';



function Footer() {


   return(
   
      <div className="font-signature mb-10 pb-10 ">
     <div className="ml-7 pt-5 mb-3 sm:pt-2 sm:ml-10  ">
           <Clogo/>
           
            </div>  

            <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-2 ">
                <div className="w-1/2 ml-10  ">
                    <h1 className=" text-[#15245B]  text-19px sm:text-21px md:text-30px  font-semibold mb-4 mt-4 ">À propos de nous</h1>
                    <p className=" text-[#0D0D0D] text-14px sm:text-18px md:text-21px font-normal">Nous fournissons des articles scientifiques vérifiés de haute qualité. Notre équipe s'engage à offrir des informations précises et actuelles pour vous.</p>
                </div>
                <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-2 ">
                <div className="text-11px  sm:text-14px text-[#0D0D0D] font-normal mr-5">
                <h1 className=" text-[#15245B] text-19px sm:text-21px md:text-30px font-semibold ml-10 sm:ml-0 mt-5 ">Contactez-nous</h1>
                    <div className="flex mt-5 ml-10 sm:ml-0 text-14px sm:text-18px md:text-19px ">
                    <img src={message}  alt="message" className="w-6 h-6 mr-3 " />
                    <p className=" ">lm_remil@esi.dz</p>
                    </div>
                    <div className="flex mt-4  ml-10 sm:ml-0  text-14px sm:text-18px md:text-19px ">
                    <img src={phone}  alt="phone" className="w-6 h-6 mr-3 " />
                    <p className=" ">0660835202</p>
                    </div>
                </div>
                <Link to="/signin">
              <button  className="mt-20 sm:ml-9  ml-12  px-7 py-1 bg-[#15245B] text-[#FAFAFA] text-14px md:text-19px lg-30px mb-5 rounded-full pr-5 pl-5"> S'inscrire</button>
              </Link>
                
                </div>
               
            </div>
            
               <div className=" flex justify-center items-center mt-10">
                <p className="text-14px   sm:text-16px md:text-19px lg-text-21px text-[#0D0D0D] font-normal text-center ">Copyright © 2023 SciTopia  Tous droits réservés.</p>
                </div>
   </div>)

}
export default Footer ; 