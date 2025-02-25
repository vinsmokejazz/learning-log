interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function isLegal(users: User[]): boolean[] {
  return users.map((user) => user.age >= 18); // Fixed variable name
}

const users: User[] = [
  { firstName: "John", lastName: "Doe", age: 25 },
  { firstName: "Jane", lastName: "Smith", age: 17 }
];

console.log(isLegal(users)); 
