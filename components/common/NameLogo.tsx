// react
import * as React from "react";
// csstype
import { Property } from "csstype";
// type
interface NameLogoProps {
  bgBorder?: Property.BorderRadius;
  bgColor?: Property.BackgroundColor;
  color?: Property.Color;
  fontSize?: Property.FontSize;
  name?: string;
  onClick?: () => void;
}

const NameLogo: React.FunctionComponent<NameLogoProps> = (props) => {
  const {
    bgBorder = 4,
    bgColor = "wheat",
    color = "inherit",
    fontSize = "inherit",
    name = "Name",
    onClick,
  } = props;
  return (
    <div
      onClick={onClick && onClick}
      style={{
        alignItems: "center",
        cursor: "pointer",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        position: "relative",
        width: "fit-content",
        height: "70px",
        padding: "10px",
      }}
    >
      <div
        style={{
          alignItems: "center",
          backgroundColor: bgColor,
          borderRadius: bgBorder,
          display: "flex",
          height: 30,
          width: 30,
        }}
      />
      <p
        style={{
          color,
          padding: "10px",
          fontSize: "40px",
          fontWeight: "bold",
          position: "relative",
          textTransform: "capitalize",
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default NameLogo;
