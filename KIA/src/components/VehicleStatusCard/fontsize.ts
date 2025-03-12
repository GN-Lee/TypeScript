type Level = 1 | 2 | 3 | 4 | 5;
type HeaderSize = `H${Exclude<Level, 4 | 5>}`;
type BodySize = `B${Exclude<Level, "">}`;

type FontSize = `${28 | 20 | 18 | 16 | 14 | 13 | 12 | 11}px`;
type HeaderFontSize = Extract<FontSize, "28px" | "20px" | "18px">;
type BodyFontSize = Exclude<FontSize, HeaderFontSize>;

type LineHeight = `${168 | 164 | 156 | 150 | 144}%`;
type HeaderLineHeight = Extract<LineHeight, "144%" | "150%" | "156%">;
type BodyLineHeight = Exclude<LineHeight, HeaderLineHeight>;
type LetterSpacing = -3;

type HeaderValue = {
  fontSize: HeaderFontSize;
  letterSpacing: LetterSpacing;
  lineHeight: HeaderLineHeight;
};

type BodyValue = {
  fontSize: BodyFontSize;
  letterSpacing: LetterSpacing;
  lineHeight: BodyLineHeight;
};

type Size<T extends HeaderSize | BodySize> = {
  [key in T]: key extends HeaderSize ? HeaderValue : BodyValue;
};

export const headerFont: Size<HeaderSize> = {
  H1: { fontSize: "28px", letterSpacing: -3, lineHeight: "144%" },
  H2: { fontSize: "20px", letterSpacing: -3, lineHeight: "150%" },
  H3: { fontSize: "18px", letterSpacing: -3, lineHeight: "156%" },
};

export const bodyFont: Size<BodySize> = {
  B1: { fontSize: "16px", letterSpacing: -3, lineHeight: "164%" },
  B2: { fontSize: "14px", letterSpacing: -3, lineHeight: "168%" },
  B3: { fontSize: "13px", letterSpacing: -3, lineHeight: "168%" },
  B4: { fontSize: "12px", letterSpacing: -3, lineHeight: "168%" },
  B5: { fontSize: "11px", letterSpacing: -3, lineHeight: "168%" },
};
