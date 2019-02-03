    'use strict';

    //2

    var myList = document.createElement('ul'),
    ans2Elem = document.createElement('li'),
ans2Text = document.createTextNode("7 Data types - 6 primitives and object.");
document.getElementsByClassName('wrapper')[0].appendChild(myList).appendChild(ans2Elem).appendChild(ans2Text);


//4
//CharCodeAt() - a String method that returns the numeric value of a single character in a string by its position.
//If the function gets no position, the default is 0.

console.log('Z123dfh@#$%^'.charCodeAt());

//indexOf() - a string method, an Array method with the same name is also available.
//The method returns the starting position of the first occurrence of a substring in a given string.
//If the substring does not exist in the string, the method returns -1.
//The function's second parameter is optional, it defines the starting position of the search.

console.log('the string that we search in'.indexOf('that'));
console.log('the string that we search in'.indexOf('no match'));


//Includs() -  a string method, an Array method with the same name is also available.
//The method checks for a substring occurrence in a given string and returns the proper boolean value.
//The function's second parameter is optional, it defines the starting position of the search.
//Avaliable for ES6.


console.log('the string that we search in'.includes('that'));
console.log('the string that we search in'.includes('no match'));

//5
//slice() - a string method, an Array method with the same name is also available.


//split();


//lastIndexOf();


//trim();


//replace();


//6
//DO NOT USE THE SECOND METHOD UNLESS YOU HAVE A REALLY GOOD REASON TO.
var firstString = 'Hello',
secondString = new String('world');

console.log(firstString);
console.log(secondString);

console.log(typeof firstString);
console.log(typeof secondString);
