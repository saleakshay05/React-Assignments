// 1. Find sum of elements of an array 

let ar=[1,2,3,4,5,10]
let sum=ar.reduce((accumulator,element)=>accumulator+element)
console.log(sum)

// 2.Consider the following array
// [ 1 ,2 , 3, 4 ]
// Create new array by adding 10 to first element, 20 to second element , 30 to third element and so on using map() method.

let ar1=[1,2,3,4]
let result=ar1.map((element)=>{
    if(element===1)
    return element+10
    else if(element===2)
    return element+20
    else if(element===3)
    return element+30
    else
    return element+40
}  
)
console.log(result)

// 3. Consider the following array of students marks

//         [

//             { name:"ravi", marks :{ maths: 89, physics : 70 , chemistry :88}},

//             { name:"bhanu", marks :{ maths: 98, physics : 50 , chemistry :68}},

//             { name:"kiran", marks :{ maths: 50, physics : 82 , chemistry :94}},

//         ]

// Find the names of students who got highest marks in maths , physics and chemistry.

let student=[
    { name:"ravi", marks :{ maths: 89, physics : 70 , chemistry :88}},

    { name:"bhanu", marks :{ maths: 98, physics : 50 , chemistry :68}},

    { name:"kiran", marks :{ maths: 50, physics : 82 , chemistry :94}},
]
// highest marks in maths

let result1=student.reduce((accumulator,element)=>
{
    if(accumulator>element.marks.maths)
    return accumulator
    else
    return element.marks.maths
    }
    )

for(v of student){
    if(v.marks.maths===result1){
        console.log(v.name,"got highest marks in maths")
    }
}

// highest marks in physics

let result2=student.reduce((accumulator,element)=>
{
    if(accumulator>element.marks.physics)
    return accumulator
    else
    return element.marks.physics
    }
    )

for(v of student){
    if(v.marks.physics===result2){
        console.log(v.name,"got highest marks in physics")
    }
}

// highest marks in chemisry

let result3=student.reduce((accumulator,element)=>
{
    if(accumulator>element.marks.chemistry)
    return accumulator
    else
    return element.marks.chemistry
    }
    )

for(v of student){
    if(v.marks.chemistry===result3){
        console.log(v.name,"got highest marks in chemistry")
    }
}



