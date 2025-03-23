import {employees} from '../file-1/1.js';
console.log(employees)

// 1. Find the names(array of names) of employees of Hyderabad

console.log('1.Employees from Hyderabad are:')
for(let v of employees){
    if(v.address.city==="hyderabad"){
        console.log(v.name)
    }
}

// 2. Find the name and address of employees whose age between 40 and 50 

console.log('2.name and address of employees whose age between 40 and 50  are:')
for(let v of employees){
    if(v.age >40 && v.age<50)
    {
        console.log(v.name,v.address)
    }
}

// 3.Find the employees who are not from Hyderabad

console.log('3.Employees who are not from Hyderabad are:')
for(let v of employees){
    if(v.address.city!="hyderabad"){
        console.log(v.name)
    }
}

// Find the names (array of names) of employees whose skill is "reactjs"  

console.log('4.Employees whose skill is reactjs are :')
for(let v of employees){
    for(let x of v.skills)
    {
    if(x==="reactjs"){
        console.log(v.name)
    }
    }
}


