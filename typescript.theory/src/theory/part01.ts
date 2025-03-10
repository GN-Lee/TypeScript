// chpater 1
// 어노테이션(=:type)
const a: number = 12;
const b: boolean = !"현서";
const c: string = "현서";
const d: string[] = ["현균", "형준"]; // string만 들어가는 Array타입
const e: number[] = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8];
const f: { name: string; age: number } = {
  name: "현서",
  age: 25,
};

// price, shots, isCaffein obj의 배열 어노테이션
const v: { price: number; shots: number; iscaffein: boolean }[] = [
  { price: 2500, shots: 2, iscaffein: true },
  { price: 5500, shots: 1, iscaffein: false },
];

// clothes,isFemale 배열
const x: { clothes: string; isFemale: boolean }[] = [
  { clothes: "투피스", isFemale: true },
  { clothes: "남성용 무스탕", isFemale: false },
];

const add = (x: number, y: number): string => String(x + y);

// 함수인데, 숫자 배열을 매개변수 넣고, 첫번째 인덱스 돌려주는 함수
const index = (x: number[]): number => x[0];

const test: (x: number) => number = (x: number) => x;

// const onClick: (e:Event)=>void;
