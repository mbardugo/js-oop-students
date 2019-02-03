
'use strict';
//1
//Converting a number to a String.
console.log(String(8));

//Converting an object to a String.
console.log(String({name: 'Yossi'}));

//Converting an array to a String.
console.log(String([1,2,3,4,5]));// DATA TYPE CONVERSION:  Array -> String.


//Converting a boolean to a String.
console.log(true.toString());

//Converting a date object to a String.
//When logging it to the console it seems like there is no difference.
//Save each in a variable and check the available methods and properties of each (a has the String methods and b is an object).
console.log(String(new Date()));
console.log(new Date());

var a = String(new Date());
var b = new Date();

//2
//Converting a string to a Number.
//NaN = Not a Number. this result appears when this data type is not convertable to a number.

console.log(Number('a'));
console.log(Number('8a'));
console.log(Number('8'));

//Converting an object to a Number.
console.log(Number({yossi: 'name'}));

//Converting an array to a Number.
console.log(Number([1,2,3,4,5,]));

//Converting a boolean to a NumbFer.
console.log(Number(true));


//Converting a date object to a Number.
console.log(Number(new Date())); //The number is the Unix timespemp

//5
//split() is a String method that splits a given string to an array by a specified delimiter.
//If no delimiter was given a single item array is returned which containes the whole string. 

var myString = "N NA NAH NAHM NAHMA NAHMAN-MEUMAN";

console.log(myString.split(' '));
console.log(myString.split('N'));
console.log(myString.split());