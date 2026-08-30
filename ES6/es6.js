// ES6 concept:
// `` ---Template Literal `${}`

// old method
//without es6
var name ="Megha";
console.log("hello",+name)

// with ES6
const name1="Megha";
console.log(`hello ${name1}`)

// let vs var
var name ="Rahul";
var name ="Sanjay";
console.log(name)
// var redeclares the variable 
// which can lead to bugs

// Let: when the value needs to change

let age = 22;
age=33;
console.log(age)
//const: when you dont want to change the value
const pi = 3.14
// pi = 3.11
// console.log(pi)

// objects with const
// values can be modified

const student={
    name:"megha",
};
student.name = "Rahul";
console.log(student)

// Arrow functions:
//normal functions
function greet(){
    console.log("Welcome");
}
greet()
function greet(){
    return "hello"+name
};
// calling:
greet()

// with arrow function
// const greet=(name)  =>{
//     return "hello"+name
// };
// console.log(greet("Megha"))
//single line short func
const greet1=name=>`Hello ${name}`;
const addition=(a,b)=>{
    return a+b
}
console.log(addition(10,20))
//task:create an arrow func to calculate simple interest
const simpleInterest=(principal,rate,time)=>{
    return (principal*rate*time)/100;
};
console.log(simpleInterest(10000,5,2))

//why arrow func in react
// const App=()=>{
//     return <h1>Hello</h1>
// }
//expressions:
let a=10;
let b=20;
console.log(`sum is ${a+b}`)

//multiline line strings:
let message=`
Hello I am a Good girl 
also a good student`;
console.log(message)
//default parameters
function greet3(name="Guest"){
    console.log(`Hello ${name}`)
}
greet3();

const greet4=(name="megha")=>{
    console.log("Hello" + name)
};
greet4()
//destucturing:allows extracting values from arrays or objects into variables
//without destructing
let colors=["Red","Blue","Green","Violet"];
let first =colors[0];
console.log(first)
let second =colors[1];
console.log(second)

//with destructuing:
let [first1,second1]=colors;
console.log(first1)
console.log(second1)

let numbers=[10,20,30,40,50]
// let a=10;
// let b=20;
// let c=30;
//skips the values
let [x,,z]=numbers;
console.log(x)
console.log(z)
//RestOperator with destructuring
let [first2,...remaining]=numbers;
console.log(first2);
console.log(remaining);

//object destructing
let faculty={
    name8:"Ramesh",
    branch2:"CSE",
    f_id:100
}
// let name5=faculty.name;
// let branch=faculty.branch

//destructuring
let {name8,branch2}=faculty;
console.log(name8)
console.log(branch2)

//renaming the variables
let {name8:FacultyName}=faculty;
console.log(FacultyName)
console.log(faculty)

//default values
let {name8:FacultyName1,city="Hyd"}=faculty;
console.log(city)

//nested object destructuring
let Student={
    first_name:"Jolly",
    address:{
        city1:"Hyderabad",
        state:"TS",
    }
};
let{address:{city1}}=Student
console.log(city1)

//advanced ES6 concepts
//spread operator(...):
//expand an array or object into individual
//elements or properties
//usedd for:
//1.copy arrays
//2>merge arrays
//3.copy objects
//4.merge objects
//5.pass array elements
//as function arguments

//syntax:...array,...object

//example:
let nums=[10,20,30,40]
//spread expands array into individual vallues
console.log(...nums)

//example-2:
let arr1=[10,20,30,40]
let arr2=[...arr1];
arr2.push(60);
console.log(arr1);
console.log(arr2);

//example-3:
let frontend=["HTML","CSS"]
let backend=["Node","Express"]
let fullstack=[...frontend,...backend]
console.log(fullstack)

//spread object
let frnds={
    f_name:"Julie",
    age:22
};
let copy={
    ...frnds
}
console.log(copy)

//merging the objects
let personal={
    firstname:"Meghana"
}
let address={
    current_city:"Hyde"
}
let merged={
    ...personal,
    ...address
};
console.log(merged)

//Rest Parameters:(...)
//spread-->expand the values
//rest-->collects the value

//syntax:
//function demo(...values){}
function sum_demo(...numbers){
    let total=0
    for(let num of numbers){
        total+=num;
    }
    return total
}
console.log(sum_demo(10,20,30))
console.log(sum_demo(10,20,30,40,50))

function student(name,...marks){
    console.log(name)
    console.log(marks)
};
student_marks("Rahul",80,40)
//enhanced object literals
//object creation will shorter
//without es6
let f_name="Meghana";
let l_name="sree";
//self.name=name
let Employee={
    f_name:f_name,
    l_name:l_name
}
console.log(Employee)
//with es6
let company={
    f_Name,
    l_name
}
console.log(company)