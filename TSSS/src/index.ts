interface User {
  name: string;
  age: number;
  address?:{   //optional for ?
    city:string;
    country:string;
    pincode:number;

  }
}

let user: User={
  name:"vv",
  age:10,
  address:{
    city:"blr",
    country:"india",
    pincode:5345

  }
}

let user2:User={
  name:'gs',
  age:11,
}