//********************************LOCAL VARIABLES****************************************

//Local variable declaration.
var y;
console.log(y); //undefined.

//Variable initialization.
y = 17;
console.log(y); //17

//Variable decleration and initialization.
var z = 'Foo';
console.log("z = " + z); //z = Foo

//A redeclared variable doesn't lose its value.
var z;
console.log("z = " + z); //z = Foo

//Hoisting.
xyz = 'xyz';
console.log(xyz); //xyz
var xyz;

//Scope of local variable.
function printVar() {
    var localVar = 18;
    console.log('localVar inside the function ' + localVar); // localVar inside the function 18
    console.log('A variable in the global scope can be accessed inside a function ' + z); // A variable in the global scope can be accessed inside a function Foo
}

printVar();
//console.log('localVar outside of the function ' + localVar);// Throw reference error, localVar is undefined


//********************************GLOBAL VARIABLES****************************************

//Global variables are not declared, they are only initiated.
globalVar = 20;

//Scope of global variable
function printVar2() {
    globalVar2 = 258;
}

printVar2();
console.log(globalVar2); // 258

//An undeclared global variable is not allowed when using 'strict mode'.
function printVar3() {
    'use strict';
    globalVar3= 258;
    console.log(globalVar3);
}
//printVar3();// Will throw an error.

//A variable in the global scope becomes a property of the global object.
console.log(this);