let max = 4000000
let total = 0

function recurse (n1, n2) {
    n3 = n1 + n2;
    n1 = n2
    n2 = n3
    if (n3 > max) {
        return
    }
    else {
        if (n3 % 2 == 0) {
            total += n3;
        }        
        recurse (n1, n2);  
    }
}
recurse(0,1)
console.log(total)
/*
1 + 2 = 3
2 + 3 = 5
3 + 5 = 8
n1 + n2 = n3
n1 = n2
n2 = n3
*/