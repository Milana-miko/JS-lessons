//Task 1


function checkMoreLess(num) {
    const randomFromZeroToOne = Math.floor(Math.random() * 11);
    if(randomFromZeroToOne < num) {
        return "My number is greater than a randomly generated number! Generated number is " + randomFromZeroToOne;
    } else if(randomFromZeroToOne > num) {
        return "Randomly generated number is " + randomFromZeroToOne + " It's more than my number!";
    } else if(randomFromZeroToOne === num) {
        return "Randomly generated number is " + randomFromZeroToOne + " And it's equals my number!";
    }
}

console.log(checkMoreLess(6));


//Tas 2

const date = new Date();
const day = date.getDate();
const month = date.getMonth();

function checkBirthday(bDay, bMonth) {
    if(bDay === day & bMonth === month) {
        console.log("Happy Birthday!");
    } else {
        console.log("This is not your Birthday!");
    }
}

checkBirthday(16, 3);
checkBirthday(12, 11);


