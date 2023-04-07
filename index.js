//console.log("Hello World, from Milana!");
//let myLovelyVar = "JS for smart QAs"
//console.log(myLovelyVar);
// primitive types
const myString = "Hello!";
const myNum = 5; //NaN, Infinity, -Infinity
const myBool = false;
const myUndefined = undefined;

// non-primitive types
const myArray = [10, "Hi", [1, 5, "Hello"], false];


const myOtherString = "Very happy to see you here";

//const finallyString = myString + " " + myOtherString;

//console.log(myString + " " + myOtherString);

const testTiv = -30.005;
let s = 5;
const d = 4;
//console.log(testTiv - myNum);

const anotherVal = myString + myNum;

//console.log(anotherVal);

//typeof
//console.log(typeof myObj);
//console.log(myArray[2]);

//console.log(myArray.length);

//console.log(myArray[myArray.length - 1]);

const myObj = {
    Armenia: "Yerevan",
    Russia: "Moscow",
    Germany:"Berlin",
    profession: "QA"
};

/*const myObj1 = {
    firstName: "Anahit",
    lastName: "Sargsyan",
    profession: "programmer",
    gender: "female"
};
*/
//console.log("I'm" + ' ' + myObj.profession);

//console.log(myObj.profession);

//console.log(myObj1.firstName + " " + myObj1.lastName  + " is a " + myObj1.gender);

//console.log(15 < 5);

//console.log(myObj1.profession === 'programmer');

let myTest1 = 1;
let myTest2 = '1666';
myTest1 = myTest2;
// myTest1 = '1666';
//console.log(myTest1 == myTest2);

let myTest3 = '2000';
myTest2 = myTest3;
//console.log(myTest1);

//console.log(myTest2);







let num1 = 1;
let num2 = '1';
//console.log(num1 === num2);



const carOne = {
    color: 'purple',
    type: 'minivan',
    brand: 'Toyota'
  };

const carTwo = {
    color: 'red',
    type: 'cabrio',
    brand: 'BMW'
};

const carThree = {
    color: 'grey',
    type: 'truck',
    brand: 'Ford'
};

const carFour = {
    color: 'green',
    type: 'pickup',
    brand: 'Chevrolet'
};

const carFive = {
    color: 'black',
    type: 'station wagon',
    brand: 'Audi'
};

const owners = ["Ani", "Silvik", "Gago", "Seda", "Milana"];

// For every owner according to the number in array create the following sentence:
// <OWNER> has a <COLOR> <Brand> <TYPE> that he/she loves.
// Ani has a green Chevrolet pickup that she loves.
// Good luck!
/*
console.log(owners[0] + " has a " + carFour.color + " " + carFour.brand + " " + carFour.type + " that she loves.");
console.log(owners[1] + " has a " + carOne.color + " " + carOne.brand + " " + carOne.type + " that she loves.");
console.log(owners[2] + " has a " + carThree.color + " " + carThree.brand + " " + carThree.type + " that he loves.");
console.log(owners[3] + " has a " + carTwo.color + " " + carTwo.brand + " " + carTwo.type + " that she loves.");
console.log(owners[owners.length - 1] + " has a " + carFive.color + " " + carFive.brand + " " + carFive.type + " that she loves.");
*/

let newNum1 = 19;
let newNum2 = 22;
let newNum3 = 33;

newNum1 = newNum2; // 22
newNum2 = newNum3; // 33

//console.log(newNum1);
//console.log(newNum2);
//console.log(newNum3);

let myObj1 = {
    firstName: "Anahit",
    lastName: "Sargsyan",
    profession: "programmer",
    gender: "female"
};
let myObj2 = {
    firstName: "Milana",
    lastName: "Amelyan",
    profession: "QA",
    gender: "female"
};
let myObj3 = {
    firstName: "Ani",
    lastName: "AAAA",
    profession: "QA1",
    gender: "female"
};
/*
myObj1 = myObj2;
myObj2 = myObj3;

console.log(myObj1);
console.log(myObj2);
console.log(myObj3);
*/
myObj1 = myObj2;
myObj2.profession = "Barev";
myObj2 = myObj3;
myObj2.firstName = "Petros";
myObj3.gender = 'Other';
/*
console.log(myObj1);
console.log(myObj2);
console.log(myObj3);
*/

function myCoolFunc(x, y) {
    return "Hi " + x + " u " + y;
}
//console.log(myCoolFunc("Ani", "Gago"));

function square(a) {
    return a * a;
}
//console.log(square(5));

function paragic(erkarutyun, launutyun) {
    return 2 * erkarutyun + 2 * launutyun;
}
//console.log(paragic(4, 6));

/*
const firstName = 'Seda1';
if(firstName === 'Seda') {
    console.log('She can help you');
} else {
    console.log('The other may be helpful too');
}
*/

function zuyKamKent(num) {
    if(num % 2 === 0) {
        return 'Zuyg e';
    } else {
        return'Kent e';
    }
}
//console.log(zuyKamKent(6));
//console.log(zuyKamKent(-303));

function squareRoot(x) {
    return x * x;
};
//console.log(squareRoot(2));

/*
function square(a) {
    return a * a;
};
console.log(square(5));
*/


const myObj5 = {
    type: "dog",
    name: "Arjuk",
    age: 2,
    hasFamily: true
};

function isHappy(dog){
    if(dog.hasFamily === true){
        return dog.name + " is happy!";
    }
else {
    return "Please help find new family for " + dog.type + dog.name;
}
console.log(isHappy(myObj5));


