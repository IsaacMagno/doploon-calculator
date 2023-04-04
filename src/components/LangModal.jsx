import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ isVisible, setVisible, translate }) => {
  const [lang, setLang] = useState();
  const [buttonDisplay, setButtonDisplay] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (translate.includes("pt"))
      setButtonDisplay([
        <img src={require("../images/flags/portugal.png")} width={40} />,
        <p className='font-extrabold ml-2'>PT</p>,
      ]);

    if (translate.includes("en"))
      setButtonDisplay([
        <img src={require("../images/flags/usa.png")} width={40} />,
        <p className='font-extrabold ml-2'>EN</p>,
      ]);

    if (translate.includes("es"))
      setButtonDisplay([
        <img src={require("../images/flags/spain.png")} width={40} />,
        <p className='font-extrabold ml-2'>ES</p>,
      ]);

    if (translate.includes("fr"))
      setButtonDisplay([
        <img src={require("../images/flags/france.png")} width={40} />,
        <p className='font-extrabold ml-2'>FR</p>,
      ]);
  }, [lang]);

  const HandleItemClick = (e) => {
    if (e.target && e.target.matches("li")) {
      const content = e.target.textContent;
      setLang(content);
      setVisible(false);
      navigate(`/${content.toLowerCase()}`);
    }
  };

  const HandleSelect = (e) => {
    e.stopPropagation();
    const parentLi = e.target.closest("li");
    if (parentLi) {
      parentLi.click();
    }
  };

  return (
    <div>
      <button
        className={`bg-white p-2 px-3  min-[425px]:px-2 flex justify-between items-center ${
          isVisible ? "" : "rounded-b"
        }`}
        onClick={() => setVisible(!isVisible)}
      >
        {buttonDisplay ? (
          <>
            <span>{buttonDisplay[0]}</span>
            <span>{buttonDisplay[1]}</span>
          </>
        ) : null}
      </button>
      {isVisible ? (
        <div className='absolute bg-white rounded-b px-2 p-1'>
          <ul className='' onClick={HandleItemClick}>
            <li className='flex justify-between items-center p-0.5 mr font-extrabold hover:opacity-70 hover:cursor-pointer'>
              <a href='#' className='mr-2' onClick={HandleSelect}>
                PT
              </a>
              <img
                src={require("../images/flags/portugal.png")}
                width={40}
                onClick={HandleSelect}
              />
            </li>
            <li className='flex justify-between  items-center p-0.5 mr font-extrabold hover:opacity-70 hover:cursor-pointer'>
              <a href='#' className='mr-2' onClick={HandleSelect}>
                EN
              </a>
              <img
                src={require("../images/flags/usa.png")}
                width={40}
                onClick={HandleSelect}
              />
            </li>
            <li className='flex justify-between  items-center p-0.5 mr font-extrabold hover:opacity-70 hover:cursor-pointer'>
              <a href='#' className='mr-2' onClick={HandleSelect}>
                ES
              </a>
              <img
                src={require("../images/flags/spain.png")}
                width={40}
                onClick={HandleSelect}
              />
            </li>
            <li className='flex justify-between  items-center p-0.5 mr font-extrabold hover:opacity-70 hover:cursor-pointer'>
              <a href='#' className='mr-2' onClick={HandleSelect}>
                FR
              </a>
              <img
                src={require("../images/flags/france.png")}
                width={40}
                onClick={HandleSelect}
              />
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
