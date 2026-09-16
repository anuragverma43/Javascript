const name = "Anurag"
const repocount= "3"
// there is one more way to declare string

const gameName = new String('fif-a-v-com') // new keyword for using object of javascript 
// -------------------------     Methods in javascript for string        -----------------------------//
console.log(gameName[0]) //gives char f
console.log(gameName.__proto__) // gives object 

console.log(gameName.length) // gives length
console.log(gameName.toUpperCase) //convert string in uppercase
console.log(gameName.charAt(2)) // gives char at index 2 =>f
console.log(gameName.indexOf('i')) // give index of char i

const newString = gameName.substring(0,3) 
console.log(newString)//give substring till index 2

const anotherString = gameName.slice(-4,2) // work same but here we can give negative values also => and it will start from revserse to give output
console.log(anotherString);

const newStringone ="   anurag   ";
console.log(newStringone) // give string with spaces
console.log(newStringone.trim()); // removes spaces

const url = "https://anurag.com/abcd%20verma"
console.log(url.replace('%20','-')) // %20 will be replaced by dash(-)

console.log(url.includes('anurag')) // return true as anurag is present in url

console.log(url.includes('ajkadkn'))// return false as that is not present in string

console.log(gameName.split('-')) // will give array of string gamename based on dash(-) => in example case : ['fif','a','v','com']

// and there are many more methods . learn through mdn.com


// -----------------------------------------------------------------------------------------------------


// console.log(name + repocount + "sdjlb") // it will give contatinated string // don't see linethorugh of name it is due to typescript
//but this this type is outdated. avoid this type syntax

//use backtics
//yaha per aaata hai string interpulation => placeholder banate hai unke jo bhi variable hai unhe inject kar do
// to form placeholder we use $ sign
console.log(`Hello my name is ${name} and my repocount is ${repocount}`);
