import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Homepage from "./pages/Homepage";

const App = () => {
  let data;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname == "/") return navigate("/pt");
  }, []);

  if (pathname.includes("pt")) {
    data = require("./translate/PT_BR.json");
  }

  if (pathname.includes("fr")) {
    data = require("./translate/FR.json");
  }

  if (pathname.includes("es")) {
    data = require("./translate/ES.json");
  }

  if (pathname.includes("en")) {
    data = require("./translate/EN.json");
  }

  useEffect(() => {
    console.log("©2023 Isaac's Magno. All rights reserved.");
  }, []);

  return (
    <Routes>
      <Route
        path='/pt'
        element={<Homepage translateData={data} lang={pathname} />}
      />
      <Route
        path='/fr'
        element={<Homepage translateData={data} lang={pathname} />}
      />
      <Route
        path='/en'
        element={<Homepage translateData={data} lang={pathname} />}
      />
      <Route
        path='/es'
        element={<Homepage translateData={data} lang={pathname} />}
      />
    </Routes>
  );
};

export default App;
