import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import FormDoploon from "./FormDoploon";

const Content = ({ buttons, placeholders, results, scrolls, sizes }) => {
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState([]);
  const [totalValue, setTotalValue] = useState();
  const [scrollType, setScrollType] = useState();
  const [scrollSize, setScrollSize] = useState([]);
  const [currentScrolls, setCurrentScrolls] = useState([]);
  const [imageWidth, setImageWidth] = useState(100);

  const { pathname } = useLocation();

  useEffect(() => {
    if (resultData) {
      const newArray = resultData.map(({ quantity, total_price }, i) =>
        currentScrolls[i] === "small"
          ? { scroll: sizes[0], quantity, total_price }
          : currentScrolls[i] === "medium"
          ? { scroll: sizes[1], quantity, total_price }
          : currentScrolls[i] === "great"
          ? { scroll: sizes[2], quantity, total_price }
          : currentScrolls[i] === "powerful"
          ? { scroll: sizes[3], quantity, total_price }
          : null
      );

      setResultData(newArray);
    }

    if (window.matchMedia("(min-width: 768px)").matches) {
      setImageWidth(130);
    }

    if (window.matchMedia("(min-width: 2560px)").matches) {
      setImageWidth(200);
    }
  }, [pathname]);

  const handleButtonBack = () => {
    setResultData([]);
    setTotalValue(0);
    setScrollType("");
    setShowResult(false);
  };

  const handleSubmit = async (result, selectedScroll) => {
    const { total } = result[4];
    setScrollType(selectedScroll);
    setTotalValue(total);

    const newCurrentScrolls = [];
    const newResultData = [];

    await result.forEach((data) => {
      if (data.total_price > 0) {
        const scrollSizeKey = Object.keys(data)[0];
        console.log(scrollSizeKey);
        setScrollSize(scrollSizeKey);
        newCurrentScrolls.push(scrollSizeKey);

        let translatedName;
        if (scrollSizeKey === "small") translatedName = sizes[0];
        if (scrollSizeKey === "medium") translatedName = sizes[1];
        if (scrollSizeKey === "great") translatedName = sizes[2];
        if (scrollSizeKey === "powerful") translatedName = sizes[3];

        newResultData.push({
          scroll: translatedName,
          quantity: data[scrollSizeKey],
          total_price: data["total_price"],
        });
      }
    });

    setCurrentScrolls(newCurrentScrolls);
    setResultData(newResultData);
    setShowResult(true);
  };

  return (
    <div className='flex justify-center '>
      <div className='bg-white/80 rounded p-2 shadow md:p-4 2xl:p-6 m-1 md:m-0'>
        {!showResult ? (
          <FormDoploon
            handleSubmit={handleSubmit}
            scrolls={scrolls}
            placeholders={placeholders}
            sizes={sizes}
            buttons={buttons[0]}
          />
        ) : (
          <div className=''>
            <div className='flex flex-wrap justify-center gap-1 2xl:gap-2'>
              {resultData
                ? resultData.map((scroll, i) => (
                    <div className='border-2 p-1 border-gray-700/20 rounded 2xl:p-3'>
                      <img
                        src={require(`../images/scrolls/${scrollType}_${currentScrolls[i]}.png`)}
                        className='text-center'
                        width={imageWidth}
                      />
                      <span className='flex justify-between'>
                        <p className='text-sm md:text-base font-bold 2xl:font-extrabold 2xl:text-2xl'>
                          {results[0]}
                        </p>
                        <p className='text-sm md:text-base font-semibold 2xl:font-bold 2xl:text-2xl'>
                          {scroll.scroll}
                        </p>
                      </span>
                      <span className='flex justify-between'>
                        <p className='text-sm md:text-base font-bold 2xl:font-extrabold 2xl:text-2xl'>
                          {results[1]}
                        </p>
                        <p className='text-sm md:text-base font-semibold 2xl:font-bold 2xl:text-2xl'>
                          {scroll.quantity}
                        </p>
                      </span>
                      <span className='flex justify-between'>
                        <p className='text-sm md:text-base font-bold 2xl:font-extrabold 2xl:text-2xl'>
                          {results[2]}
                        </p>
                        <p className='text-sm md:text-base font-semibold 2xl:font-bold 2xl:text-2xl'>
                          {scroll.total_price.toLocaleString("pt-BR")}K
                        </p>
                      </span>
                    </div>
                  ))
                : null}
            </div>
            <div className='flex justify-center p-3 items-center gap-1'>
              <img src={require("../images/kamas.png")} width={50} />
              <p className='text-base font-extrabold 2xl:text-2xl'>
                {totalValue.toLocaleString("pt-BR")}K
              </p>
            </div>
            <div className='flex justify-center'>
              <button
                className='bg-blue-700 py-2 mx-3.5 rounded white hover:bg-blue-600 font-extrabold grow 2xl:text-2xl'
                onClick={() => handleButtonBack()}
              >
                {buttons[1]}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
