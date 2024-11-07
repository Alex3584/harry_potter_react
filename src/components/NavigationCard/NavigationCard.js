import React from "react";
import "./NavigationCard.scss";
import Button from "@components/common/Button/Button";

const NavigationCard = ({ imageSrc, title, onClick }) => {
  return (
    <div className="card">
      <div className="card__image-container">
        <img src={imageSrc} alt={title} className="card__image" />
      </div>
      <Button onClick={onClick} className="button--navigation-card">
        {title}
      </Button>
    </div>
  );
};

export default NavigationCard;
