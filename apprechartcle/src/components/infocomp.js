
import React,{useState, useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import image2 from './../images/V1.png'
import  image3 from './../images/V2.png'


const Affich=({id,name,email}) => {
    let modId = id;
  const navigate = useNavigate();
  let [mod, setMod] = useState(null);
  let response

  useEffect(() => {
    getMod();
  }, [modId]);

  let getMod = async () => {
    if (modId === "new") return;
    let response = await fetch(`/api/mods/${modId}`);
    let data = await response.json();
    setMod(data);
  };

  let updateMod = async () => {
    response = await fetch(`/api/mods/${modId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mod),
    });
  };

  let createMod = async () => {
    response = await fetch(`/api/mods/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mod),
    });
  };

  let deleteMod = async () => {
    response = await fetch(`/api/mods/${modId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };

  let handleSubmit = async () => {
    if (modId !== "new" && (!mod.name || !mod.password)) {
      deleteMod();
    } else if (modId !== "new") {
      updateMod();
    } else if (modId === "new" && mod !== null) {
      createMod();
    }
    navigate("/");
  };

    return (
      <section>
        
            
           <div className='sm:flex grid grid-rows-3 grid-flow-col  items-center justify-center sm:justify-between bg-[#FAFAFA]  rounded-[10px] mr-5  ml-5 mb-3  sm:p-4   sm:mb-2 sm:mr-10 sm:pr-10  '>
            <div className='ml-2   sm:mt-2'>
             <p className=' font-medium text-11px sm:text-14px md:text-19px   text-[#15245B]  mr-1  '>{name} </p>
             </div>
             <div className=''>
             <p className=' ml-2  sm:mt-2 font-medium text-11px sm:text-14px md:text-19px  text-[#15245B]'>{email}</p>
             </div>
             <div className=" mb-2 sm:ml-10 pt-3">
              <link>
              <button  className="px-7 py-1  sm:px-14 sm:py-1 bg-[#15245B] text-[#FAFAFA] text-11px sm:text-14px md:text-19px   sm:ml-2 sm:mb-2  mr-1 rounded-full sm:pr-6 sm:pl-6"> Modifier</button>
              </link>
              <link>
              <button className="px-5 py-1 sm:px-10 sm:py-1 bg-[#FAFAFA] text-[#15245B] text-11px sm:text-14px md:text-19px  rounded-full border-2 border-[#15245B] sm:pr-4 sm:pl-4">Supprimer</button>
              </link>
             </div>

             </div>
             

      </section>
    )
  }

function Infocomp() {
    const[currentIndex,setcurrentIndex] = useState(0) ;
    let [mods, setMods] = useState([]);
    useEffect(() => {
      getMods();
    }, []);

    let getMods = async () => {
     let response = await fetch("/api/mods/");
     let data = await response.json();
     console.log(data)
     setMods(data);
   };

    return( 
    <section>
        <div>
                <div className='flex items-center sm:justify-end  justify-center'>
                
                <button className=' mt-7 mr-10 px-10 py-2 bg-[#c3eefb]  text-[#15245B] text-11px sm:text-14px md:text-19px   rounded-full block '>Ajouter</button>
                
                </div>
            <div className='flex flex-col  w-full h-full  sm:ml-10 sm:pl-10 mb-5 mt-5  sm:mr-10 sm:pr-10 font-signature '>
               {
                   mods.map((mod,index) =>(
                       <Affich {...mod} currentIndex={currentIndex} key={index} />
                   ))
               }
               <div className='flex  justify-center items-center mt-10 mb-10'>
                <img src={image3} alt="image"  className='mr-10'/>
                <img src={image2} alt="image" className='ml-10 sm:mr-10' />
               </div>
            </div>


        </div>

  </section>
  );
};

export default  Infocomp ; 