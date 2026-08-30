let student ={
    greet:function(){
        console.log("Hello");
    }
};
student.greet()
//with es6
let student1 = {
    greet(){
        console.log("HI");
    }
};
student1.greet()
//Computed property names
let key = "course";
let student2 ={
    [key]:"MERN"
};
console.log(student2);

// Optional Chaining(?.)
// OC safely accesses nested properties
// let faculty ={
//     name:"Ramesh"
// };
// console.log(faculty.address.city)
let faculty1 ={
    name:"Ramesh"
};
//Prevents the error when property is not available
console.log(faculty1.address?.city);

//Nested Example:
let Employee ={
    personal:{
        name:"Tejesh"
    }
};
console.log(Employee.personal?.location);
//Optional Chaining with arrays
let colors =["red","green"];

console.log(colors[1])
console.log(colors?.[5])

//OPC with Functions
let student3 ={
    greet(){
        console.log("Hello Akhil")
    }
};
student3.greet?.()

//Nullish Coalescing(??)
//Provides a default value "Only"
//when the left value is 
//null Or undefined
//Syntax: value??

//Example:
let username = null;
console.log(username??"Guest")

let city;
console.log(city??"somewhere on the earth")

//    ||
let age = 18;
console.log(age || 18);

let score = null;
let result = score??36;
console.log(result);

//React Example:
// const username1 = user?.name??"Guest";
// console.log(username1)

const employee1 ={
    id:101,
    name:"Seema"
};
console.log(employee1.address?.city??"Not available")

// Traditional Method
let arr=[10,20,30,40];
for(let i = 0; i < arr.length;i++){
    console.log(arr[i]);
};
// New Method
arr.forEach((num) => {
    console.log(num);
})

//callback function:
//it is a function passed as an argument
//to another function
function greet(name){
    console.log("Hello"+name);
};
// Higher order function
function process(Callback){
    // calling callback
    Callback("Manish");
};
process(greet);
// callback using arrow function
function process(callback){
    callback()
};
process(()=>{
    console.log("Welcome Students")
});
// Higher order function:
// Higher order function Accepts another function as an argument
// (or)
//  returns another function
//Higher order function
function calculate(operation,a,b){
    return operation(a,b)
}
function add(a,b){
    return a+b;
};
function sub(a,b){
    return a-b;
};
function mul(a,b){
    return a*b;
};
function div(a,b){
    return a/b;
}
function per(a,b){
    return (a/b)*100;
}
console.log(calculate(add,10,20));
console.log(calculate(sub,90,80));
console.log(calculate(mul,100,80));
console.log(calculate(div,90,30));
console.log(calculate(per,5000,50));

// For-Each -->used for iterations
// syntax: array.forEach(function(element){
//});
let numbers= [10,20,30,40];
numbers.forEach(function(num){
    console.log(num)
});
//arrow function:
numbers.forEach((num,index)=>{
    console.log(index,num)
})

//Map():map(function,iterables)->Python
//Create a new array
//Orginal array remains unchanged
let nums = [10,20,30];
let doubled = nums.map((num)=>{
    return num*2
})
console.log(nums)

//let names = ["Rahul","Priya","Vishnu"]
//use map to make all the elements into upper case
let names = ["Rahul","Priya","Vishnu"];
let upper = names.map((ch)=>{
    return ch.toUpperCase();
});
console.log(upper);
let names1 = ["Rahul","Priya","Vishnu"];
let lower = names.map((ch)=>{
    return ch.toLowerCase();
});
console.log(lower);

// filter:returns elements satisfying the condition
let number = [10,15,30,40,50];
let even = number.filter(num => num%2==0);
console.log(even);

// reduce():reduces the array into a single unit

let nums1 = [10,20,30];
let sum = nums1.reduce((total,num)=>{
    return total+num;
},0)
console.log(sum);

// Find():returns the first matching element
let value1 = nums1.find(num => num>25);
console.log(value1);

let students =[
    {id:1,name:"Rahul"},
    {id:2,name:"dinesh"},
];
let stu = students.find(s => s.id==2);
console.log(stu);

//some():returns true if 
//any element satisfies
console.log(nums1.some(num =>num>25));

// every():Returns true if all elements satisfy the condition
console.log(
    nums1.every(num => num>5)
);

// Variable scopes
// Function scope:
function teacher(){
    var hello = 10;
    let age1 = 33;
    console.log(age1);
};
teacher();
// console.log(age1)
// console.log(hello); Advanced_ES6.js:213 Uncaught ReferenceError: hello is not defined
                        //at Advanced_ES6.js:213:13
// Block scope
// Anything inside the {} is block scope
if(true){
    var country = "India"; //can be accessed
    //-function scope only
    let city = "Hyderabad"; // cant--block scope
    const frnd = "Manish"; //cant--block scope
};
console.log(city);
console.log(country);
//console.log(frnd);

if(true){
    var a = 10;
    let b = 10;
    const c = 30;
}
console.log(a)
//console.log(b)
//console.log(c)


// Closures:
// inner function remembers variables from its outer function even after outer function completes its execuition

function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}
const counter = outer();
counter()
counter()
counter()
counter()  

//LEXICAL ENVIRONMENT:
// is created whenever a function is created. 
// stores:variables,functions,reference to parent scope

let x = 10;
function outer(){
    let y = 10;
        function inner(){
            console.log(x);
            console.log(y);
        }
    inner();
}
outer();

// Every function knows where it is created
// that is called lexical env

// Hoe javascript execuites the code

        `
        Javascript File
              |
    Execution Context Created
              |    
       Code Executes
              |
    Function Added To Call Stack
              |
        Program Ends
        
Execution Context Created:
Environmentwhere js code executes
 
-->Every Program:
    Global Execution Context
    
    Every function call creates
    Function execution context

Example:
let a = 10;
function greet(){
    console,log("Hello")
}
greet();

     Global Execution Context
                |
             Greet()
                |
         Function Executed     
                |
            Removed
    
1st phase:Memory creation phase
Js allocation memory
              var a;
        function greet(){}
                 |
         2nd Phase: Execution Phase
    values are assigned and functions are executed
                 |
    #Call Stack :keeps a track of functions
        LIFO -Last in first out
    
    
    
    
    
    
    
    
    
    
    `