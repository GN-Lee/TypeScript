type FontWeight = 700;
type Color = "purple" | "grey" | "skyblue" | "red" | "black";
type FontColor = Extract<Color, "grey" | "black">;
type PlateNumber =
  | `${number}로${number}`
  | `${number}가${number}`
  | `${number}버${number}`;

export type Status = "미완료" | "대기" | "완료";
export type CarName = "쏘렌토" | "카니발" | "니로 EV";
export type Value = {
  backgroundColor: Color;
  Color: FontColor;
  fontWeight: FontWeight;
  CarId: CarName;
  Plate: PlateNumber;
};
