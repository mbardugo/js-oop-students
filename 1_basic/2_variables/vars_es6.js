//********************************LOCAL VARIABLES****************************************

//Local variable declaration.
let y;
console.log(y); //undefined

//A variable initialization.
y = 17;
console.log(y); //17

//A variable decleration and initialization.
let z = 'Foo';
console.log("z = " + z);// z = Foo

//A redclared variable throws an error.
//let z;

//Can't be hoisted.
//xyz = 'xyz';
//console.log(xyz);
//let xyz;

//Scope of local variable
function printVar() {
    let localVar = 18;
    console.log('localVar inside the function ' + localVar); // localVar inside the function 18
    console.log('A variable in the global scope can be accessed inside a function ' + z); // A variable in the global scope can be accessed inside a function Foo

    if(true){
        let ifVar = 'I am avilable only in the current code.'
    }
    //console.log(ifVar)// Trowes an error.
}

printVar();
//console.log('localVar outside of the function ' + localVar);// Throw reference error, localVar is undefined.


//********************************CONSTANTS****************************************

//A constant must be initialized.
//const boots; //Throw an error.

const costanza = 'George';

//Can't be reassigned.
//costanza = 'Jerry Seinfeld BFF.' //Throw an error.

//Scope of constant.
function printVar2() {
    const costanza = 'Belongs to the local scope of a function.'
    console.log(costanza); //Belongs to the local scope of a function.

}

printVar2();
console.log(costanza); // George