import dayjs from "dayjs";

const date = dayjs().format("04/04"); 

function checkBirthday(bDay) {
    
    if(bDay === date) {
        console.log("Happy Birthday!");
    } else {
        console.log("This is not your Birthday!");
    }
}

checkBirthday("04/04");
checkBirthday("23/07");