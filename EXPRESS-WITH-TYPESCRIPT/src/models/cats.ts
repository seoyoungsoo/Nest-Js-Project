export type CatType = {
  id: string;
  name: string;
  age: number;
  species: string;
  isCute: boolean;
  friends: string[];
};

export const Cat: CatType[] = [
  {
    id: '1',
    name: 'one',
    age: 1,
    species: 'Russian Blue',
    isCute: true,
    friends: ['2', '5'],
  },
  {
    id: '2',
    name: 'two',
    age: 2,
    species: 'Sphynx cat',
    isCute: false,
    friends: ['1', '3'],
  },
  {
    id: '3',
    name: 'three',
    age: 3,
    species: 'Munchikin',
    isCute: true,
    friends: ['2'],
  },
  {
    id: '4',
    name: 'four',
    age: 4,
    species: 'Scottish Fold',
    isCute: true,
    friends: ['5'],
  },
  {
    id: '5',
    name: 'five',
    age: 5,
    species: 'Russian Blue',
    isCute: true,
    friends: ['1', '4'],
  },
];
