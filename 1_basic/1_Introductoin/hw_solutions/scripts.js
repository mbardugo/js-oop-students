'use strict';

/***************************** JS SELECTORS *********************************** */
var secondaryTitle = document.getElementById('secondary-title');
console.log(secondaryTitle);


var classSelector = document.getElementsByClassName('class-selector');
console.log(classSelector);


var myForm = document.getElementsByTagName('form');
console.log(myForm)

var queryClass = document.querySelector('.query-class');
console.log(queryClass);

var textInput = myForm[0].querySelector('.textInput');
console.log(textInput);

var theNextElement = document.getElementById('next-element-sibling-selector').nextElementSibling;
console.log(theNextElement);


/***************************** JS EVENTS ************************************/


secondaryTitle.onclick = function () {

    alert('Yay');
}

myForm[0].onsubmit = function () {

    alert('Nice. Now type somehing in the input field.');

    return false;
}


textInput.onkeyup = function(){

    console.log(textInput.value);


}

/***************************** DOM Methods and properties ************************************/

classSelector[2].innerHTML = 'This text was injected to the DOM using JS.'

var myNewDiv = document.createElement('div');

myNewDiv.innerHTML = "I am a div that was created by JS."
document.body.append(myNewDiv);

var mySecondDiv = document.createElement('p');
mySecondDiv.innerHTML = myNewDiv.innerHTML;
document.body.append(mySecondDiv);