// 1. Write a program to implement Arithmetic operations
// arithematic operator(+,-,*,/)
let a=10,b=2
console.log("Sum of two numbers is",a+b)
console.log("Difference of two numbers is",a-b)
console.log("division of two numbers is",a/b)
console.log("Multiplication of two numbers is",a*b)

// 2. Write a program to test unary increment & decrement operators
// Unary increment
let x=++a
console.log("value of a is",a) 
console.log("value of x is",x)
// here a is incremented first and value of a is assigned to x
// value of a is 11
// value of x is 11
let y=b++
console.log("value of b is",b) 
console.log("value of y is",y)
// here value of b is assigned to y first and then value of b is incremented
// value of b is 3
// value of y is 2

let p=--a
console.log("value of a is",a) 
console.log("value of p is",p)
// here a is incremented first and value of a is assigned to x
// value of a is 10
// value of p is 10
let q=b--
console.log("value of b is",b) 
console.log("value of q is",q)
// here value of b is assigned to y first and then value of b is incremented
// value of b is 3
// value of q is 2

// 3. Write a program to verify comparison operators
let s=2,t=3
console.log(s>t)
console.log(s<t)
let s1=2,s2='2'
console.log(s1!=s2)
console.log(s1!==s2)

// 4. Write a program to find difference between == and === operators
let a1=3,a2='3'
console.log(a1==a2)
// '==' operator does not check about the data type it just compares the values 
// output:true
console.log(a1===a2)
// '===' operator does check about the data type and the values it is strict equal to operator 
// output:false
