console.log("JS_06 Strings: properties/methods and template literals")

//--------------------------------------
// concat method : it concatenate the strings that we gave him
//--------------------------------------

// First way
let name1 = 'Daniyal';
let name2 = 'Murtaza';
console.log(name1 + " " + name2); //Daniyal Murtaza

// Second way
let string1 = 'luffy is best' + ' zoro is badass';
let string2 = ' hahahahaha';
string1 = string1.concat(string2);
console.log(string1); //luffy is best zoro is badass hahahahaha

//or
let strin1 = 'luffy is best' + ' zoro is badass';
strin1 = strin1.concat(' haha', ' brook', ' yohohohoh');
console.log(strin1); // luffy is best zoro is badass haha brook yohohohoh

//--------------------------------------
// length : gives length of string
//--------------------------------------

console.log(name1.length); // Daniyal = 7

//--------------------------------------
// toLowercase function: changes string into lower case
// ------------------------------------

console.log(name1.toLowerCase()); //daniyal

//--------------------------------------
// toUppercase function: changes string into Upper case
// ------------------------------------

console.log(name1.toUpperCase()); //DANIYAL

//--------------------------------------
//string indexing
//--------------------------------------

console.log(name1[0]); //D
console.log(name1[5]); //a

//--------------------------------------
// indexOf method: to find index of some specific character located in a string.for e.g. To locate the index of y in Daniyal
//--------------------------------------

console.log(name1.indexOf('y')); // Daniyal = 4

// but if their are multiple occurences of a character

console.log(name1.lastIndexOf('a')); // Daniyal = 5

//--------------------------------------
// charAt method: to locate a specific character by specifying an index. for e.g. what is at the 4th index of daniyal
//--------------------------------------

console.log(name1.charAt(5)); // a

//-----------------------------------
// endsWith method: to check if the string end with a specific charcater
//-----------------------------------

console.log(strin1.endsWith('yohohohoh')); //true

// includes method: contains the given string?
//-------------------------------------
console.log(strin1.includes('yohohohoh')); //true

console.log(strin1.includes(' ')); //true

console.log(strin1.includes(' dvdiuebi')); //false

// substring method: to get substring of a string
//--------------------------------------

console.log(name1.substring(2, 6));


// slice method: to get the slice of string
//-----------------------------------
console.log(name1.slice(-4)); //return the last 4 of string

console.log(name1.slice(0, 4)); //return the last 4 of string

//split method: to split the string from the desired character
//--------------------------------------

console.log(strin1.split(" ")); // ['luffy', 'is', 'best', 'zoro', 'is', 'badass', 'haha', 'brook', 'yohohohoh']

console.log(strin1.split("")); //['l', 'u', 'f', 'f', 'y', ' ', 'i', 's', ' ', 'b', 'e', 's', 't', ' ', 'z', 'o', 'r', 'o', ' ', 'i', 's', ' ', 'b', 'a', 'd', 'a', 's', 's', ' ', 'h', 'a', 'h', 'a', ' ', 'b', 'r', 'o', 'o', 'k', ' ', 'y', 'o', 'h', 'o', 'h', 'o', 'h', 'o', 'h']

console.log(strin1.split("a")); //['luffy is best zoro is b', 'd', 'ss h', 'h', ' brook yohohohoh']

// replace method: replace the firest occurence of any character to your desired string
//--------------------------------

console.log(strin1.replace('luffy', 'name')); //name is best zoro is badass haha brook yohohohoh

// Template literals: a modern concept inntroduced in ES6
//-----------------------------------

let fruit1 = `mango`;
let fruit2 = `peach`;

let stry = `hello ${name1} ${name2}.
            <h1>Your favourite fruits are ${fruit1} and ${fruit2}</h1>
            <p> we hope you gonna like it </p>`

document.body.innerHTML = stry;







