console.log(`JS_08: if, Else, Switches`);


/*
IMPORTANT:
== only campares value (if value are matching)

=== compares type and value both (if value and type both are matching)

!= if value are not matching

!== if value and type both are not matching
*/


const age = '20';

if (age < 20) {
    console.log('under 20');
}

/*
else if (age == 20) {
    console.log("equal to 20");
}

output: equal to 20.

Because age format in it's declaration is string i.e., age = '20' while when we are compairing i.e., else if (age == 20), here age format is number. and since == operator only compares value i.e., 20 and 20 therefore we got this output
*/


else if (age === 20) {
    console.log("equal to 20")
}
/*
output : above 20
Because it compares value o.e., 20 and 20 which are same but it also compares type i.e., string and Number which are different therefore it printed else condition output.
*/

else {
    console.log(`above 20`);
}

//-------------------------------

// to check if the variable exists

if (typeof vari !== 'undefined') {
    console.log('vari is defined')
}

else {
    console.log('vari is undefined');
}

//---------------------------------
// using boolean

let doesdrive = false;
if (doesdrive) {
    console.log('can drive');
}
else {
    console.log('cannot drive');
}

//and operator &&
// or operator ||

//---------------------------------

// ternary operator
let num = 78;

console.log(num < 78 ? 'less than 78' : 'greater than 78');

//-------------------------------
//switch case
let agex = 78;

switch (agex) {
    case 20:
        console.log('agex is 20')
        break;
    case 78:
        console.log('agex is 78')
        break;

    default:
        console.log('agex is unknown')
        break;
}


