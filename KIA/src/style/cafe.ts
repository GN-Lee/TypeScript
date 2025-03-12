type Beverage = "coffee" | "nonCoffee" | "ade" | "tea";
type Food = "bakery" | "cookie";

type OperationTime = {
  open?: string;
  close?: string;
};
type Open24Hours = Omit<OperationTime, keyof OperationTime>;
type RegularOperation = Required<OperationTime>;

type Unit = { id: number; name: string };

type WithUnit<T> = Unit & T;
type Item = { price: number; stocks: number; category: Beverage | Food };
type Staff = {
  rank: "Manager" | "PartTime" | "Owner";
  wage: number;
};
type Branch = {
  operation: Open24Hours | RegularOperation;
  staff: Employee[];
  menu: CafeItem[];
};

type CafeItem = WithUnit<Item>;
type Employee = WithUnit<Staff>;
type Spot = WithUnit<Branch>;
