import React from "react";

const Footer = ({ how_to_use }) => {
  return (
    <div className='flex mx-5 my-2 '>
      <p className='font-bold text-xs opacity-70 md:text-sm lg:text-base 2xl:text-2xl'>
        {how_to_use[0]}
        <br />
        <br />
        {how_to_use[1]}
        <br />
        {how_to_use[2]}
        <br />
        {how_to_use[3]}
      </p>
    </div>
  );
};

export default Footer;
