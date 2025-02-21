import * as React from "react";
import { Property } from "csstype";

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
        justifyContent: "flex-start",
        position: "relative",
        width: "auto",
        height: "60px",
        padding: "0px 8px",
      }}
    >
      <p
        style={{
          color: "#2C3E50",
          padding: "4px 8px",
          fontSize: "28px",
          fontWeight: "800",
          position: "relative",
          whiteSpace: "nowrap",
          letterSpacing: "1.5px",
          margin: 0,
          fontFamily: "'Montserrat', sans-serif",
          background: "linear-gradient(135deg, #2C3E50 0%, #3498DB 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "1px 1px 1px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default NameLogo;
