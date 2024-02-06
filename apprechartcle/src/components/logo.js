import React,{useState} from 'react'
import Logo from "./../images/logo.png" ;

function Clogo() {

    return( 
    <div className=" text-21px md:text-26px lg:text-30px font-signature  font-semibold   flex-wrap w-full  h-full   justify-center   items-center">
    <img src={Logo} alt="logo" className=' inline-block sm:items-center w-10 sm:w-30   ' />
    <span className=' text-[#15245B] '>Ci</span>
    <span className=' text-[#FBBC05] '>Topia</span>
</div>
) ; 
} 
export default Clogo ;