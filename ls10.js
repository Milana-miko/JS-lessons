//const str = "   Wonderful    Hello World hello    world     HELLO hi HELlo      ";
//console.log(str.charAt(5));
//console.log(str.charAt(50));

//console.log(str.includes("!")); //veradarcnum e false ete chka
//console.log(str.includes("h")); //veradarcnum e true ete ka
//console.log(str.includes("W"));


//console.log(str.indexOf('o')); // veradarcnum e -1 ete chi gtnum
//console.log(str.indexOf("z")); //veradarcnum e indexy ete ka
//console.log(str.toLowerCase().includes('h'));

//console.log(str.lastIndexOf());

//console.log(str.toLowerCase().replace("hello", "****"));

//console.log(str.toLowerCase().replaceAll("hello", "@@@"));

//console.log(str.toLowerCase().split("hello"));

//console.log(str.substring(1, 4)); //vozvrashaet s pervogo indeksa vklyuchitelno do vtorogo indexa

//console.log(str.trim()); //udalyaet probely v nachale i konce strolki

function reversedWord(name) {
    //let word = name.charAt(0).toLowerCase() + name.substring(1, name.length-1) + name.charAt(name.length-1).toUpperCase();
    let s = name.split('');
    console.log(typeof(s));
} 

reversedWord("Ani");
