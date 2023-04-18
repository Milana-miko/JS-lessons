function checkNumber (num) {
    if(typeof num !== "number") {
            return "Please provide number";
        } else if(num > 100) {
        return "greater";
    } else if(num < 100) {
        return "less";
    } else if(num === 100) {
        return "equal";
    }
};
//console.log(checkNumber("test"));
//console.log(checkNumber(true));
//console.log(checkNumber(50));

/*
function checkNumber(num){
    if(typeof num === 'number'){
        if(num > 100){
            return 'Number is greder then 100';
        } else if(num === 100){
            return 'The numer is equal 100';
        } else if(num < 100){
            return 'number is smaler then 100';
        }
    } else {
        return 'PLEASE PROVED A NUMBER';
    }
};
console.log(checkNumber(101));
*/

const months = [
{
    name: "January",
    days: 31
},
{
    name: "February",
    days: 28
},
{
    name: "March",
    days: 31
},
{
    name: "April",
    days: 30
},
{
    name: "May",
    days: 31
},
{
    name: "June",
    days: 30
},
{
    name: "July",
    days: 31
},
{
    name: "August",
    days: 31
},
{
    name: "September",
    days: 30
},
{
    name: "October",
    days: 31
},
{
    name: "November",
    days: 30
},
{
    name: "December",
    days: 31
}
];

/*
function tellDays(arr){
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i].name + ' has ' + arr[i].days + " days");
    }
}
tellDays(months);
*/

function tellHowDaysHasAMonth(arr, num) {
    let foundItem;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].days === num) {
           console.log(arr[i].name + ' has ' + arr[i].days + " days");
           foundItem = arr[i];
          //return arr[i].name + ' has ' + arr[i].days + " days"; pri returne vivedet pervoe naydennoe i vse
        }

    }
    if(foundItem === undefined){
        console.log("There is no such month.");
    }
}

tellHowDaysHasAMonth(months, 31);