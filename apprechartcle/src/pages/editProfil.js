import React, { useState } from "react";
import edit from "./../images/editt.svg";
import  Error from "./../components/errorMessage";
function EditProfil({ user }) {
  const [errorMessage,setErrorMessage] = useState(null);
  const initialName = user.name;
  const initialEmail = user.email;
  const initialPassword = user.password;
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Add separate state variables for each section's editing status
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const handleEditName = () => {
    setErrorMessage(null);
    setIsEditingName(true);
  };

  const handleEditEmail = () => {
    setIsEditingEmail(true);
  };

  const handleEditPassword = () => {
    setErrorMessage(null);
    setIsEditingPassword(true);
  };

  const handleSave = () => {
    if (isEditingName) {
      // Save logic for name
    } else if (isEditingEmail) {
      // Save logic for email
    } else if (isEditingPassword) {
      // Check if old password is correct
      if (oldPassword === initialPassword) {
        // Save logic for the new password
        console.log("Old password is correct. Save the new password:", newPassword);
        // Reset the password fields
        setOldPassword("");
        setNewPassword("");
      } else {
        // Display an error message or take appropriate action
        console.log("Old password is not correct");
        setErrorMessage("mot de passe incorrect");
      }
    }

    // Reset the editing states
    setIsEditingName(false);
    setIsEditingEmail(false);
    setIsEditingPassword(false);
  };


  const handleCancel = () => {
    // Reset the values to their initial state
    setName(initialName);
    setEmail(initialEmail);
    setIsEditingName(false);
    setIsEditingEmail(false);
    setIsEditingPassword(false);
    setErrorMessage(null);
  };

  return (
    <div className="flex w-full justify-center">
      <div className="w-auto h-auto flex-col space-y-4 border-2 rounded-2xl border-solid border-[#15245B] bg-[#FAFAFA] p-10 m-20">
        <div className="flex items-center text-[#15245B] font-poppins text-14px font-medium md:text-26px">
          User Name:
        </div>
        <div className="flex justify-between items-center text-[#15245B] rounded-full p-6 bg-[#DDF7FF] font-poppins text-16px border-2 border-solid border-[#15245B] font-medium md:text-26px">
          {isEditingName ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="outline-none border-none bg-transparent w-full text-[#15245B] font-poppins text-14px font-medium"
            />
          ) : (
            <>
              {name}
              <span onClick={handleEditName} className="cursor-pointer ml-2">
                <img src={edit} alt="Edit Icon" className="w-5 h-5" />
              </span>
            </>
          )}
        </div>
        <div className="flex items-center text-[#15245B] font-poppins text-14px font-medium md:text-26px">
          Email:
        </div>
        <div className="flex justify-between items-center text-[#15245B] rounded-full p-6 bg-[#DDF7FF] font-poppins text-14px border-2 border-solid border-[#15245B] font-medium md:text-26px">
          {isEditingEmail ? (
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none border-none bg-transparent w-full text-[#15245B] font-poppins text-14px font-medium"
            />
          ) : (
            <>
              {email}
              <span onClick={handleEditEmail} className="cursor-pointer ml-2">
                <img src={edit} alt="Edit Icon" className="w-5 h-5" />
              </span>
            </>
          )}
        </div>
        <div className="flex items-center text-[#15245B] font-poppins text-14px font-medium md:text-26px">
          Password:
        </div>
        
          {isEditingPassword ? (
            <>
               <div className="flex flex-col ">
               <input
                type="password"
                placeholder="Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="text-[#15245B] rounded-full m-2 p-6 bg-[#DDF7FF] font-poppins text-14px border-2 border-solid border-[#15245B] font-medium md:text-26px"
              />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="text-[#15245B] rounded-full m-2 p-6 bg-[#DDF7FF] font-poppins text-14px border-2 border-solid border-[#15245B] font-medium md:text-26px"
              />
               </div>
            </>
          ) : (
            <>
              <div className="flex justify-between items-center text-[#15245B] rounded-full p-6 bg-[#DDF7FF] font-poppins text-16px border-2 border-solid border-[#15245B] font-medium md:text-26px">
              {user.password && "********"} 
              <span onClick={handleEditPassword} className="cursor-pointer ml-2">
                <img src={edit} alt="Edit Icon" className="w-5 h-5" />
              </span>
              </div>
            </>
          )}
        
        <div className="flex items-center space-x-4 p-2 md:p-4">
          {isEditingName || isEditingEmail || isEditingPassword ? (
            <>
              <button onClick={handleSave} className="bg-[#15245B] text-white px-4 py-2 text-16px rounded-full md:text-20px lg:text-24px">
                Save
              </button>
              <button onClick={handleCancel} className="bg-[#F5F5F5] border-2 border-solid border-[#15245B] text-[#15245B] text-16px px-4 py-2 rounded-full md:text-20px lg:text-24px">
                Cancel
              </button>
            </>
          ) : (
            <>
              <button onClick={handleEditName} className="bg-[#15245B] text-white px-4 py-2 text-16px rounded-full md:text-20px lg:text-24px">
                Edit
              </button>
            </>
          )}
        </div>
        {errorMessage && <Error message={errorMessage} />}
      </div>
    </div>
  );
}

export default EditProfil;
