import React, { useState, useEffect } from "react";
import { doploon_optimization } from "../services/axiosRequests";
import { SpinnerInfinity } from "spinners-react";

const FormDoploon = ({
  handleSubmit,
  scrolls,
  placeholders,
  sizes,
  buttons,
  spinner,
}) => {
  const [doploons, setDoploons] = useState();
  const [small, setSmall] = useState();
  const [medium, setMedium] = useState();
  const [great, setGreat] = useState();
  const [powerful, setPowerful] = useState();
  const [selectedScroll, setSelectedScroll] = useState();
  const [turnOff, setTurnOff] = useState(true);
  const [requestSend, setRequestSend] = useState(false);

  useEffect(() => {
    if (
      small >= 0 &&
      medium >= 0 &&
      great >= 0 &&
      powerful >= 0 &&
      selectedScroll
    )
      setTurnOff(false);
  }, [small, medium, great, powerful, selectedScroll]);

  const handleCalculate = async (e) => {
    e.preventDefault();
    setRequestSend(true);

    const result = await doploon_optimization({
      doploons: doploons,
      small: small,
      medium: medium,
      great: great,
      powerful: powerful,
    });

    setDoploons("");
    setSmall("");
    setMedium("");
    setGreat("");
    setPowerful("");
    setSelectedScroll("");

    handleSubmit(result, selectedScroll);
    setRequestSend(false);
  };

  return (
    <>
      {!requestSend ? (
        <form className="flex flex-col gap-1">
          <div className="flex justify-between items-center font-bold">
            <span className="font-extrabold text-xl opacity-60 2xl:text-3xl">
              Doploons:
            </span>
            <input
              type="number"
              className="text-gray-700 font-bold  border-gray-300 rounded-md py-2 text-center sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 bg-transparent 2xl:text-2xl"
              placeholder={placeholders[0]}
              value={doploons}
              onChange={({ target: { value } }) => setDoploons(value)}
            />
          </div>
          <div className="flex justify-between items-center font-bold">
            <span className="font-extrabold text-xl opacity-60 2xl:text-3xl">
              {sizes[0]}
            </span>
            <input
              type="number"
              className="text-gray-700 font-bold  border-gray-300 rounded-md py-2 text-center sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 bg-transparent 2xl:text-2xl"
              placeholder={placeholders[1]}
              value={small}
              onChange={({ target: { value } }) => setSmall(value)}
            />
          </div>
          <div className="flex justify-between items-center font-bold">
            <span className="font-extrabold text-xl opacity-60 2xl:text-3xl">
              {sizes[1]}
            </span>
            <input
              type="number"
              className="text-gray-700 font-bold  border-gray-300 rounded-md py-2 text-center sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 bg-transparent 2xl:text-2xl"
              placeholder={placeholders[1]}
              value={medium}
              onChange={({ target: { value } }) => setMedium(value)}
            />
          </div>
          <div className="flex justify-between items-center font-bold">
            <span className="font-extrabold text-xl opacity-60 2xl:text-3xl">
              {sizes[2]}
            </span>
            <input
              type="number"
              className="text-gray-700 font-bold  border-gray-300 rounded-md py-2 text-center sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 bg-transparent 2xl:text-2xl"
              placeholder={placeholders[1]}
              value={great}
              onChange={({ target: { value } }) => setGreat(value)}
            />
          </div>
          <div className="flex justify-between items-center font-bold">
            <span className="font-extrabold text-xl opacity-60 2xl:text-3xl">
              {sizes[3]}
            </span>
            <input
              type="number"
              className="text-gray-700 font-bold  border-gray-300 rounded-md py-2 text-center sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 bg-transparent 2xl:text-2xl"
              placeholder={placeholders[1]}
              value={powerful}
              onChange={({ target: { value } }) => setPowerful(value)}
            />
          </div>
          <select
            className="font-extrabold text-xl bg-transparent opacity-60 2xl:text-3xl my-2"
            value={selectedScroll}
            onChange={({ target: { value } }) => setSelectedScroll(value)}
            defaultValue="Tipo do pergaminho"
          >
            <option
              disabled
              className="text-base font-black"
              value="Tipo do pergaminho"
            >
              {scrolls[0]}
            </option>
            <option className="text-base" value="str">
              {scrolls[1]}
            </option>
            <option className="text-base" value="int">
              {scrolls[2]}
            </option>
            <option className="text-base" value="wis">
              {scrolls[3]}
            </option>
            <option className="text-base" value="agi">
              {scrolls[4]}
            </option>
            <option className="text-base" value="cha">
              {scrolls[5]}
            </option>
            <option className="text-base" value="vit">
              {scrolls[6]}
            </option>
          </select>
          <button
            className={`bg-green-700 rounded ${
              !turnOff ? "hover:bg-green-600" : null
            } p-2 font-extrabold text-white mt-4`}
            onClick={(e) => handleCalculate(e)}
            disabled={turnOff}
          >
            {buttons}
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center p-10 md:p-16 xl:p-20 2xl:p-32">
          <SpinnerInfinity
            enabled={true}
            color={"#322c22"}
            secondaryColor={"#B8C944"}
            className="mt-4"
            size={80}
          />
          <p
            className="mt-6 text-xl font-extrabold"
            style={{ color: "#322c22" }}
          >
            {spinner[0]}
          </p>
        </div>
      )}
    </>
  );
};

export default FormDoploon;
