// 제네릭스
type champion<T, U, V> = {
  name: string;
  position: T;
  hp: U;
  mp: V;
};

const mini: champion<string, number, string> = {
  name: "아칼리",
  position: "미드",
  hp: 80,
  mp: "70%",
};

type Mcburger =
  | "불고기 버거"
  | "상하이스파이시치킨버거"
  | "빅맥버거"
  | "콰트로치즈버거"
  | "세우버거";
type Mcside = "츄러스" | "감자튀김" | "애플파이" | "선데이 아이스크림";
type Mcdrink =
  | "콜라"
  | "제로콜라"
  | "스프라이트"
  | "환타 포도"
  | "환타 파인애플"
  | "아메리카노";

// extends: 들어갈 값 제한
type Mcdonald<T extends Mcburger, U extends Mcside, V extends Mcdrink> = {
  main: T;
  side: U;
  drink: V;
};

const a: Mcdonald<Mcburger, Mcside, Mcdrink> = {
  main: "상하이스파이시치킨버거",
  side: "선데이 아이스크림",
  drink: "제로콜라",
};
