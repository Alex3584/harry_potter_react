import React from "react";
import "./TitleSection.scss";

const TitleSection = ({ level = 1, title, align = "center", width }) => {
  const Heading = `h${level}`;
  const style = { textAlign: align, width };

  return (
    <Heading className={`title-section title-section--h${level}`} style={style}>
      {title}
    </Heading>
  );
};

export default TitleSection;
