function checkDevide(num) {
    if(num % 3 === 0) {
        return true;
    } else {
        return false;
    }
};

//console.log(checkDevide(9));
//console.log(checkDevide(5));

/*
function checkDevide(num) {
    if(num % 3 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
};
checkDevide(5);
*/

function isTasnavor(num) {
    if(num >=0 && num <= 9) {
        return "Miavor";
    } else if(num >= 10 && num < 100) {
        return "Tasnavor";
    } else if(num >= 100 && num < 1000) {
        return "Eranish";
    }else {
        return "AYL";
    }
}
//console.log(isTasnavor(5));
//console.log(isTasnavor(12));
//console.log(isTasnavor(1016));

let myObj1 = {
    name: "Leo",
    gender: "male"
};

let myObj2 = {
    name: "xxx",
    gender: "other"
};

/*
function getGender(person){
    if(person.gender === "female" || person.gender === "male") {
        return "Adekvat";
    } else {
        return "Voch adekvat";
    }
}
console.log(getGender(myObj1));
*/

function getGender(person){
    if(person.gender !== "other") {
        return "Adekvat";
    } else {
        return "Voch adekvat";
    }
}
console.log(getGender(myObj1));
console.log(getGender(myObj2));





