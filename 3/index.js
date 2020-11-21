const p = 600851475143;
const total = 0;
const listToMax = [];
const primeList = [];
const primeFactorList = [];

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

/* function factorsOf(num){
    let factorsOfNum = [];
    for(let i = 1; i <= num/2; i+= 2){
        if(num % i == 0){
            factorsOfNum.push(i)
        }
    }
    return factorsOfNum
} */

for (let i = 2; i <= p / 2; i += 1) {
  const otherFactor = p / i;
  if (p % i == 0) {
    if (isPrime(otherFactor)) {
      console.dir(otherFactor);
      process.exit(3445349);
    }
  }
}

/* factorsOf(p).forEach(function(num) {
    p/num
    if(isPrime(num)){
        return num;
    }
}) */
console.dir(num);
/* console.dir(factorsOf(p))
factorsOf(p).forEach(function(num) {
    if(isPrime(num)){
        primeFactorList.push(num);
    }
})
console.dir(primeFactorList) */

/* while(p < max){
    p += 1
    total += p
    listToMax.push(p)
}
listToMax.forEach((item) => {
    if(max % item == 0){

     }
    else primeList.push(item)

})
console.dir(primeList) */
