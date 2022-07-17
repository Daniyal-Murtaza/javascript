console.log("JS_07: Arrays and objects");

// to make an array
let fruits = ['apple', 'orange', 'banana', 'apricot'];
let marks = [78, 90, 27, 34, 91];
const mixed = ['orange', 78, [45, 89, 90], true];

// alternative way to make an array
const arr = new Array('yellow', 89, [90, 89], false);

console.log(fruits); //['apple', 'orange', 'banana', 'apricot']

console.log(marks); //[78, 90, 27, 34, 91]
console.log(mixed); //['orange', 78, Array(3), true]
console.log(arr); //['yellow', 89, Array(2), false]

// to print index base
console.log(arr[2]); //[90, 89]
console.log(fruits[3]); //apricot

// to print index under index
console.log(fruits[3][0]); //a
console.log(arr[2][0]); //90

// to check if the given data type is either array or not
// isArray method
//--------------------
stringiee = 'ugdeg';
console.log(Array.isArray(arr)); //true
console.log(Array.isArray(stringiee)); //false

// to change specific index in an array
//----------------------------------------
arr[0] = 'Red';
console.log(arr); //['Red', 89, Array(2), false]

// to get index of some character in array
//-----------------------------------------
let element = arr.indexOf(89);
console.log(element);

// Mutation and modifiers in arrays
//-----------------------------

//add at the end
arr.push(67);
console.log(arr); //['Red', 89, Array(2), false, 67]

//add at the start
arr.unshift('roobin');
console.log(arr); //['roobin', 'Red', 89, Array(2), false, 67]

//removes last element
arr.pop();
console.log(arr); //['roobin', 'Red', 89, Array(2), false, 67]

//removes first element
arr.shift();
console.log(arr); //['Red', 89, Array(2), false]

// to remove specific indexes from the array
arr.splice(0, 2);
console.log(arr); //[Array(2), false]

// to reverse the array
console.log(fruits.reverse()); //['apricot', 'banana', 'orange', 'apple']

// to concatenate 2 arrays
marks = marks.concat(fruits);
console.log(marks); // [78, 90, 27, 34, 91, 'apricot', 'banana', 'orange', 'apple']

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

//OBJECTS : it's like the dictionary of python
//------------------------------------------

let Employee = {
    'first name': 'Daniyal Murtaza',
    Age: 19,
    Married: false,
    salary: undefined
}

console.log(Employee); //{name: 'Daniyal Murtaza', Age: 19, Married: false, salary: undefined}

// Method 1 to print
console.log(Employee['first name']); //Daniyal Murtaza
console.log(Employee['salary']); //undefined

// Method 2 to print
// 'first name' can only be print with above syntax
console.log(Employee.salary); //undefined




