'use strict';

//1
var numA = 5, 
numB = 99, 
numC,
strA = 'my name is ',
strB = "Popeye",
strC,
boolA = true,
boolB = true,
boolC,
undeA,
undeB = undefined,
undeC,
arrA = [1,2,3],
arrB = [4,5,6],
arrC;


//2
numC = numA + numB;
strC = strA + strB;
boolC = boolA + boolB;
undeC = undeA + undeB;
arrC = arrA + arrB;

console.log(numC);
console.log(strC);
console.log(boolC);
console.log(undeC);
console.log(arrC);

//3

console.log(numA+=strA);
console.log(numA+=boolA);
console.log(undeA+=boolA);
console.log(arrA+=strB);
console.log(strA+=boolA);