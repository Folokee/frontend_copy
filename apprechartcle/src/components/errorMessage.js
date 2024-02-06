import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className='bg-[#FAFAFA] text-[#F57581] flex justify-center text-16px  md:text-20px lg:text-24px'>
      {message}
    </div>
  );
};

export default ErrorMessage;
