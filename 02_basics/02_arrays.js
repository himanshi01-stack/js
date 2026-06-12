const marvel_heroes =["thor", "captain america", "hulk"]
const dc = ["flash", "superman", "batman"]

marvel_heroes.push(dc)
console.log(marvel_heroes);
console.log(marvel_heroes[3][1]); //isme marvel_heores ke andar hi dc arr merge ho jaaye jo ek acha representation nhi mana jayega

const allHeroes = marvel_heores.concat(dc)
console.log(allHeroes); // yeh puri ek arr hi dega

const all_new_heores = [...marvel_heroes, ...dc]
console.log(all_new_heores); //same as concat

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); //yeh saare elements ko ek arr me merge kar dega

console.log(Array.isArray("himanshi"))
console.log(Array.from("himanshi"))
console.log(Array.from({name: "himanshi"})) //interesting
