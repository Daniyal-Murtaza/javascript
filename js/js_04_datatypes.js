/*
Bonus: 

- C and c++ and any other langusgae that requires the declaration of type of data that you are making variable of is called static languages. i.e.,  str name, int marks etc.

- vice versa languages are called dynamic languages suchh as javascript i.e., let name = "Daniyal", let marks = 77 etc.
*/



// DATA TYPES

/*
(1) primitive data types (Stack)
- string
- numbers
- boolean
- Null
- Undefined
- symbol

(2) Reference data type (Heap)
- Arrays
- Objects
- Functions
- Dates

To check the type of data type: typeof
*/


//Primitive data types:

// string
let name = "Daniyal";
console.log("my name is " + name);
console.log("my name is " + (typeof name));

// number
let marks = 67;
console.log("The marks is " + marks)
console.log("The marks is " + (typeof marks))

let marks_f = 67.90;
console.log("The marks_f is " + marks_f)
console.log("The marks_f is " + (typeof marks_f))

// boolean
let isflag = true;
console.log("The flag_variable is " + isflag)
console.log("The flag_variable is " + (typeof isflag))

// null
let nullVar = null;
console.log("The null_variable is " + nullVar)
console.log("The null_variable is " + (typeof nullVar)) // bogus

// undefined
let undefVar = undefined;
console.log("The undef_variable is " + undefVar)
console.log("The undef_variable is " + (typeof undefVar))

//referenced data type

//array
let arr = [67, "daniyal", true, undefined, null];
console.log("array is " + arr);
console.log("type of arr is " + (typeof arr)); // object

//object literals
let studMarks = {
    daniyal: 46,
    minhal: 79,
    jamal: 83
}
console.log(studMarks);
console.log((typeof studMarks)); //object

//function
function findName() {

}
console.log(typeof findName); //function

//Date

let date = new Date();
console.log(typeof date); //object
