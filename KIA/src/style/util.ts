type Top = "Tanker" | "Bruiser";
type Jungle = "Tanker" | "Bruiser" | "Magic";
type Mid = "Utility" | "Bruiser" | "Magic";
type AD = "AD";
type SP = "Utility" | "Healer";

type Lol = {
  top: Top;
  jg: Jungle;
  mid: Mid;
  ad: AD;
  sp: SP;
};
// 1. keyof
type Position = keyof Lol;
// 2. index
type TopIndex = Lol["top"];
// 3. index signature
type Jungler = {
  [key: string]: string;
};
// 4. string,number 제외한 특정한 값
type Test1 = {
  [key in Mid]: string;
};

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};
// 1. 특정한 값 뽑아 새로운 타입생성 = Pick
type A = Pick<User, "id" | "name">;
// 2. 특정한 값 뽑아 삭제 = Omit
type B = Omit<User, "password">;
// 3. optional로 바꿔줌 = Partial
type C = Partial<User>;
// 이름과 이메일이 옵셔널한 타입 생성
type C1 = Partial<Pick<User, "name" | "email">>;
// 4. 다시 필수로 바꿔줌 = Required
type D = Required<Partial<User>>;
// 5. 키값과 벨류값 타입 설정 =  Record
type Member = "User" | "Admin" | "SuperAdmin";
type E = Record<Member, Number | string>;
// 6. 키값에서 특정한 타입 제외 =  Exclude
type F = Exclude<number | string | boolean, boolean>;
// 7. 키값에서 특정한 타입만 적용 = Extract
type G = Extract<number | string | boolean, boolean>;

// User들의 key, value는 boolean
type Bool = Partial<Record<keyof User, Boolean>>;
