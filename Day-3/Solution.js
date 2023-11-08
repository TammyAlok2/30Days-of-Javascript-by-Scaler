/*
Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.

*/
let n =60;
function  isRight(n){
    if(n>=50 && n<=99){
        return true;
    }
    else {
        return false;
    }
}

let ans = isRight(n);
console.log(ans)