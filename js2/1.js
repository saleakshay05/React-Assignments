// 1. Write a program to find big number of given two numbers

let a=5,b=3,c=6
if(a>b)
{
    console.log("a is greater than b")
}
else
{
    console.log("a is less than b")
}

// 2. Write a program to find big one in given three numbers

if(a>b && a>c)
{
    console.log("a is greater")
}
else if(b>c && b>a)
{
    console.log("b is greater")
}
else
{
    console.log("c is greater")
}

// 3. Write a function to find the factors of a given number

let num=12
function factors(num){
    for(let i=1;i<=num;i++)
    {
        if(num%i===0)
        {
            console.log(i)
        }
    }
}
console.log("facors of 12 are:")
factors(12)

// 4. Write a function to check given number is prime or not
let count=0
prime=function(num){
    for(let i=2;i<num;i++)
    {
       if(num%i===0)
       {
        count++
        break
       }
    }
}
console.log(count)
if(count===0)
{
    console.log('2 is prime')
}
else
{
    console.log("3 is not prime")
}

// 5.Write a function to print even factors of given number

let num1=12
function factors(num1){
    for(let i=1;i<=num;i++)
    {
        if(num1%i===0 && i%2==0)
        {
            console.log(i)
        }
    }
}
console.log("Even facors of 12 are:")
factors(12)


// 6.Write a function to receive a number as arg and return sum of its digits

function sumOfDigits(num){
    let i=10
    let sum=0
    while(num>=1)
    {
        sum=sum+num%i
        num=Math.floor(num/i)
    }
    return sum
 }
 let total=sumOfDigits(12345)
 console.log('sum of digits is :',total)
 let n=23



