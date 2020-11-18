let p = 600851475143
let total = 0
let listToMax = [];
let primeList=[];
let primeFactorList = [];

function isPrime(num){
    for(let i = 2; i < num; i+= 1) {
        if(num % i == 0){
            return false
        }
    }
    return true
}

function factorsOf(num){
    let factorsOfNum = [];
    for(let i = 1; i <= num/2; i+= 2){
        if(num % i == 0){
            factorsOfNum.push(i)
        }
    }   
    return factorsOfNum
}


factorsOf(p).forEach(function(num) {
    p/num
    if(isPrime(num)){
        return num;
    }
})
console.dir(num)
/*console.dir(factorsOf(p))
factorsOf(p).forEach(function(num) {
    if(isPrime(num)){
        primeFactorList.push(num);
    }
})
console.dir(primeFactorList) */



/*while(p < max){
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