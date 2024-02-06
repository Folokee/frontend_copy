
import Pagemdrtr from '../components/pagemdrtr';

function Homemdrtr () {



    return(
        <div className='bg-[#c3eefb] h-full font-signature'>
              <div className='text-[#15245B] text-14px sm:text-19px md:text-26px font-medium ml-5 sm:ml-10  '>
               <h1>Les articles A Moderer</h1>
             </div>
             <div className='mr-10 ml-10 pr-10 pl-10  '>
             <div className='  bg-[#15245B] mt-10 h-full w-full  font-medium rounded-[10px] mb-10 '>
                <div className='mt-7'>
                <Pagemdrtr/>
                </div>
                
                
             </div>
             </div>
             <div className=' bg-[#15245B] text-[#FAFAFA] font-normal flex justify-center items-center text-14px   sm:text-19px'>
                <h1>Copyright © 2023 SciTopia  Tous droits réservés.</h1>
             </div>
        </div>
    )
}
export default Homemdrtr ; 