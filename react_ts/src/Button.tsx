import { CSSProperties } from "react";
import { colors } from "./style";

// type mainColor = "red" | "purple" | "blue";

type buttonstyle = {
  text: string;
  backgroundColor: 1 | 2 | 3;
};

const Button = ({ text, backgroundColor }: buttonstyle) => {
  const buttonstyle: CSSProperties = {
    border: "1px solid #efefef",
    borderRadius: "10px",
    padding: "10px",
    backgroundColor: colors.red[backgroundColor],
  };
  return <button style={buttonstyle}>{text}</button>;
};

export default Button;
