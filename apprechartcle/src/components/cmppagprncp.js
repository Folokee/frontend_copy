
import React from "react" ; 
import image from "./../images/photo.png" ; 
import Options  from "./optionrech" ; 
import Comp from './comp'
import Footer from './footer'

function Cmppagprncp(){



    return(<div>
            <div className="">
                        <h1 className="font-extrabold text-[#15245B] text-19px md:text-26px lg:text-34px  ml-3 sm:ml-10">A Propos De L’Equipe:</h1>
                        <p className="font-medium text-14px sm:text-18px lg:text-21px ml-3 mr-2 sm:ml-10 mt-10 mb-10 text-[#0D0D0D]">Nous sommes une équipe de cinq étudiants de l'École Nationale Supérieure <br />d'Informatique (ESI), passionnés par le génie logiciel et la technologie. Ce <br /> projet est le fruit de notre engagement dans le module de génie logiciel, où <br />nous avons entrepris de créer une plateforme intuitive pour la recherche <br /> d'articles scientifiques.</p>
                        
            </div>
            <div>
                <Options/>
                
           </div>
           <div className="bg-[#c3eefb]  w-full h-full">
             <div className=" pt-10   mb-10 mr-2 pl-3 sm:pl-10 mt-10 font-extrabold  ">
              <h1 className="text-[#15245B]  text-19px sm:text-21px md:text-26px lg:text-34px">Pourquoi Choisir <br /> Notre <span className="text-[#F57581] ">site web:</span></h1>
             </div>
             <Comp/>
            </div>
             <Footer></Footer>





    </div> )
}

export default Cmppagprncp ; 