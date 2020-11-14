let max = 600
let p = 0
let total = 0
let listToMax = [];
let primeList=[];
while(p < max){
    p += 1
    total += p
    listToMax.push(p)
}
listToMax.forEach((item) => {  
    if(max % item == 0){
    item += 1
     }
    else primeList.push(item)

})
console.dir(primeList)