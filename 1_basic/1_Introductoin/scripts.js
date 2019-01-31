'use strict';

var displayHomeworkBTN = document.getElementById('display-homework');


displayHomeworkBTN.onclick = function () {
    var homeworkElement = document.getElementById('home-work');

    if (homeworkElement.classList.contains('display-none')) {
        homeworkElement.classList.remove('display-none');
        homeworkElement.classList.add('displayed');
        displayHomeworkBTN.innerHTML = 'Hide Homework';
    } else {
        homeworkElement.classList.add('display-none');
        homeworkElement.classList.remove('displayed');
        displayHomeworkBTN.innerHTML = 'Display Homework';
    }
}


