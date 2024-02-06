import Uploadbar from './../components/uploadbar'
import Infocomp from '../components/infocomp';

function Homeadmin () {



    return(
        <div className='bg-[#c3eefb] min-h-screen flex flex-col font-signature'>
             <div className='flex-1'>
              <div className=' flex items-center justify-center p-8 lg:p-0 '>
             <Uploadbar></Uploadbar>
             </div>
             <div className='mr-10 ml-10 pr-10 pl-10  '>
             <div className='  bg-[#15245B] mt-10 h-full w-full  font-medium rounded-[10px] mb-10 '>
                
                <Infocomp/>
             </div>
             </div>
            </div>
             <div className=' bg-[#15245B] text-[#FAFAFA] font-normal flex justify-center items-center text-14px   sm:text-19px'>
                <h1>Copyright © 2023 SciTopia  Tous droits réservés.</h1>
             </div>
        </div>
    )
}
export default Homeadmin ; 