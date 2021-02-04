
/*
3,6,9,12,15,18,21
5,10,15,20,25
*/
let total = 0

for (let i = 0; i < 1000; i += 3) {
  total += i
}
for (let i = 0; i < 1000; i += 5) {
  if(i % 15 !== 0) {
    total += i
  }
}
console.log(total)