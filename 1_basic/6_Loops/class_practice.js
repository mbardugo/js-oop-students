'use strict';

//1
let nameArrLength = nameArr.length,
    listString = '<ol>';

for (let i = 0; i < nameArrLength; i++) {

    listString += '<li>' + nameArr[i] +  '</li>';
}

listString += '</ol>';

document.getElementsByClassName('practice')[0].innerHTML = listString;

//2
var x = 0,
string = '',
pElem = document.createElement('p');

while(x < nameArrLength ){
string += nameArr[x].toUpperCase() + ", ";
    x++;
}

document.getElementsByClassName('practice')[0].innerHTML += string;

//3
var newString = string.substring( 0, string.length - 2) + ".";
pElem.innerHTML = newString;

document.getElementsByClassName('practice')[0].append(pElem);


//4
var str2 = nameArr.toString().toUpperCase() + '.';
document.getElementsByClassName('practice')[0].append(str2);

//5
var msg = "",
i = 0;

while (i < numArr.length) {

    if (numArr[i] % 4 > 0 && numArr[i] % 3 == 0) {
        i++;
        continue;
    }

    if (numArr[i] % 4 == 0) {

        if (numArr[i] % 50 === 0) {
            break;
        }

        msg = " The number is divisible by 4";

        if (numArr[i] % 3 === 0) {
            msg = " The number is divisible by 12";
        }
    }

    console.log(numArr[i] + msg);

    i++;
}