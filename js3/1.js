// 1. Take a number array and find the sum of elements of it.

let arr=[1,2,3,4,5]
let sum=0
for(a of arr)
{
    sum=sum+a
}
console.log('sum of numbers in given array is:',sum)

// 2.Take a number array and print even numbers of it

let ar=[1,2,3,4,5,6]
console.log('even numbers in given array are:')
for(b of ar)
{
    if(b%2==0)
    {
        console.log(b)
    }
}

// 3. Take a number array and print prime  numbers of it

let arr1=[2,3,4,5,6,7]
console.log("Prime numbers in given array are:")
for(p of arr1)
{
    let count=0
    for(i=2;i<p;i++)
    {
        if(p%i===0)
        {
            count++;
        }
    }
    if(count===0)
    {
        console.log(p)
    }
}
