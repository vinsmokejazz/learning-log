
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

type emplyoee = {
  name: string,
  date: Date;
}
type manager = {
  name: string,
  dept: string,
}

type teamLead = emplyoee & manager

const tLead: teamLead = {
  name: "hh",
  date: new Date(),
  dept: "ddjd"
}

type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202