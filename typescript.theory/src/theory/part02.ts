// 타입 조합 연산자
// 1. union type [or(|)]

const a: number | string = "10"; // 문자와 숫자 타입 가능

// 숫자 또는 불리언의 배열 타입
const b: (number | boolean)[] = [1, true, 3, 4, 5, false];

// 이름,가격,샷 수 또는 이름,가격,원산지 배열
const c: { name: string; price: number; shots?: number; source?: string }[] = [
  { name: "현서", price: 2500, shots: 2 },
];

// 2. intersection type [and(&)]
// const d:number & string
const coffee: { name: string; price: number } & { shots: number } = {
  name: "아메리카노",
  price: 2500,
  shots: 2,
};

// 타입 알리아스(type Alias)
// type 별명
type umm = number | string;
const d: umm = 1;

// person 타입 만들기/ name,age
type person = { name: string; age: number };
const e: person = { name: "현서", age: 25 };

// student 타입 major,id,courses
type student = { major: string; id: number; courses: string[] };
const f: student = { major: "컴공", id: 20166384, courses: ["물리", "수학"] };

// academic 타입
type academic = person & student;

// coffeeBean = origin,color,flavor
// ade = sparkling,kcal
// bread = ingredients, yeast
// product = name,price
type coffeeBean = { origin: string; color: string; flavor: string };
type ade = { sparkling: boolean; kcal: number };
type bread = { ingredients: string[]; yeast: number };
type product = { name: string; price: number };

// const saltBread: bread & product = {}
// const lemon: ade & product = {}
// const restuffCoffee: coffeeBean & product = {}

//  리터럴 타입 알리아스(범위 좁히기)
// type num = 1 | 2 | 3;
// type Beagle = "아메리카노" | "라떼" | "민트";

type SubwayBread = "플렛브레드" | "허니오트" | "오레가노" | "위트" | "화이트";
type SubwayCheese = "슈레드" | "아메리칸" | "모짜렐라";
type SubwayVegitable =
  | "양파"
  | "피망"
  | "양상추"
  | "할라피뇨"
  | "올리브"
  | "토마토";
type SubwaySource =
  | "핫칠리"
  | "허니머스타드"
  | "랜치"
  | "스위트어니언"
  | "후추"
  | "소금";
type Subway = {
  bread: SubwayBread;
  cheese: SubwayCheese;
  vegitable: SubwayVegitable[];
  sources: SubwaySource[];
};

// 마크도나르도
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

type Order = { burger: Mcburger; side: Mcside[]; drink: Mcdrink };
const myOrder: Order = {
  burger: "상하이스파이시치킨버거",
  side: ["선데이 아이스크림", "감자튀김"],
  drink: "제로콜라",
};
