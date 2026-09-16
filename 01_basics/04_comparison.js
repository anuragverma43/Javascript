// console.log(2>1);
// console.log(2<1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2==1);

// console.log("2">1); // give true
// console.log("02">1); // give true // it will automatically convert string in number

console.log(null>0); // give false
console.log(null==0); // give false
console.log(null>=0); // give true  // reason is that an equality checks == and comparisons > < >= <= work differently . comparison convert null to a number, treating it as 0 that's why (3) null>=0 is true and (1) null>0 is false

// these types of comparison sometimes gives unpredictable result
console.log(undefined==0)
console.log(undefined>0)
console.log(undefined<0)
// all gives false 

// strict check is checked by ===
// it not only check values but also datatypes
console.log("2"==2) // gives true
console.log("2"===2) // gives false
 // *********** DATA TYPES SUMMARY *********** //
 // BASED ON STORING DATA IN MEMORY AND ACCESSING THAT DATA THERE ARE OF TWO TYPES OF DATATYPES
 // 1. PRIMITIVE (THEY ARE CALL BY VALUES DATATYPES)
 // 7 TYPES => String , Numebr, Boolean , null , undefined , Symbol , BigInt
//example of symbol

const id=Symbol('123')
const anotherId=Symbol('123')
// both are not same as symbol is used for defineing uniqueness i.e
console.log(id === anotherId) // give false

//example of BigInt
 
const bignumber= 948502845792341193n 
// after adding n it becomes BigInt

 // 2. NON-PRIMITIVE(REFERENCE TYPE)
// Array , Objects , Functions 

// Array
const arr=['c','d','e'];
// Object
let myObj = {
    name: "Anurag",
    age: 22,
}
//function
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction); // gives function // called as object function

// return type of non-primitive datatypes is object and in case of function it is called as function object


// ********** NOTE ********** //
// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// Where as C/C++/java/ Typescripts are statically typed languages