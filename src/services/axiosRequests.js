import axios from "axios";
// const URL = "http://127.0.0.1:5000";
// const URL = "https://doploon-calculator-service.onrender.com";
const URL = "https://doploon-db.fly.dev";

export const doploon_optimization = async (data) => {
  const dataJson = JSON.stringify(data);

  try {
    return await axios
      .post(`${URL}/optimization`, { dataJson })
      .then((response) => response.data.result);
  } catch (error) {
    console.error(error);
  }
};
