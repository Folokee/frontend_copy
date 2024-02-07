import React, { useState ,useEffect } from "react";
import edit from "./../images/editt.svg";
import  Error from "./../components/errorMessage";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
function EditProfil() {
  const navigate = useNavigate()
  const pseudo = useParams().pseudo
  const admin = Cookies.get("USER")
  let [user, setUser] = useState([]);
  useEffect(() => {
    getUser();
  }, []);
    let url
    let data
    if (admin == "administrateur"){
      url = `/api/mods/${pseudo}`
    }else{
      url = `/api/user/${pseudo}`
    }
    let getUser = async () => {
      if (pseudo != "new"){
      let response = await fetch(url,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
     });
     data = await response.json();
     setUser(data)
    }
    }
    if (pseudo == "new"){
         data = {
          "name" :"",
          "email":"",
          "password":""
        }
        let getUser = async ()  => {
        setUser(data)
        } 
    }
    
    console.log(user)
  
  
  const [errorMessage,setErrorMessage] = useState(null);
  let initialName = user.name;
  let initialEmail = user.email;
  const initialPassword = user.password;
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    setName(initialName);
  }, [initialName]);

  useEffect(() => {
    setEmail(initialEmail);
  }, [initialEmail]);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Add separate state variables for each section's editing status

  let handleSave = () => {
    if (oldPassword == initialPassword && pseudo != "new"){
      let id = user.id
      let mod = {
        "id":id,
        "name":name,
        "password":newPassword,
        "email":email
      }
      let updateMod = async () => {
          let response = await fetch(`/api/mods/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mod),
        });
      };
      updateMod();
      navigate("/")

    }else{
      if (pseudo == "new"){
        let mod = {
          "name":name,
          "password":newPassword,
          "email":email
        }
        let createMod = async () => {
          let response = await fetch(`/api/mods/new`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(mod),
          });
        };
        createMod();
        navigate("/")
      }else{
      setErrorMessage("Old password doesnt match")
      }
    }
    }
    // Reset the editing states
  const handleCancel = () => {
    // Reset the values to their initial state
    setName(initialName);
    setEmail(initialEmail);
    setErrorMessage(null);
  };

  return (
    <div className="flex w-full justify-center">
      <div className="w-auto h-auto flex-col space-y-4 border-2 rounded-2xl border-solid border-[#15245B] bg-[#FAFAFA] p-10 m-20">
        <div className="flex items-center text-[#15245B] font-poppins text-14px font-medium md:text-26px">
          Username:
        </div>
        <div className="flex justify-between items-center text-[#15245B] rounded-full p-6 bg-[#DDF7FF] font-poppins text-16px border-2 border-solid border-[#15245B] font-medium md:text-26px">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="outline-none border-none bg-transparent w-full text-[#15245B] font-poppins text-base font-medium"
            />
        </div>
        <div className="flex items-center text-[#15245B] font-poppins text-14px font-medium md:text-26px">
          Email:
        </div>
        <div className="flex justify-between items-center text-[#15245B] rounded-full p-6 bg-[#DDF7FF] font-poppins text-14px border-2 border-solid border-[#15245B] font-medium md:text-26px">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none border-none bg-transparent w-full text-[#15245B] font-poppins text-base font-medium"
            />
        </div>
        <div className="flex items-center text-[#15245B] font-poppins text-14px font-medium md:text-26px">
          Password:
        </div>
               <div className="flex flex-col ">
               <input
                type="password"
                placeholder="Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="text-[#15245B] rounded-full m-2 p-6 bg-[#DDF7FF] font-poppins text-base border-2 border-solid border-[#15245B] font-medium md:text-26px"
              />
              { pseudo != "new" ? (
                <>
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="text-[#15245B] rounded-full m-2 p-6 bg-[#DDF7FF] font-poppins text-base border-2 border-solid border-[#15245B] font-medium md:text-26px"
              /></>):<></>
}
               </div>
        
        <div className="flex items-center space-x-4 p-2 md:p-4">
              <button onClick={handleSave} className="bg-[#15245B] text-white px-4 py-2 text-16px rounded-full md:text-20px lg:text-24px">
                Save
              </button>
              <button onClick={handleCancel} className="bg-[#F5F5F5] border-2 border-solid border-[#15245B] text-[#15245B] text-16px px-4 py-2 rounded-full md:text-20px lg:text-24px">
                Cancel
              </button>
        </div>
        {errorMessage && <Error message={errorMessage} />}
      </div>
    </div>
  );
}

export default EditProfil;
