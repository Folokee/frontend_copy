import React from "react" ; 
import SearchBar from "./../components/searchbar" ;
import Filtres  from "./../components/Filtre";
import Results from "../components/Results";
import { useParams } from 'react-router-dom';
function SearchResult (){
   const param = useParams()
   const query = param.query
   const domain = param.domain
    return (
        
      <div className="  w-ful h-full bg-[#FFFFFF]  top-0 left-0 right-0 ">
         <div className="flex justify-center mt-10  ">
            <SearchBar/>
         </div>
         <h4 className="text-[#15245B] font-poppins font-bold text-20px tracking-wide uppercase m-4 md:text-30px lg:text-40px ">
        Resultats
         </h4>
         <div className="flex flex-col md:flex-row justify-center">
             <div className=" w-auto md:w-1/3 lg:w-1/4 p-4 ">
                <Filtres />
             </div>
             <div className=" w-full md:w-2/3 lg:w-3/4 p-4">
                <Results query={query}  domain={domain}/>
             </div>
         </div>
      </div>
     
    );
  }
  
  export default SearchResult;