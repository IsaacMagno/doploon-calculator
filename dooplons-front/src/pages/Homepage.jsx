import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Homepage = ({ translateData, lang }) => {
  const { buttons, placeholders, results, scrolls, sizes } = translateData;
  const { how_to_use } = translateData;

  return (
    <div
      className='bg-hero flex flex-col justify-between bg-no-repeat bg-center xl:bg-left min-h-screen 2xl:bg-cover'
      id='root'
    >
      {/* Cabeçalho */}
      <Header lang={lang} />
      {/* Calculador */}
      <Content
        buttons={buttons}
        placeholders={placeholders}
        results={results}
        scrolls={scrolls}
        sizes={sizes}
        lang={lang}
      />
      {/* Info */}
      <Footer how_to_use={how_to_use} />
    </div>
  );
};

export default Homepage;
