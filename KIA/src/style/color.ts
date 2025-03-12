// ㅈㄴ 쪼개기[= 단일 원칙 | 원자성]

type PrimaryTone = "Black" | "White";
type PrimaryColors = PrimaryTone;

type SecondaryTone = "Red" | "Green";
type SecondaryIntensity = "Dark" | "Light" | "Variant";
type SecondaryColors = `${SecondaryTone}${SecondaryIntensity}`;

type CoolTone = "CoolGrey";
type CoolIntensity = "5" | "10" | "20";
type CoolColors = `${CoolTone}${CoolIntensity}`;

type HexColor = `#${string}`;
type Color<T extends PrimaryColors | SecondaryColors | CoolColors> = {
  [key in T]: HexColor;
};
export const PrimaryColor: Color<PrimaryColors> = {
  Black: "#05141f",
  White: "#ffffff",
};

export const SecondaryColor: Color<SecondaryColors> = {
  GreenDark: "#4C5B35",
  GreenVariant: "#589000",
  GreenLight: "#DAEDBD",

  RedDark: "#7D4C55",
  RedLight: "#FEE9EC",
  RedVariant: "#EA0029",
};

export const CoolColor: Color<CoolColors> = {
  CoolGrey5: "#F2F4F6",
  CoolGrey10: "#E6E7E9",
  CoolGrey20: "#CDD0D2",
};
