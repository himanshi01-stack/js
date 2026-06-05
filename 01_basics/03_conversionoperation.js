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