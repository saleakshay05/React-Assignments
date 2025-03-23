// 1. Consider the following string
// aaaabbababababbbbabababaaaa
// Find frequency of "a" and "b".
// Note- Frequency means, the no of times that specific character has appeared.

let string='aaaabbababababbbbabababaaaa'
let counta=''
let countb=''
for(v of string){
    if(v==='a'){
        counta++
    }
    if(v==='b')
    {
        countb++
    }
}
console.log("a repeated",counta,'times')
console.log("b repeated",countb,'times')

// 2.Write a function to receive a string of multiple words as argument and then print the no of words in that string.

let string1='how are you all'
let count=0
let noOfWords=function(string1){
    for(v of string1)
    {
        if(v===' '){
            count++;
        }
    }
    return count+1;
}
console.log("no words in",string1,'are',noOfWords(string1))