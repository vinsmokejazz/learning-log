
//objects in ts
function delay(fn: () => void) {
  setTimeout(fn, 1000);
}
delay(function () {
  console.log("hello")
})

let user: {
  fdn: string,
  age: number,
} = {
  fdn: "kirr",
  age: 10,
}


//interfaces in ts
interface UserType {
  firstName: string,
  lastName: string,
  age: number
}

let user1: UserType = {
  firstName: "jj",
  age: 20,
  lastName: "kk"
}

//in function
function greet(user: UserType) {

}

type User = {

}
type StringorNumber = string | number;

type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer"
};

type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
  }

  greet(phrase: string) {
      console.log(`${phrase} ${this.name}`);
  }
}