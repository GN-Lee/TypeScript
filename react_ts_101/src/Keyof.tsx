type Lunch = {
  name: string;
  kcal: string;
  price: number;
};
// keyof 연산자
type keyLunch = keyof Lunch;
// 인덱스드 타입
type b = Lunch["name"];
// 인덱스드 시그니처 타입
type coffee = {
  [key: string]: string;
};
type sandwich = {
  [key: string]: { name: string; price: number; kcal: number };
};

// size 타입 만들고 [xs,sm,md,lg,xl,xxl]
type Size = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};
type keySize = keyof Size;

function Keyof() {
  const tset: keyLunch = "price";
  const test1: keySize = "sm";
  const fontStyle: { size: keySize; color: "red" | "blue" | "purple" } = {
    size: "xl",
    color: "purple",
  };

  return <></>;
}

export default Keyof;
