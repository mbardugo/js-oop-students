'use strict';

var myForm = document.querySelector('#myForm');

myForm.onsubmit = function(){

var inputs= document.getElementsByTagName('input');


var results = inputs[0].value + inputs[1].value;

myForm.innerHTML += results;

return false;
}

