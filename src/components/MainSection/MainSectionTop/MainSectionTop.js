import React from "react";
import TitleSection from "@components/TitleSection/TitleSection";
import Button from "@components/common/Button/Button";
import "./MainSectionTop.scss";

const MainSectionTop = ({ onShowBottomSection }) => {
  return (
    <div className="main-container">
      <TitleSection
        level={1}
        title="Ласкаво просимо у світ Гаррі Поттера"
        width="890px"
      />
      <Button type="button" onClick={onShowBottomSection}>
        Показати всіх персонажів
      </Button>
    </div>
  );
};

export default MainSectionTop;
