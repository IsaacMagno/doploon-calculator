import React, { useState } from "react";
import Modal from "./LangModal";

const Header = ({ lang }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className='flex justify-between mb-2'>
      <div className='flex flex-col'>
        <h1 className='m-2 mb-0 text-5xl min-[425px]:text-6xl md:text-7xl md:ml-8 font-extrabold opacity-30 2xl:text-9xl'>
          Doploons
        </h1>
        <h1 className='ml-4 text-5xl min-[425px]:text-6xl md:text-7xl md:ml-10 font-extrabold opacity-30  2xl:text-9xl'>
          Calculator
        </h1>
      </div>
      <div className='justify-end '>
        <Modal isVisible={visible} setVisible={setVisible} translate={lang} />
      </div>
    </div>
  );
};

export default Header;
