interface Admin {
  name:string;
  permissions:string;
}

interface SUser{
  name: string;
  age:number;
}

type UserOrAdmin=
  SUser | Admin;    //for top-level type shld be called

function greet(user:UserOrAdmin){
  console.log(user.name)
}


interface BigUser {
  birtday: number | string  //in this level & | can be used not in top level
}

