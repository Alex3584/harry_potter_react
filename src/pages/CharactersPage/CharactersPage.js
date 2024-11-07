import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TitleSection from "@components/TitleSection/TitleSection";
import CharacterCard from "@components/CharacterCard/CharacterCard";
import NavigationPanel from "@components/NavigationPanel/NavigationPanel";
import "./CharactersPage.scss";

const CharactersPage = () => {
  const { type } = useParams();
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedHouse, setSelectedHouse] = useState("Gryffindor"); // Устанавливаем Гриффиндор как дом по умолчанию

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);

      let apiURL;
      if (type === "students") {
        apiURL = "https://hp-api.onrender.com/api/characters/students";
      } else if (type === "staff") {
        apiURL = "https://hp-api.onrender.com/api/characters/staff";
      } else {
        apiURL = "https://hp-api.onrender.com/api/characters";
      }

      try {
        const response = await axios.get(apiURL);
        setCharacters(response.data);

        if (type === "house") {
          const initialFilteredCharacters = response.data.filter(
            (character) => character.house === "Gryffindor"
          );
          setFilteredCharacters(initialFilteredCharacters);
        } else {
          setFilteredCharacters(response.data);
        }
      } catch (err) {
        setError("Не вдалося завантажити дані. Будь ласка, спробуйте пізніше.");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [type]);

  const handleFilterByHouse = (house) => {
    setSelectedHouse(house);
    const filtered = characters.filter(
      (character) => character.house === house
    );
    setFilteredCharacters(filtered);
  };

  if (loading) return <div>Завантаження...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <section>
      <div className="container">
        <div className="characters-page">
          <TitleSection
            level={1}
            title={
              type === "students"
                ? "Студенти Гогвортсу"
                : type === "staff"
                ? "Співробітники Гогвортсу"
                : "Персонажі в певному будинку"
            }
            className="characters-title"
          />
          {type === "house" && (
            <NavigationPanel
              onFilter={handleFilterByHouse}
              activeHouse={selectedHouse}
            />
          )}
          <div className="characters-grid">
            {filteredCharacters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharactersPage;
