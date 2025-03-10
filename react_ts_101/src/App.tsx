// key 값은 h1,h2,h3,b1,b2,b3만 되고,
// value값은 28,20,18,16,14,12만 되는 타입 만들기

// 1. keyof: 키값들을 상수화
// 2. 인덱스 타입: 벨류값들을 타입
// 3. 인덱스 시그니처: 키값을 타입화
// -1. string, number 만 가능 그래서
// 4. 맵드 타입: key in Type 사용
// 5. template literal Type
type Hseries = "h1" | "h2" | "h3";
type Bseries = "b1" | "b2" | "b3";
type num = {
  [key in Hseries | Bseries]: 28 | 20 | 18 | 16 | 14 | 12;
};

// template literal Type
type Sponsoner = "Gen G" | "NongSim" | "HanHwa" | "KIA" | "T1";
type Team = `${Sponsoner} Team`;
type LCKTEAM = {
  [key in Team]: {
    top: string;
    jg: string;
    mid: string;
    ad: string;
    sp: string;
  };
};
type Company = `${JYP} 제와피`;
type JYP = "진영 박" | "트와이스" | "있지" | "엔믹스";
type JYPentertainment = {
  [key in Company]: string[];
};

type Theme = "primary" | "secondary" | "warning";
type Color = "balck" | "white";
type Combi = `${Theme}=${Color}`;

function App() {
  const Kia: LCKTEAM = {
    "KIA Team": {
      top: "siwoo",
      jg: "lucid",
      mid: "showmaker",
      ad: "aiming",
      sp: "beryl",
    },
  };

  const data: JYPentertainment = {
    "엔믹스 제와피": ["설윤", "혜원"],
  };

  const test: Combi = "secondary=white";
  return <></>;
}

export default App;
