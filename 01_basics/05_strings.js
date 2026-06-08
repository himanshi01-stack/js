const name = "himanshi"
const repoCount = 50

console.log(name + repoCount + "Value"); //one way to add string, contaginate

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // 2nd way, string intercollasion, better way to add strings using back tick

//different way of defining string
const gameName = new String('himanshi-sp') // new keyword used to define object for string, isme object ke way string o/p par aayegi (key value pair)

console.log(gameName[0]); //0th key value pair access karna
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

//Substring, negative values accept nahi karta hai
const newString = gameName.substring(0, 4) //substr me divide kar dega aur substr ki last value mtlb '4' include nahi hogi
console.log(newString);

//Slice
const anotherString = gameName.slice(-8, 4) // negative values denge toh reverse se start hota hai
console.log(anotherString);

//Trim, starting aur ending ki spaces remove kar deta hai
const newStringOne = "   himanshi  "
console.log(newStringOne); 
console.log(newStringOne.trim());

//
const url = "https://himanshi.com/himanshi%20parihar"
console.log(url.replace('%20', '-')); // 'kya replace karna hai', 'kisse replace karna hai'

console.log(url.includes('himanshi')); // used to ask whether a particular word is present in the string or not, true:-- if present, false:-- if not

//Split, used to convert string into array
console.log(gameName.split('-'));