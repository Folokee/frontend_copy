import Infosidebar from "../components/infosidbar";
import Accountsidebar2 from "../components/accountsidebar2";


function Userinfo ({ mdrtr }) {

  




    return(
        <div className='bg-[#c3eefb] min-h-screen font-signature'>
              <div className="flex flex-col sm:grid sm:grid-cols-2   ">
                  <div className=" w-3/4 p-4 ">
                  <Accountsidebar2/>
                 </div>
                 <div className="  p-10  sm:m-0 sm:mr-10 sm:p-0">
                 <Infosidebar mdrtr={mdrtr }/>
                 </div>
                 
              </div>
             
       
              <div className=' p-2 bg-[#15245B] text-[#FAFAFA] font-normal flex justify-center items-center text-14px   sm:text-19px'>
                <h1>Copyright © 2023 SciTopia  Tous droits réservés.</h1>
             </div>
        </div>
    )
}
export default Userinfo ; 