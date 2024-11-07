import React, { useState, useRef, useEffect } from "react";
import TitleSection from "@components/TitleSection/TitleSection";
import IconText from "@components/common/IconText/IconText";
import "./CharacterCard.scss";

const CharacterCard = ({ character }) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  const handleTogglePopup = () => {
    setShowPopup((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  return (
    <div
      className="character-card"
      style={{ pointerEvents: showPopup ? "none" : "auto" }}
    >
      <img
        src={character.image}
        alt={character.name}
        className="character-card__character-image"
      />
      <div className="character-card__character-content">
        <TitleSection
          level={4}
          title={character.name}
          align="left"
          className="character-card__character-name"
        />
        <p className="character-card__character-alias">
          {character.alternate_names.length > 0
            ? character.alternate_names[0]
            : ""}
        </p>
        <p className="character-card__character-house">{character.house}</p>
        <p className="character-card__character-birth">
          {character.dateOfBirth}
        </p>
        <IconText
          rightIcon="arrow"
          onClick={handleTogglePopup}
          className="character-card__more-info-button"
        >
          Більше інформації
        </IconText>
      </div>
      {showPopup && (
        <div className="character-info-popup" ref={popupRef}>
          <p>
            <strong>Name:</strong> {character.name}
          </p>
          <p>
            <strong>Alternate names:</strong>{" "}
            {character.alternate_names.join(", ")}
          </p>
          <p>
            <strong>Species:</strong> {character.species}
          </p>
          <p>
            <strong>Gender:</strong> {character.gender}
          </p>
          <p>
            <strong>House:</strong> {character.house}
          </p>
          <p>
            <strong>Date of birth:</strong> {character.dateOfBirth}
          </p>
          <p>
            <strong>Year of birth:</strong> {character.yearOfBirth}
          </p>
          <p>
            <strong>Wizard:</strong> {character.wizard ? "True" : "False"}
          </p>
          <p>
            <strong>Ancestry:</strong> {character.ancestry}
          </p>
          <p>
            <strong>Eye colour:</strong> {character.eyeColour}
          </p>
          <p>
            <strong>Hair colour:</strong> {character.hairColour}
          </p>
          <p>
            <strong>Wand:</strong> Wood: {character.wand.wood}, core:{" "}
            {character.wand.core}, length: {character.wand.length}
          </p>
          <p>
            <strong>Patronus:</strong> {character.patronus}
          </p>
          <p>
            <strong>Hogwarts student:</strong>{" "}
            {character.hogwartsStudent ? "True" : "False"}
          </p>
          <p>
            <strong>Hogwarts staff:</strong>{" "}
            {character.hogwartsStaff ? "True" : "False"}
          </p>
          <p>
            <strong>Actor:</strong> {character.actor}
          </p>
          <p>
            <strong>Alive:</strong> {character.alive ? "True" : "False"}
          </p>
        </div>
      )}
    </div>
  );
};

export default CharacterCard;
