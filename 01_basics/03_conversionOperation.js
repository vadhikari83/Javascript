let score = 33;
let scoreA = "33";
let scoreB = "33abc";

console.log("We are studying type conversion in Javascript");
console.log("------------------------------------------------");
console.table([
    "We have declared score,scoreA and scoreB values",
    "The values assigned to these variables are as follows:",
    `Value of Variable score is ${score} and its type is ${typeof score}`,
    `Value of variable scoreA is ${scoreA} and its type is ${typeof scoreA}`,
    `Value of variable scoreB is ${scoreB} and its type is ${typeof scoreB}`,
    "typeof keyword helps in identifying the datatype (in other words type of value stored in a particular varialble",
    "Based on our requirement we can change the value of a data type ",
    `by using typeconversion methods like Number(scoreA, String(scoreA)
    but the point to remember is that these typeconversion methods are written in capital letters in 
    javascript.`

])


// "33" -> can be converted from string to number with help of Number("33");
// "33avb" -> can be used with Number("33abc") and it run without any issue but it will return a NaN (not a number);
//  boolean values of true and false also can be written as true = 1 and false = 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
 
//Importat things to understand while using Boolean conversion.
// value of 1 or not empty string is equals to true while 0 and emptry string is false.


//Conversion in strings
// anything can be converted into string
let numberValue = 33;
let changeToString = String(numberValue);

console.log(changeToString, ` is a ${typeof changeToString}`);