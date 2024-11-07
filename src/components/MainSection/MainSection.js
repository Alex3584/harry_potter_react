import React, { useState } from "react";
import MainSectionTop from "./MainSectionTop/MainSectionTop";
import MainSectionBottom from "./MainSectionBottom/MainSectionBottom";
import "./MainSection.scss";

const MainSection = () => {
  const [showBottomSection, setShowBottomSection] = useState(false);

  const handleButtonClick = () => {
    setShowBottomSection((prev) => !prev); // Переключение состояния
  };

  return (
    <section className="main-section">
      <div className="main-section__background" />
      <div className="container">
        <MainSectionTop onShowBottomSection={handleButtonClick} />
        {showBottomSection && <MainSectionBottom />}
      </div>
    </section>
  );
};

export default MainSection;
