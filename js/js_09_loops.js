console.log(`JS_09: lOOPS`)

//for loop
console.log('i');
for (let i = 0; i < 10; i++) {
    console.log(i); // 0-9
}

//while loop
console.log('j');
let j = 0;
while (j < 10) {
    console.log(j);
    j += 1;
}

//do-while loop
console.log('z');
let z = 0;
do {
    console.log(z);
    z += 1;
} while (z < 10);

// break: to terminate loop
// continue: to skip an iteration

console.log('u');
for (let u = 0; u <= 20; u++) {
    console.log(u);

    if (u == 5) {
        u += 1;
        continue; //it will leave 6
    }

    if (u == 13) {
        console.log('u value is equal to 13');
        break; // when u==13 loop will terminate
    }
}


// loop on array:
//-------------------

arr = [1, 9, 439, 39, 3];

// method 1:
console.log('method 1');
arr.forEach(function (element) {
    console.log(element);
});


// it can also be modified into
console.log('alternative');
arr.forEach(function (element, index, array) {
    console.log(element, index, array);
    // 1 | 0 | (5) [1, 9, 439, 39, 3]
    // e | i | array
});


//method 2:
console.log('method 2');
for (let v = 0; v < arr.length; v++) {
    console.log(arr[v]);
}

//loop on object
//-----------------

let obj = {
    name: 'Daniyal',
    age: 19,
    salary: undefined
}

for (key in obj) {
    console.log(`The ${key} of object is ${obj[key]}`);
}








