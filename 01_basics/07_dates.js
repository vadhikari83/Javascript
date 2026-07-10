//Dates

let myBirthDate = new Date();
console.log(myBirthDate);

console.log(myBirthDate.toString());


//Check for various methods which shows dates in different formats 

//creating your own date

let newCreatedDate = new Date(2023, 0, 23);
console.log(newCreatedDate.toDateString());

let newCreatedDate1 = new Date(2023, 0, 23, 5, 3);
console.log(newCreatedDate1.toLocaleString());

//Creating a custom dates like in yyyy/mm/dd
const dateYYYYMMDD = new Date("2023/01/01");
console.log(dateYYYYMMDD.toLocaleDateString());
//Timestamps :  first refrence date is 1st Jan 1970 which is shown in miliseconds

let myTimeStamp = Date.now();

console.log("My time stamp : is " + myTimeStamp + " timestamp is in miliseconds");
console.log(dateYYYYMMDD.getTime());


//Examples

//Changing current dates in seconds

console.log(Math.round(Date.now()/1000));

const dateNew2 = new Date();
console.log(dateNew2.getDay());
console.log(dateNew2.getFullYear());



//Important 

dateNew2.toLocaleString('default', {
    weeday:"long"
})