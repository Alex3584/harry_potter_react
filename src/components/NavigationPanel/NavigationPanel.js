import React from "react";
import IconText from "@components/common/IconText/IconText";
import "./NavigationPanel.scss";

const houses = [
  {
    name: "Gryffindor",
    icon: "Gryffindor",
  },
  {
    name: "Slytherin",
    icon: "Slytherin",
  },
  {
    name: "Ravenclaw",
    icon: "Ravenclaw",
  },
  {
    name: "Hufflepuff",
    icon: "Hufflepuff",
  },
];

const NavigationPanel = ({ onFilter, activeHouse }) => {
  return (
    <nav className="menu">
      {houses.map((house) => (
        <div
          key={house.name}
          className={`menu-item ${activeHouse === house.name ? "active" : ""}`}
          onClick={() => onFilter(house.name)}
          style={{
            backgroundColor:
              activeHouse === house.name ? house.color : "transparent",
          }}
        >
          <IconText
            leftIcon={house.icon}
            iconWidth={35}
            iconHeight={38}
            fontStyle={{
              color: activeHouse === house.name ? "black" : "white",
            }}
          >
            {house.name}
          </IconText>
        </div>
      ))}
    </nav>
  );
};

export default NavigationPanel;