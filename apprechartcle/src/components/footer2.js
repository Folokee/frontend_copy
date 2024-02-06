import React from "react" ; 
import Clogo from './logo' ;
import message from "./../images/message.png"
import phone from "./../images/phone.png"



function Footer2() {


   return(

      <div className="font-signature mb-10 pb-10 ">
     <div className="ml-7 pt-5 mb-3 sm:pt-2 sm:ml-10  ">
           <Clogo/>

            </div>  

            <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-2 ">
                <div className="w-1/2 ml-10  ">
                    <h1 className=" text-[#15245B]  text-19px  sm:text-21px font-semibold mb-4 mt-4 ">À propos de nous</h1>
                    <p className=" text-[#0D0D0D] font-normal">Nous fournissons des articles scientifiques vérifiés de haute qualité. Notre équipe s'engage à offrir des informations précises et actuelles pour vous.</p>
                </div>
                <div className="text-11px  sm:text-14px text-[#0D0D0D] font-normal ml-10 ">
                <h1 className=" text-[#15245B] text-19px  sm:text-21px font-semibold ml-10 sm:ml-0  mt-4 ">Contactez-nous</h1>
                    <div className="flex mt-5 ">
                    <img src={message}  alt="message" className=" mr-3 ml-10 sm:ml-0 " />
                    <p className=" ">lm_remilèesi.dz</p>
                    </div>
                    <div className="flex mt-4 ">
                    <img src={phone}  alt="phone" className=" mr-3 ml-10 sm:ml-0 " />
                    <p className=" ">0660835202</p>
                    </div>
                </div>
                
            </div>
            <div className=" flex justify-center items-center mt-5">
                <p className="text-14px  sm:ml-9  ml-12  sm:text-16px text-[#0D0D0D] font-normal text-center  ">Copyright © 2023 SciTopia  Tous droits réservés.</p>
                </div>

   </div>)

}
export default Footer2 ; 