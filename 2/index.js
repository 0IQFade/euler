const max = 4000000;
let total = 0;

function recurse(n1, n2) {
  const n3 = n1 + n2;
  n1 = n2;
  n2 = n3;
  if (n3 > max) {

  } else {
    if (n3 % 2 == 0) {
      total += n3;
    }
    recurse(n1, n2);
  }
}
recurse(0, 1);
console.log(total);
/*
1 + 2 = 3
2 + 3 = 5
3 + 5 = 8
n1 + n2 = n3
n1 = n2
n2 = n3
*/
let i = 0;
while (i < 1000) {
  i = +5;
}
for (let f = 0; f < 1000; f += 5) {
  total1 += f;
  listof5.push(f);
}
