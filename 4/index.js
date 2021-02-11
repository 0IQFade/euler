function isPalindrome(num){
    let numString = num.toString()
    let numLength = numString.length
    let halfLengthnum = Math.floor(numLength/2)
    let firstHalfPalindrome = numString.slice(0,halfLengthnum)
    let secondHalfPalindrome = numString.slice(halfLengthnum * -1).split('').reverse().join('');
   
    return firstHalfPalindrome == secondHalfPalindrome
}
let biggestPalindrome = 0
for (let i = 999; i >= 100; i -= 1){
    for (let k = 999; k >= 100; k -= 1){
        if(isPalindrome(i * k) == true){
            if (i * k > biggestPalindrome){
                biggestPalindrome = i * k
            }
        }
    }
}
console.log(biggestPalindrome)