"use struct";

//String type variable
let x = "hello";
//Integer type variable
let y = 2;
//Float type variable
let z = 2.0;
//Special characters in JS like Inifinity
console.log(1/0);

//There is a max int value that can be stored in the fixed 64 bit storage var
//For example
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
//It gives the approximate value 

//BigInt type variable to get around this, the n at the end signifies BigInt
const bigInt = 1234567890123456789012345678901234567890n;

//Use of backticks (tilda key in QWERTY) allows embedding variables within strings
let phrase = `can embed another string ${x}`;
console.log(phrase)

//Boolean type variables
let above21 = true;
let above22 = 23 > 22;
console.log(above22);

//Null type variables 
let age = null;
//Undefined type variables
let age2;
console.log(age2);
//Or
let age3 = 20;
age3 = undefined;

//Use typeof operator to check the data type of an operand
typeof 0;
console.log(typeof true)

//The one non-primitive data type is object which can store multiple values instead of only 1
//Object is used to create more complex data structures