
import  Error from "./../components/errorMessage";
import React, { useState } from "react";

function Infosidebar({ mdrtr }){
  const [errorMessage,setErrorMessage] = useState(null);
 
  

  
    const initialName = mdrtr.name;
    const initialEmail = mdrtr.email;
    const initialPassword = mdrtr.password;
    const [name, setName] = useState(initialName);
    const [email, setEmail] = useState(initialEmail);
    const [oldPassword, setOldPassword] = useState(initialPassword );
    const [newPassword, setNewPassword] = useState(initialPassword );

    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [isEditingOldPassword, setIsEditingOldPassword] = useState(false);
    const [isEditingPassword, setIsEditingPassword] = useState(false);

    const [isFormDirty, setIsFormDirty] = useState(false);


    const handleEditName = () => {
       
        setIsEditingName(true);
      };
    
      const handleEditEmail = () => {
     
        setIsEditingEmail(true);
      };
    
      const handleEditPassword = () => {
  
        setIsEditingPassword(true);
      };

      const handleEditOldPassword = () => {
      
        setIsEditingOldPassword(true);
      };

      const handleSave = () => {
        if (isEditingName) {
          // Save logic for name
          console.log("Save logic for name:", name);
        }
        if (isEditingEmail) {
          // Save logic for email
          console.log("Save logic for email:", email);
        }
        if (isEditingPassword) {
          // Check if old password is correct
          if (oldPassword === initialPassword) {
            // Save logic for the new password
            console.log("Old password is correct. Save the new password:", newPassword);
          } else {
            setErrorMessage("Mot de passe non valide");
            // Display an error message or take appropriate action
            console.log("Old password is not correct");
          }
        }

         // Reset the editing states
    setIsEditingName(false);
    setIsEditingEmail(false);
    setIsEditingPassword(false);

    // Inform the parent component about the save action
   
      };

      const [emailError, setEmailError] = useState('');
      const handleEmailChange = (e) => {
        setEmail(e.target.value);
    
        // Validation personnalisée
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailError(emailRegex.test(e.target.value) ? '' : 'Adresse e-mail non valide');
      };
      const [passwordError, setPasswordError] = useState('');

      const handlePasswordChange = (e) => {
        setOldPassword(e.target.value)
    
      
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        setPasswordError(passwordRegex.test(e.target.value) ? '' : 'Le mot de passe doit contenir au moins 8 caractères, dont au moins une lettre et un chiffre');
      };
      
      const [passwordNewError, setPasswordNewError] = useState('');

      const handlePasswordNewChange = (e) => {
        setNewPassword(e.target.value)
    
      
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        setPasswordNewError(passwordRegex.test(e.target.value) ? '' : 'Le mot de passe doit contenir au moins 8 caractères, dont au moins une lettre et un chiffre');
      };
     


    return(
      <div className="flex flex-col">
        <div className="bg-[#15245B]  mt-3 sm:mt-10 h-auto w-full  font-signature   rounded-xl md:rounded-3xl mb-5">
            <form >
                <div className="ml-10 pt-10">
                <label className=" text-[#FAFAFA] font-medium text-14px sm:text-19px md:text-21px  ">Nom utilisateur</label>
                </div>
                <div> 
                {isEditingName ? (
            <input
              type="text" 
              className="  w-4/5 text-11px sm:text-19px md:text-21px ring-2 ring-[#15245B] ml-10 mr-10 mt-2 p-2  text-[#000000] font-normal   focus:outline-none rounded-[20px] bg-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <div className=" w-4/5 text-11px sm:text-19px md:text-21px ring-2 ring-[#15245B] ml-10 mr-10 mt-2 p-2  text-[#000000] font-normal   focus:outline-none rounded-[20px] bg-white" onClick={handleEditName}>{name}</div>
          )}
          </div>
                <div className="ml-10 pt-5">
                <label className=" text-[#FAFAFA] font-medium text-14px sm:text-19px md:text-21px  ">Email</label>
                </div>
                <div> 
                {isEditingEmail ? (
            <input
              type="email" 
              className=" w-4/5 text-11px sm:text-19px md:text-21px  ring-2 ring-[#15245B] ml-10 mr-10 mt-2 p-2 text-[#000000] font-normal   focus:outline-none rounded-[20px] bg-white"
              value={email}
              onChange={ handleEmailChange}
              
              
            />
          ) : (
            <div  className=" w-4/5 text-11px sm:text-19px md:text-21px  ring-2 ring-[#15245B] ml-10 mr-10 mt-2 p-2 text-[#000000] font-normal   focus:outline-none rounded-[20px] bg-white" value={email}  type="email"      onClick={handleEditEmail}>{email}</div>
          )}
           {emailError && (
                               <div className="text-red-500 mt-1 ml-10 text-sm font-signature font-medium">{emailError}</div> )}
          </div>
                
                <div className="ml-10 pt-5">
                <label className=" text-[#FAFAFA] font-medium text-14px sm:text-19px md:text-21px  ">Ancien Mot de Passe</label>
                </div>
                <div>
                   
                      {isEditingOldPassword ? (
                      <input
                        type="password"
                        value={oldPassword}
                        className="w-4/5 text-11px sm:text-19px md:text-21px  ring-2 ring-[#15245B] ml-10 mr-10 mt-2 p-2 text-[#000000] font-normal   focus:outline-none rounded-[20px] bg-white"
                         onChange={handlePasswordChange}
                           />
                        ) : (
                         <div className="w-4/5 text-11px sm:text-19px md:text-21px  ring-2 ring-[#15245B] ml-10 mr-10 mt-2 p-2 text-[#000000] font-normal   focus:outline-none rounded-[20px] bg-white" onClick={handleEditOldPassword}>{oldPassword}</div>
                         )}

                         {passwordError && (
                                <div className="text-red-500  ml-10 mt-1 font-signature text-sm font-medium">{passwordError}</div>
                         )}
                  </div>
                
                <div className="ml-10 pt-5 ">
                <label className=" text-[#FAFAFA] font-medium text-14px sm:text-19px md:text-21px  ">Nouveau Mot de Passe</label>
                </div>
                <div className="sm:pb-7">
                        {isEditingPassword ? (
                       <input
                         type="password"
                         value={newPassword}
                         className=" w-4/5 text-11px sm:text-19px md:text-21px  ring-2 ring-[#15245B] mb-3 sm:mb-10 ml-10 mr-10 mt-2 p-2 text-[#000000] font-normal   focus:outline-none rounded-[20px] bg-white"
                        onChange={ handlePasswordNewChange}
                        />
                        ) : (
                         <div className="w-4/5 text-11px sm:text-19px md:text-21px  ring-2 ring-[#15245B] mb-1 sm:mb-10  ml-10 mr-10 mt-2 p-2 text-[#000000] font-normal   focus:outline-none rounded-[20px] bg-white"  value={newPassword}  onClick={handleEditPassword} type="password">{newPassword}</div>
                        )}
                     
                     {passwordNewError && (
                                <div className="text-red-500  ml-10 mt-1 font-signature text-sm font-medium">{passwordNewError}</div>
                         )}
                </div>
                  
            </form>
            {errorMessage && <Error message={errorMessage} />}
        </div>
        <div disabled={!isFormDirty} onClick={handleSave} className='flex items-center sm:justify-end  justify-center'>
        <button className=' mt-3 mb-5 mr-10 px-10 py-2 bg-[#15245B]  text-[#c3eefb] text-11px sm:text-14px md:text-19px   rounded-full block '>Save</button>
        </div>
        </div>
    )
}

export default Infosidebar ; 