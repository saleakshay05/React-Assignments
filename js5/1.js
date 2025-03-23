// 1. Create student, bus , employee and mobile objects with all possible properties 

let student1={
    name:"rishith",
    id:'23071a7225',
    branch:'ai&ds',
    age:18,
    address:{
        area:'bachupally',
        pincode:500090
    }
}
console.log(student1)

let bus={
    busno:1,
    capacity:40,
    areas:'kphb,kukatpally,nizampet',
    driver:'ramesh'
}
console.log(bus)

let employee={
    name:'ram',
    salary:100000,
    role:'software devoloper',
    address:{
        area:'bachupally',
        pincode:500090
    },
    age:24
}
console.log(employee)

let mobile={
    brand:'samsung s24 ultra',
    ram:'8gb',
    rom:'264gb',
    battery:'5000 mah',
    warranty:'1 year'
}
console.log(mobile)

// 2. Create Student object with properties roll number, name, marks(array),address and method to compute aggregate of marks

let student={
    name:'rakesh',
    rollno:26,
    marks:[65,75,85,100,95],
    address:{
        area:'bachupally',
        pincode:500090,
        hno:'xxxxxxx'
    }
}
let sum=student.marks.reduce((accumulator,element)=>accumulator+element)
console.log('Total sum of his marks:',sum)

// 3. Create product object with properties product number, product name, model, price and a method to return discount price by receiving the discount percentage as argument.

let product={
    productNumber:'236272DAFT27',
    productName:'nike',
    model:'jordan',
    price:'12000',
    discountPrice:function(discount){
        let sp=this.price-((discount/100)*this.price);
        return sp;
    }
}
console.log(product)
console.log('selling price of product is',product.discountPrice(20))
