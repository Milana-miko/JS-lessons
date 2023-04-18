const playingCards = ['Xachi Valet', 'Srti Valet',
'Qyarpich Valet', 'Agrav Valet', 'Xachi Dama',
'Srti Dama', 'Qyarpich Dama', 'Agrav Dama',
'Xachi Karol', 'Srti Karol', 'Qyarpich Karol',
'Agrav Karol', 'Xachi Tuz', 'Srti Tuz', 'Qyarpich Tuz',
'Agrav Tuz'];

function findCards(arr) {
    console.log(arr[Math.floor(Math.random() * arr.length)]);
}

findCards(playingCards);

const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
12, 12, 14, 15, 16, 17,18, 19,20];
function findSqr(arr) {
    for(let i = 0; i < 20;  i++) {
        console.log(Math.pow(arr[i], 2));
    }
}
//findSqr(numbersArr);



function findSqr() {
    for(let num = 1; num <= 20;  num++) {
        console.log(Math.pow(num, 2)); // num * num * num
    }
}
findSqr();