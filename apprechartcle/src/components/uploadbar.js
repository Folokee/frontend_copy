import React from 'react';
import upload from "./../images/upload.png" ;
const Uploadbar = () => {
  return (
    <div className="relative flex items-center w-full md:w-3/4 lg:w-1/2 ">
      <input
        type="text"
        placeholder="Uploader des articles en entrant un uRL"
        className="rounded-lg  bg-[#FAFAFA]  p-4 w-full"
      />
      <div className="absolute inset-y-0 right-0 pl-6 pr-3 flex items-center ">
            <img src={upload} alt="upload" className='w-6 h-6' />
      </div>
    </div>
 
  );
};

export default Uploadbar;