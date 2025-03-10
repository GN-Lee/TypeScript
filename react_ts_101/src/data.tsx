type book = {
  id: number;
  title: string;
  author: string;
  genre: string;
};

type creditcard = {
  type: string;
  number: number;
  expiration: string;
  owner: string;
};

type fakerAPI<T> = {
  status: "OK" | "Error";
  code: 200 | 400 | 600;
  locale: string;
  seed: number | null;
  total: number;
  data: T[];
};

function data() {
  const a: fakerAPI<book> = {
    status: "OK",
    code: 200,
    locale: "Dw",
    seed: 2,
    total: 1,
    data: [
      {
        id: 1,
        author: "dwd",
        genre: "dwdwd",
        title: "2323",
      },
    ],
  };
  return <></>;
}

export default data;
