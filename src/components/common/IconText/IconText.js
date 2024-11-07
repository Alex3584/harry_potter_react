import React from "react";
import Icon from "@components/common/Icon/Icon";
import "./IconText.scss";

const IconText = ({
  href,
  leftIcon,
  rightIcon,
  iconWidth,
  iconHeight,
  iconStyle = {},
  fontStyle = {},
  children,
  className = "",
  as = "a",
  ...props
}) => {
  const Component = href ? "a" : as;

  return (
    <Component href={href} className={`icon-text ${className}`} {...props}>
      {leftIcon && (
        <Icon
          name={leftIcon}
          width={Number(iconWidth) || 24}
          height={Number(iconHeight) || 24}
          style={iconStyle}
          className="icon-text__icon--left"
        />
      )}
      <span style={fontStyle}>{children}</span>
      {rightIcon && (
        <Icon
          name={rightIcon}
          width={iconWidth}
          height={iconHeight}
          style={iconStyle}
          className="icon-text__icon--right"
        />
      )}
    </Component>
  );
};

export default IconText;
