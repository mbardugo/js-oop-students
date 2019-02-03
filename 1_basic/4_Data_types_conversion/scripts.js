
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
