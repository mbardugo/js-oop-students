'use strict';


//***********************Variables**************************** */

var nameArr = ['Poppy', 'Bella', 'Sasha', 'Boots'],
    nameArrLength = nameArr.length,
    i = 0,
    x = 0, practiceElem = document.getElementsByClassName('practice')[0],
    nameElem,
    nameText, remainder;


//***********************For loop**************************** */

for (i; i < nameArrLength; i++) {
    nameElem = document.createElement('p');
    nameText = document.createTextNode(nameArr[i]);
    nameElem.appendChild(nameText)
    practiceElem.appendChild(nameElem);
}

//****************************While loop********************************* */


while (x < nameArrLength) {
  
    if (nameArr[x].charAt(0) === 'S') {
        break;
    } else if (nameArr[x].charAt(0) === 'P') {
        continue;
    } else {
        console.log(nameArr[x]);
    }
      x++
}

//****************************Do while loop********************************* */


do {

    showUpdatePopup();

} while (reminderPopup());

function reminderPopup() {
    return false;
}

function showUpdatePopup() {
    alert('Would you like to update the program?');
}
