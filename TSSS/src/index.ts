interface Admin {
  name:string;
  permissions:string;
}

interface User{
  name: string;
  age:number;
}

type UserOrAdmin=
  User | Admin;

function greet(user:UserOrAdmin){
  console.log(user.name)
}
