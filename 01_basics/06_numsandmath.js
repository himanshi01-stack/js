// const score, js iska i/p automatically as a number legi but ham iska datatype explicitly bhi define kar sakte hai
const score = 700
console.log(score);

const balance = new Number(100)
console.log(balance); //o/p:-- [Number: 100]

console.log(balance.toString()); //number will be converted to string
console.log(balance.toFixed(2)); //jab precision values zyada hi badi ho jaaye, esp. used in e-commerce apps, decimal ke baad ki digits

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); //jitne defined length hai usme starting se numbers ko imp dega including to decimal aur uske baad ke number ko round off kar dega, range:-1 to 21

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// MATHS:-- maths library js ke sath hi aati hai by default
console.log(Math);
console.log(Math.abs(-4)); //negative to positive (absolute values)
console.log(Math.round(6.9));
console.log(Math.ceil(4.2)); //round off karega but speifically top value dega dega, 4--> 5
console.log(Math.floor(4.9)); //round off to lower value, 4...--> 4

console.log(Math.random()); //values between 0 to 1 dega
console.log(Math.random()*10); //ek decimal value shift, isme bhi guaranttee nhi hoti hai ki min value 0 nhi 1 aayegi
console.log((Math.random()*10) + 1); //isme definitely value 1 se greater hi aayegi
console.log(Math.floor(Math.random()*10) + 1); //floor isko round off kar deta hai lower values ki taraf

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1) + min)); 