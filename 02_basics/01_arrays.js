// arrays:-- consists of elements, arrays in js are resizable, koi bhi datatypes rakh sakte hai

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["captain america", "thor", "hulk"]

console.log(myArr[0]); //elements ko ese access karte hai, using their indexes aur arr ke index hamesha 0 se start hote hai
// js ke andar jab bhi arr me copy operation ka use karenge tab voh shallow copies banata hai, shallow copy mtlb jo bhi changes karenge voh og me bhi hoge
const myArr2 = new Array(1, 2, 3, 4) //adding elements to the array
console.log(myArr[1]);

//Array Methods

myArr.push(6) //used to push ele or add ele to an array
myArr.pop() //pop ke andar koi bhi value dene ki zarurat nhi hoti hai simply last element ko remove kar deta hai
console.log(myArr);

myArr.unshift(9) //used to add ele in the starting, bas iske karan saare ele aage index par shift ho jaate hai
myArr.shifht() //yeh simply jo value unshift me daali thi usse remove karta hai

console.log(myArr.includes(9)); //boolean value dega to answer ki voh value arr me hai ya nahi
//similarly ".index" ka bhi use karenge jo uss particular ele ka index o/p me dega

const newArr = myArr.join() //join, array ko string me karta hai
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//slice, splice; splice original arr me bhi changes karta hai
