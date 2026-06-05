let score = "33" // ek variable define karte hai jisme user se i/p lete hai, but since hame nhi pata ki user sirf number datatype hi i/p me dega

console.log (typeof score);
console.log (typeof(score));

let valueInNumber = Number(score); //phele se define kar diya jata hai ki number value hi o/p me karni hogi, 'valueInNumber' used to convert i/p to number
console.log (typeof(valueInNumber));
console.log (valueInNumber); //agar i/p number nhi hota hai then iski value NaN(not a number) aayegi

// score = null :-- o/p me 0 aata
// score = undefined :-- o/p me NaN 
// score = boolean value :-- true = 1, false = 0
// score = string :-- o/p me NaN

let isLoggedIn = 1

let booleanisLoggedIn = Boolean(isLoggedIn) // similarly used to convert i/p to boolean values
console.log (booleanIsLoggedIn);

//1 => true; 0=> false
//" " => false
//"himanshi" => true

let someNumber = "88"

let stringNumber = String(someNumber) //similarly used to convert to string
console.log (stringNumber);
console.log (typeof stringNumber);

/* OPERATIONS */

let value = 3
let negaValue = -value // used to convert to negative value
console.log (negaValue);

//console.log(2+2), (2-2), (2*2), (2**3), (2/3), (2%3)

let str1 = "hello"
let str2 = " himanshi"

let str3 = str1 + str2
console.log(str3);

console.log ("1" + 2); //o/p => 12 (string)
console.log (1 + "2"); //o/p => 12 (string)
console.log ("1" + 2 + 2); //o/p => 122
console.log (1 + 2 + "2"); //o/p => 32

console.log (( 3 + 4) * 5 % 3); // always use parenthesis to increase readability

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter); //value increment hokar print hogi

let x = 3;
const y = x++; //postfix increment

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a; //prefix increment

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
