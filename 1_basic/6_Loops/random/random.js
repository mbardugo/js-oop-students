
var pArr = document.getElementsByTagName('p'),
    pArrLength = pArr.length,
    myClasses = ['triangle-up', 'triangle-right', 'trapezoid', 'parallelogram', 'star-six', 'diamond', 'star-five', 'lock', 'cross', 'cone'],
    x = 0,
    classesArrLength = myClasses.length,
    num,
    theClass,
    classUses,
    list = '<ol>';


//Randomly add a class to a 'p' element.
while (x < pArrLength) {
    num = Math.floor(Math.random() * (classesArrLength));
    pArr[x].classList.add(myClasses[num]);
    console.log(num)
    x++;
}

//Count classes in the DOM.

var y = 0;

for (y; y < classesArrLength; y++) {
    theClass = myClasses[y];

    classUses = document.getElementsByClassName(theClass).length;

    list += '<li>' + theClass + ': Appears ' + classUses + ' times.</li>';
}

list += '</ol>';

document.body.innerHTML =  list + document.body.innerHTML;
