console.log('JS_10_Functions')

// function greet() {
//     console.log('hey there! hope you are doing great.');
// }
// greet();

//------------------------------------

// function greet(name) {
//     console.log(`hey ${name}! hope you are doing great.`);
// }
// greet('Daniyal Murtaza');

//------------------------------------

// function greet(name) {
//     let msg = `hey ${name}! hope you are doing great.`;
//     return msg;
// }

// let name2 = 'Daniyal Murtaza';
// let result = greet(name2);
// console.log(result);

//-----------------------------------

// function greet(name, thanks = 'thanks alot') {
//     let msg = `hey ${name}! hope you are doing great. ${thanks}`;
//     return msg;
// }

// let name2 = 'Daniyal Murtaza';
// let result = greet(name2);
// console.log(result);

//-------------------------------------
// storing a function in a variable

// let mygreet = function (name, thanks = 'thanks alot') {
//     let msg = `hey ${name}! hope you are doing great. ${thanks}`;
//     return msg;
// }

// let name2 = 'Daniyal Murtaza';
// let result = mygreet(name2);
// console.log(result);

//-----------------------------------
// function inside object

// let myobj = {
//     namae: 'Daniyal',
//     age: '17',
//     game: function () {
//         return 'counter strike';
//     }
// }

// console.log(myobj['namae']);
// console.log(myobj.namae);
// console.log(myobj.game());

//----------------------------------

let myarray = new Array(78, 889, 29, 7);

myarray.forEach(function (element, index, myarray) {
    console.log(element, index, myarray);
});