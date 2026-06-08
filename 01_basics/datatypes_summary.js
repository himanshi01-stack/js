// Primitive, inko jab call karte hai toh inki copied value me kara jata hai, reference me nhi kara jata hai aur jo bhi changes karte hai voh unki copy me karte hai

// 7 types: String, number, boolean, null (empty), undefined, symbol(value ko unique banane me use), bigint

// Reference (Non- primitive), memory me directly reference allocate kara jata hai, jo bhi change karenge voh sab original value me change hoga

// Array, objects, functions

//JavaScript is a dynamically typed language.
//  This means that the interpreter assigns a data type to a variable at runtime based on its value at that moment,
//  rather than requiring you to explicitly declare a type beforehand.

const id = Symbol('123')
const anotherId = Symbol('123') // value bhi same paas karenge tab bhi do alag alag variable me hi return karega
console.log(id === anotherId);

// Arrays
const heroes = ["iron man", "captain america", "thor"] 
// Objects
let myObj = {
    name: "himanshi",
    age: 21,
}
// Functions
const myFunction = function(){
    console.log("hello world");
}


// Memory 
// Stack Memory:-- used in primitive datatypes, Heap Memory:-- used in non-primitive datatypes
let myYoutubename = "himanshi"
let anothername = myYoutubename
anothername = "chaiaurcode"
//primitive datatype hai toh changes uski copy me hoge original variable me nahi (stack memory)

console.log(myYoutubename); //o/p:- himanshi
console.log(anothername); //o/p:- chaiaurcode

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}
let userTwo = userOne

userTwo.email = "himanshi@google.com"
//non- primitive datatype hai toh original me value change hogi

console.log(userOne.email);
console.log(userTwo.email);