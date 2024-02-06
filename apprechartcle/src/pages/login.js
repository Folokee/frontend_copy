import React,  { useState } from "react" ; 
import Logo from "./../images/logo.png" ;
import photo2 from "./../images/photo2.png" ;
import Google from './../images/google.png' ; 
import { Link } from 'react-router-dom';
import Clogo from '../components/logo';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import  Error from "./../components/errorMessage";

function Login () {
    const [errorMessage,setErrorMessage] = useState(null);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
  
    
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      setPasswordError(passwordRegex.test(e.target.value) ? '' : 'Le mot de passe doit contenir au moins 8 caractères, dont au moins une lettre et un chiffre');
    };
    const history = useNavigate() ;
    async function datafetch() {
       const  response = await  fetch("http://127.0.0.1:8000/api/login", {
       method: "POST", 
       mode: "cors", 
       cache: "no-cache", 
       credentials: "same-origin", 
       headers: {
         "Content-Type": "application/json",
       },
       redirect: "follow",
       referrerPolicy: "no-referrer",
       body: JSON.stringify({
         "name" :  document.getElementsByName("name")[0].value , 
         "password" : document.getElementsByName("password")[0].value ,
       }), 
     });
     const data =  await response.json();
     if(data["Validation"]=="valid"){
        Cookies.set("USER", data.visitor , { expires: 10 , path: "/" });
        Cookies.set("NAME", data.token , { expires: 10 , path: "/" });
        history('/') ; 
        window.location.reload();
     }
     else {
      setErrorMessage("utilisateur deja existe");
     }
   }
    return(
        <div className="sm:flex  sm:w-full   ">
           
            <div className=" sm:flex-wrap  sm:w-full sm:min-h-screen sm:bg-[#c3eefb] sm:justify-center sm:items-center  ">
                <div className="pt-10 pl-10 md:pt-2">
                <Clogo/>
                 </div>  
                   <div className="hidden sm:block sm:bg-[#c3eefb]">
                   <img src={photo2} alt=""  className=" w-auto h-auto py-5 my-5 ml-10 " />
                   </div>
            </div>
            <div className=" flex flex-col w-full h-full bg-[#FAFAFA] font-signature  font-extrabold mb-10 ml-10 mt-10 sm:ml-20 sm:mt-20 ">
                 
                   <h1 className=" text-[#15245B] text-24px sm:text-30px  md:text-40px xl:text-40px 2xl:text-50px  ">Bienvenue de nouveau sur<br /> <span className="text-[#FBBC05]" >Sci</span> <span className="text-[#F57581] ">Topia !</span> </h1>
                        
                        <div className="font-semibold text-16px  md:text-16px lg:text-18px xl:text-21px 2xl:text-26px  text-[#15245B] mt-4 ">
                            <label >Nom Utilisateur</label>
                        </div>
                        <div>
                        <input name="name" placeholder="Entrer votre nom" className="w-4/5 rounded-md px-2 py-2 ring-2 ring-[#15245B]  text-13px  sm:text-15px md:text-18px xl:text-19px 2xl:text-21px   mt-2  font-normal  focus:outline-none" type="text" id="id_username" />
                        </div>
                        <div className="font-semibold text-16px  md:text-16px lg:text-18px xl:text-21px 2xl:text-26px  text-[#15245B] mt-2">
                            <label >Mot de passe</label>
                        </div>
                        <div><input  id="id_password" name="password" placeholder="Entrer votre mot de passe" className=" w-4/5 rounded-md  text-13px  sm:text-15px md:text-18px xl:text-19px 2xl:text-21px    mt-2 p-2   ring-2 ring-[#15245B] font-normal focus:outline-none" type="password"  value={password}  onChange={handlePasswordChange}/></div>
                        {passwordError && (
                                <div className="text-red-500 font-signature text-sm font-medium">{passwordError}</div>
                         )}
                        <div className=" text-[#15245B] mb-3 mt-4">
                            <input type="checkbox" id="remember" />
                            <label for="remember" className=" text-[#A59E9E] font-normal mr-4"> <a href="">Mot de passe oublié</a></label>
                        </div>
                        <div className="flex flex-col text-21px ">
                        <button id="id_Ok" className="w-4/5 my-3  bg-[#15245B] text-[#FAFAFA] font-semibold rounded-full py-2 pr-8 pl-8 text-14px sm:text-15px md:text-19px lg:text-21px  xl:text-21px 2xl:text-24px"  onClick={() => { datafetch()  }}>Se connecter</button>
                         
                        </div>
                    <div className="flex sm:items-center sm:justify-center font-signature font-medium text-13px sm:text-18px md:text-19px mt-3 sm:w-4/5">
                      <p className="text-[#263238] mr-1">Vous n'avez pas de compte ?</p>
                      <Link to="/signin">
                      <button className="text-[#F57581] ">S'inscrire</button>
                      </Link>
                      </div>

            </div>
            {errorMessage && <Error message={errorMessage} />}
         </div>


    );
}

export default Login ;