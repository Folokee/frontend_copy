import React, { useState } from "react";
import fav from './../images/favv.svg';
import setting from './../images/setting.svg';
import edit from './../images/edit.svg';
import deconnecte from './../images/deconnecter.svg';
import Login from "./../pages/login"
import { Link } from 'react-router-dom';

function Accountsidebar2(){
    return( 
        <div className="h-auto w-auto  rounded-xl  bg-[#15245B] p-10 m-6 md:rounded-3xl ">
        <div className="flex items-center mb-10 space-x-4 ">
            <img src={edit} alt="" className="h-5 w-5"/>
             <p className="text-[#FAFAFA] text-10px md:text-2px lg:text-26px">Modifier profile</p>
        </div>
        <div className="flex items-center mt-10 space-x-4 md:mt-60">
            <img src={deconnecte} alt="" className="h-5 w-5"/>
            <Link to="/login">     <p className="text-[#FAFAFA] text-10px md:text-20px lg:text-26px "> Deconnecter </p>  </Link>
        </div>
    </div>);
}

export default Accountsidebar2;