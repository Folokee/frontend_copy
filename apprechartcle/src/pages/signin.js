import React,  { useState } from 'react'
import photo3 from "./../images/image4.png" ;
import Logo from "./../images/logo.png" ;
import Google from './../images/google.png' ; 
import { Link } from 'react-router-dom';
import Clogo from '../components/logo';
import { useNavigate } from 'react-router-dom';
import  Error from "./../components/errorMessage";
function Signin() {
  const [errorMessage,setErrorMessage] = useState(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    // Validation personnalisée
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(e.target.value) ? '' : 'Adresse e-mail non valide');
  };
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

  
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    setPasswordError(passwordRegex.test(e.target.value) ? '' : 'Le mot de passe doit contenir au moins 8 caractères, dont au moins une lettre et un chiffre');
  };
  const history = useNavigate() ;
   async function datafetch() {
      const  response = await  fetch("http://127.0.0.1:8000/api/register", {
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
        "email" : document.getElementsByName("email")[0].value , 
        "password" : document.getElementsByName("password")[0].value ,
      }), 
    });
    const data =  await response.json();
    if (data["Validation"] == "valid")  history("/login") ; 
    else {
      setErrorMessage("compte utilisateur deja existe");
    }
  }
  return (
    <div className="sm:flex  sm:w-full    ">
           
           
           <div className="  sm:flex-wrap sm:w-full   sm:min-h-screen   sm:bg-[#c3eefb] sm:justify-center   sm:items-center  ">
           <div className=" pt-10 pl-10 md:pt-2">
           <Clogo/>
          </div>  
            <div className=" lg:ml-15 hidden sm:block sm:bg-[#c3eefb]">
            <img src={photo3} alt=""  className="w-auto h-auto py-5 my-5 ml-10 " />
            </div>
           </div>
           
            <div className="w-full h-full bg-[#FAFAFA] font-signature font-extrabold  ml-10 mt-10 sm:ml-20 sm:mt-10  ">
                 
                   <h1 className=" text-[#15245B]  text-24px sm:text-30px  md:text-40px xl:text-40px 2xl:text-50px ">Bienvenue sur<br /> <span className="text-[#FBBC05]" >Sci</span> <span className="text-[#F57581] ">Topia !</span> </h1>
                        <div className='font-semibold text-16px  md:text-16px lg:text-18px xl:text-21px 2xl:text-26px   text-[#15245B] mt-4'>
                            <label >Nom Utilisateur</label>
                        </div>
                        <div> <input name='name' placeholder="Entrer votre nom" className=" mt-1  w-4/5 rounded-md text-13px  sm:text-15px md:text-18px xl:text-19px 2xl:text-21px ring-2 ring-[#15245B] p-2 text-[#A59E9E] font-normal   focus:outline-none" type="text" /></div>
                        <div className='mt-1'>
                            <label className='font-semibold  text-16px  md:text-16px lg:text-18px xl:text-21px 2xl:text-26px text-[#15245B]  ' >E-mail</label>
                        </div>
                        <div> <input name='email' placeholder="Entrer votre E-mail" className=" mt-1 w-4/5 rounded-md text-13px  sm:text-15px md:text-18px xl:text-19px 2xl:text-21px ring-2 ring-[#15245B]  p-2 text-[#A59E9E] font-normal    focus:outline-none" type="text" value={email} onChange={handleEmailChange} /></div>
                        {emailError && (
                               <div className="text-red-500 text-sm font-signature font-medium">{emailError}</div> )}
                        <div className='font-semibold  text-16px  md:text-16px lg:text-18px xl:text-21px 2xl:text-26px text-[#15245B] mt-1 '>
                            <label >Mot de passe</label>
                        </div>
                        <div><input name='password' placeholder="Entrer votre mot de passe" className=" mt-1 w-4/5 rounded-md text-13px  sm:text-15px md:text-18px xl:text-19px 2xl:text-21px   p-2   ring-2 ring-[#15245B] text-[#A59E9E] font-normal  focus:outline-none" type="password"  value={password}  onChange={handlePasswordChange} /></div>
                        {passwordError && (
                                <div className="text-red-500 font-signature text-sm font-medium">{passwordError}</div>
                         )}
                        <div className=" text-[#15245B] py-2 mt-2">
                            <p className=" text-[#A59E9E] font-normal text-14px sm:text-15px md:text-15px xl:text-18px 2xl:text-18px  lg:text-15px  2xl:mr-10  2xl:pr-10 mr-5  "><input className="mr-2   " type="checkbox" />J'accepte les conditions d'utilisation et la politique de confidentialité</p>
                        </div>
                        <button className="w-4/5 my-3  bg-[#15245B] text-[#FAFAFA] font-semibold rounded-full py-3 px-8 text-14px sm:text-15px md:text-19px lg:text-21px  xl:text-21px 2xl:text-24px  " onClick={()  =>datafetch()}>S'inscrire</button>
                      
                      <div className="md:flex md:items-center md:justify-center md:mb-5 font-medium text-13px sm:text-15px md:text-15px lg:text-18px  xl:text-19px 2xl:text-21px  ml-4  mt-3 sm:w-4/5">
                      <p className=' text-[#263238] mr-1 sm:mb-2 md:mb-0 '>Vous avez déjà un compte?</p>
                      <Link to="/login">
                      <button className="text-[#F57581] sm:mb-5 md:mb-0  ">Se connecter</button>
                   </Link>
                      </div>

            </div>
            {errorMessage && <Error message={errorMessage} />}
    </div>
  )
}

export default Signin