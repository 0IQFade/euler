/*
let b = "ryan";
let total = 0;
console.log(b);
let myArray = [1, 2, 3, 4, "ryan"];

function add(x, y) {
    return x + y;
}

myArray.forEach((item) => {
    total = add(total, item);
});


console.log(add(5, 6)); 
*/

let total = 0
let listof3 = [];
for(let i = 0; i < 1000; i= i+3) {
    total = total + i;
    listof3.push(i);
}
console.dir(total);
console.dir(listof3);


let total1 = 0
let listof5 = [];

for(let f = 0; f < 1000; f = f+5) {
    total1 = total1 + f;
    listof5.push(f);
}
console.log(total1)
console.dir(listof5)

let listOfCommon = [];
listof3.forEach((o) => {
    if (listof5.includes(o)) {
        listOfCommon.push(o);
    }
})
console.dir(listOfCommon)

let total2 = 0;
listOfCommon.forEach ((j) => {
    total2= total2 + j;
})
console.log(total2)
console.log(total + total1 - total2) 