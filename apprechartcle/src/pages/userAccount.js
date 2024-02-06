import React, { useState } from "react";
import fav from './../images/favv.svg';
import setting from './../images/setting.svg';
import edit from './../images/edit.svg';
import deconnecte from './../images/deconnecter.svg';
import Favoris from "../components/Favorites";
import EditProfil from "./editProfil";
import ProfilSettings from "./profileSettings";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';

function UserAccount({user}) {
  const history = new useNavigate() ; 
  const [activeTab, setActiveTab] = useState("favorites");

  const renderContent = () => {
    switch (activeTab) {
      case "editProfile":
        return <EditProfil user={user} />;
      case "favorites":
        return <Favoris />;
      case "profileSettings":
        return <ProfilSettings user={user}/>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full bg-[#FFFFFF] top-0 left-0 right-0">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="w-auto md:w-1/3 lg:w-1/4 p-4">
          <div className="h-auto w-auto  rounded-xl bg-[#15245B] p-10 m-6 md:rounded-3xl ">
            <div
              className="flex items-center space-x-4 cursor-pointer"
              onClick={() => setActiveTab("favorites")}
            >
              <img src={fav} alt="" className="h-5 w-5" />
              <p className="text-[#FAFAFA] text-8px md:text-16px lg:text-20px"> favorites </p>
            </div>
            <div
              className="flex items-center space-x-4 cursor-pointer"
              onClick={() => setActiveTab("profileSettings")}
            >
              <img src={setting} alt="" className="h-5 w-5" />
              <p className="text-[#FAFAFA] text-8px md:text-16px lg:text-20px">Parametres de Profile </p>
            </div>
            <div
              className="flex items-center space-x-4 cursor-pointer"
              onClick={() => setActiveTab("editProfile")}
            >
              <img src={edit} alt="" className="h-5 w-5" />
              <p className="text-[#FAFAFA] text-8px md:text-16px lg:text-20px">Modifier profile</p>
            </div>
            <div className="flex items-center space-x-4 md:mt-60 cursor-pointer" onClick={() => setActiveTab("logout")}>
              <img src={deconnecte} alt="" className="h-5 w-5" />
                 <button type="button"  onClick={ () => {
                    Cookies.remove('USER');
                    history("/") ; 
                  }}  >  <p className="text-[#FAFAFA] text-8px md:text-16px lg:text-20px "> Deconnecter </p> </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 lg:w-3/4 p-4">{renderContent()}</div>
      </div>
    </div>
  );
}

export default UserAccount;
