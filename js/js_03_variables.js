// it is linked to js_01_script.html
console.log("js_03_variables:let, const, var")


/* 
(1) var
- can be changed
- global scope
- used in old JS
*/

// can use "" or '' or `` to represent string
var name = `harry`;
console.log(name);

var name = "harry";
console.log(name);

var name = 'harry';
name = "ali";
console.log(name);

var channel = "Daniyal";
channel = "jamal";
console.log(name, channel);

var marks = 67;
marks = 80;
console.log(name, channel, marks);
//--------------------------------

/*
(2) const
- cannot be changed
- used in modern JS
*/

const facebookOwner = "Mark";
// facebookOwner = "austin"; --> will throw error
console.log(facebookOwner);

//---------------------------------

/*
(3) let 
- can be changed
- used in modern JS
- block level
*/


/* 
// case 1: karachi then lahore 
var city = "Lahore"; //global
{
    let city = "karachi"; //local
    console.log(city); //local
}
console.log(city); //global

----------------------------

//case 2: lahore then lahore
var city = "Lahore"; //global
{
    // let city = "karachi"; //local
    console.log(city); //local
}
console.log(city); //global

---------------------------------

//case 3: (throw errors)
// var city = "Lahore"; //global
{
    let city = "karachi"; //local
    console.log(city); //local
}
console.log(city); //global
*/


// const array

/*
- we cannot redeclare the const variable
- but we can perform operation on the already declared once 
*/

const arr = [55, 66, 77];
arr.push(88);
console.log(arr);


/*
programming cases
- camelCase
- PascalCase
- kebab-case
- snake_case
*/







