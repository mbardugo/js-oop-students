
console.log('Data types conversion');

var displayHomeWorkBTN = document.getElementById('display-homework');


displayHomeWorkBTN.onclick = function () {
    var homeWorkElement = document.getElementById('home-work');

    if (homeWorkElement.classList.contains('display-none')) {
        homeWorkElement.classList.remove('display-none');
        homeWorkElement.classList.add('displayed');

        displayHomeWorkBTN.innerHTML = 'Hide Homework';
    } else {
        homeWorkElement.classList.add('display-none');
        homeWorkElement.classList.remove('displayed');
        displayHomeWorkBTN.innerHTML = 'Display Homework';
    }
}


var a = {1 : 1,2:2,3:2};
var b = {1 : 1,2:2,3:2};
var v = [1, 2];
var c = [1, 2];
d= c+b;
m = a + b;
console.log(m);
console.log(typeof m);