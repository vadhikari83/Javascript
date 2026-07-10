// const gameName = "Street Fighter";

// console.log(gameName);
// console.log(typeof gameName);

// console.log(gameName.length);
// console.log(gameName.toUpperCase()); // changes the string value to upper case
// console.log(gameName.charAt(2));  //prints the character at index value of 1
// console.log(gameName.indexOf(' ')); //prints the index value of character passed in single qoutes.


// //string.substring() method
// /* substring method is used to return a substring present in any given string.
// It always return a value.

// console.log(gameName.substring(0,6));
// const newGame = gameName.substring(0,6);
// console.log(newGame);


// */

const newStringOne = "     Adhikari     ";
console.log(newStringOne.length);
console.log(`here we have used newStingOne.trim() method to eliminate all the whitespaces before or after of newStringone ${newStringOne.trim()}`);

//string.trim() : replaces all the whitespaces oa a given string.
// We do have trimEnd and trimStart


//string.replace("oldValue", "newValue")

const url = "https://www.adhikariinternational.com/aboutpage/";
console.log(`We are using replace method avaible in strings which is used to replace a single character or substring
    based on our requirmeent. here in this exmaple we are going to replace "adhikariinternational" with "bharatinternational" 
    ${url.replace("adhikariinternational","bharatinternational")}
    important point to remember that replace method does not replace the original value but
    it returns the new value which we can store to a new variable if we require.`);
let newName = url.replace("adhikariinternational", "bharatinternational");
console.log(newName);
console.log(url);

console.log(url.includes(".com")); // returns the boolean value if passed string is available in the string.

