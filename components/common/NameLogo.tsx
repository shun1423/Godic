import * as React from "react";
import { Property } from "csstype";

interface NameLogoProps {
  bgBorder?: Property.BorderRadius;
  bgColor?: Property.BackgroundColor;
  color?: Property.Color;
  fontSize?: Property.FontSize;
  name?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const NameLogo: React.FunctionComponent<NameLogoProps> = (props) => {
  const {
    bgBorder = 4,
    bgColor = "wheat",
    color = "inherit",
    fontSize = "inherit",
    name = "Name",
    onClick,
    style,
  } = props;

  return (
    <div
      onClick={onClick}
      style={{
        alignItems: "center",
        cursor: "pointer",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        position: "relative",
        width: "auto",
        height: "60px",
        padding: "0px",
        paddingTop: "5px", // 위쪽 패딩을 추가하여 텍스트를 아래로 이동
        ...style,
      }}
    >
      <p
        style={{
          color: "#000000",
          padding: "4px 0px",
          fontSize: "36px",
          fontWeight: 800,
          position: "relative",
          whiteSpace: "nowrap",
          letterSpacing: "0.5px",
          margin: 0,
          fontFamily: "'Montserrat', sans-serif",
          transition: "all 0.3s ease",
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default NameLogo;
