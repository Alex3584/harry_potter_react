import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationCard from "@components/NavigationCard/NavigationCard";
import "./MainSectionBottom.scss";

const MainSectionBottom = () => {
  const navigate = useNavigate();

  const handleNavigation = (type) => {
    navigate(`/characters/${type}`);
  };

  const cards = [
    {
      type: "students",
      title: "Студенти Гогвортсу",
      imageSrc: require("@assets/images/students.png"),
    },
    {
      type: "staff",
      title: "Співробітники Гогвортсу",
      imageSrc: require("@assets/images/teachers.png"),
    },
    {
      type: "house",
      title: "Персонажі в певному будинку",
      imageSrc: require("@assets/images/persons.png"),
    },
  ];

  return (
    <div className="card-container">
      {cards.map((card) => (
        <NavigationCard
          key={card.type}
          title={card.title}
          imageSrc={card.imageSrc}
          onClick={() => handleNavigation(card.type)}
        />
      ))}
    </div>
  );
};

export default MainSectionBottom;
