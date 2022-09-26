export interface Hero {
  id: number;
  name: string;
  cost: number;
  loyalty: number;
  first: number;
  sec: number;
  ult: number;
  image?: string;
  skills: {text: string, cost: number}[]
}
