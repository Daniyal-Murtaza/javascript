console.log("Welcome to js_05: Conversion & Coercion of datatypes")

// number to str

/*
let rollNo = 67;
console.log(rollNo); //67
console.log(typeof rollNo); //number
*/

let rollNo = String(67);
console.log(rollNo); //67
console.log(typeof rollNo); //string

//Boolean to string

/*
let boolVar = true;
console.log(boolVar); //true
console.log(typeof boolVar); //boolean
*/

let boolVar = String(true);
console.log(boolVar); //true
console.log(typeof boolVar); //string

// str to number

/*
let stringie = `89`;
console.log(stringie); //89
console.log(typeof stringie); //string
*/

let stringie = Number(`89`);
console.log(stringie); //89
console.log(typeof stringie); //number

// date to string

/*
let date = new Date();
console.log(date); // Sat Jul 16 2022 17:54:16 GMT+0500 (Pakistan Standard Time)
console.log(typeof date); //object
*/

let date = String(new Date());
console.log(date); // Sat Jul 16 2022 17:54:16 GMT+0500 (Pakistan Standard Time)
console.log(typeof date); //string
console.log(date, typeof date);

//arr to string

/*
arr = [54, 79, 48.8];
console.log(arr, typeof arr); //[54, 79, 48.8] 'object'
*/

arr = String([54, 79, 48.8]);
console.log(arr.length, typeof arr);
// since it has been changed into string therefore comma will also be counted so total length will become 10.

//----------------------------------------------

// toString method: Alternaitve to turn any data type into the string.

//number to strinng
let school = 78;
// console.log(school); 
// console.log(typeof school); //number

console.log(school.toString());
console.log(typeof school.toString());//string

//bool to string
let boolvar = false;
// console.log(boolvar); //false
// console.log(typeof boolvar); //boolean

console.log(boolvar.toString()); //bool
console.log(typeof boolvar.toString()); //string

//date to string
let datie = new Date();
// console.log(datie);
// console.log(typeof datie); // object

console.log(datie.toString());
console.log(typeof datie.toString()); //object

//--------------------------------------------

// string to number

let stringo = "89";
console.log(stringo); //89
console.log(typeof stringo); //string

stringo = Number("89");
console.log(stringo); //89
console.log(typeof stringo); //number

//------------------------------------------

//parseInt() -- changes the float value / string into the integer

let num1 = 1093.0007;
let num2 = "1093.0007";
console.log(parseInt(num1)); // 1093
console.log(parseInt(num2)); // 1093

//if we use number instead of the parseInt

console.log(Number(num1)); // 1093.0007
console.log(Number(num2)); // 1093.0007

//-------------------------------------------

// parseFloat() -- changes string into  floating point number

let num5 = parseFloat("100.08");
console.log(parseFloat(num5));
console.log(typeof parseFloat(num5));

//toFixed method -- to maintain significant figures (changes floating point number into the desired significant figures)

console.log(num5.toFixed(4));
console.log(num5.toFixed(10));


//------------------------------------------

//tyoe coercion
let numberie = 78;
let stringoos = "890";
console.log(numberie + stringoos);  // it will change numberie variable data type from number to string defaultly and then concatenate -- 78890

//to add
stringoos = Number(stringoos);
console.log(numberie + stringoos); // 968

