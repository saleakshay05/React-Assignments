// 1. Create Employee class and add properties name, age, basic and add getSalary method to its prototype. Create 5 Employee objects and print their salaries.

class Employee{
    // properties
    name;
    age;
    salary;

    // constructor

    constructor(name,age,salary)
    {
        this.name=name;
        this.age=age;
        this.salary=salary
    }

    // method

    getSalary=function(){
        return this.salary
    }
}

let employee1=new Employee('ramu',23,100000)
let employee2=new Employee('ramesh',24,90000)
let employee3=new Employee('kiran',22,190000)
let employee4=new Employee('rajesh',25,290000)
let employee5=new Employee('ravi',21,70000)
console.log(employee1)
console.log(employee2)
console.log(employee3)
console.log(employee4)
console.log(employee5)
console.log(employee1.getSalary())
console.log(employee2.getSalary())
console.log(employee3.getSalary())
console.log(employee4.getSalary())
console.log(employee5.getSalary())

// 2. Create Product class and add properties brand, price, model and add getDiscountPrice method to its prototype. Create 5 Products objects and print their discount price.
// Note: For each object of these 5 , send different discount percentages as argument

class Product{
    brand;
    price;
    model;

    constructor(brand,price,model){
        this.brand=brand;
        this.price=price;
        this.model=model;
    }

    getDiscount(discount){
          let sp=this.price-(discount/100*(this.price));
          return sp
    }
}
console.log(Product)

let product1=new Product('samsung',130000,'s24 ultra')
let product2=new Product('samsung',100000,'s23 ultra')
let product3=new Product('samsung',34000,'s21 fe')
let product4=new Product('apple',130000,'15 pro max')
let product5=new Product('apple',100000,'15 pro')
console.log(product1)
console.log(product2)
console.log(product2)
console.log(product3)
console.log(product4)
console.log(product5)
console.log(product1.getDiscount(10))
console.log(product2.getDiscount(20))
console.log(product3.getDiscount(5))
console.log(product4.getDiscount(15))
console.log(product5.getDiscount(12))