import React from "react";
import PropTypes from "prop-types";

function Icon({ name, width = 24, height = 24, className = "", style = {} }) {
  const iconPath = require(`@assets/icons/${name}.png`);

  return (
    <img
      src={iconPath}
      alt={`${name} icon`}
      width={width}
      height={height}
      style={style}
      className={className}
    />
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Icon;
