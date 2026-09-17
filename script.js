//functions:it is a reusable block of code which performs some action

//python example
// def function_name(parameters):
//     statements
// function_name(arguments)

//js function example

//define the function
function greet(){
    //code to execute
    console.log("welcome students")
}
//calling the function
greet()
greet()
greet()

function greeting(name){
    console.log(`hello ${name}`)
}
//call the function
greeting("megha")
//multiple params
function add(a,b){
    console.log(a+b)
}
add(2,3);
//return:sends backs the value where the function is called
//not using return
// function sub(a,b){
//     console.log(a-b)
// }
// let result=sub(10,5)
// console.log(result)

function sub(a,b){
    return a-b;
}
let result=sub(10,5)
console.log(result);

//task:write a function for a square of a number
function square(a){
    return a**2
    console.log("Finished")

}
let squ=square(3)
console.log(squ)

function test(){
    return "Hello";
    console.log("this code will never execute")
}
let test1=test()
console.log(test1)
//variable scoops
let college="CITY"
function showcollege(){
    console.log(college)
}
showcollege();

//local variable
function showAge(){
    let age=20;//local variable
    console.log(age)
}
showAge();
//console.log(age)//we get referrence error because it is a local variable
//Hoisting:
//Js moves declarations to the top before the execution
console.log(name1)
var name1="megha";
//how js sees excatly:
// var name1;
// console.log(name1)
// name1="Megha"
// console.log(age1)
// let age1=20;
//hoisting with const
// console.log(city)
// const city="Hyd"
//hoisting with functions
greeting1()
function greeting1(){
    console.log("Hello")
}
//functions are completely hoisted

//function Expression:
//store inside a variable

//let result1=greeting1()
//function stored in a variable
let display = function(){
    console.log("Hello students")
}
display()
//hoisting with a function expression
// test2()

// let test2=function(){
//     console.log("Hi")
// }

//example2
// console.log(calculate_area(3,5))
// let calculate_area=function(lenght,breadth,width){
//     return lenght*width;
// }
//create a function that returns largest of two number
function largest(a,b){
    if(a>b){
        console.log("a is greater number")
    }
    else{
        console.log("b is greater")
    }
}
largest(4,5)
//creat a function expression to calculate area of circle
let circle_area=function(r){
    return 3.14*r*r
}
console.log(circle_area(3))

//arrays:collection of elements
//collection of multiple values stored in a single variable
//array=["Meghana",3.14,True]--python
// let newArray=[value1,value2,value3]
let arr=["Apple","Banana","Custard",3.14,true]
//        0        1         2       3     4
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])//slicing doesnot supports here
let numbers=[10,20,30,40]
console.log(numbers[numbers.length-1])
//returns length
console.log(numbers.length)
//modify the element
numbers[0]=9
console.log(numbers)

//traversing
//traversal:visiting each and every element
let fruits=["apple","banana","pine"]
//using for loop
for(i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
//for.....of loop
for(let fruit of fruits ){
//fruit is storing the current element
    console.log(fruit)
}
//task
let k=[10,20,30,40,50]
let sum=0
for(let number of k){
    sum=sum+number
}
console.log(sum)
//task:find the largest element
let h=[10,50,60,90,5,95]
let biggest=0
for(i=0;i<h.length;i++){
    if(h[i]>biggest){
        biggest=h[i]
    }
}
console.log(biggest)
//push--adding the element at last
h.push(5)
console.log(h)
//multiple values at a time
h.push(10,20)
console.log(h)
//pop removes the last element
h.pop()
console.log(h)
//restoring the removed element
let removed=h.pop();
console.log(removed)
//remove the first element
let firstremoved=h.shift();
console.log(firstremoved)
//add element at the beginning
h.unshift(10);
console.log(h)

//python--slicing
//arr[start:end:step]
//splice()--js
//used for --1.adding elements,2.del,3.replaceing elements
//syntax:
// Array.splice(startIndex,delete_index,new_values)
let veggies=["carrot","beetroot","brinjal"]
 //deleting       0        1          2
veggies.splice(1,1)
//1-->start index
//1-->delete index
console.log(veggies)
//add
veggies.splice(1,0,"bittergaurd")
console.log(veggies)
//replace
veggies.splice(1,1,"bottle gaurd")
console.log(veggies)

//slice-->creates a copy of a portion of an array
//array/slice(start,end)
let num=[10,20,30,40,50]

let result2=num.slice(0,3)
console.log(result2)

//copy the entire array
// let num=[10,20,30,40,50]

// let result2=num.slice()
// console.log(result2)
//task:arr[10,20,30,40,50,60]
//create a new array containing elements from index 2-4
let r=[10,20,30,40,50,60]
let g=r.slice(2,5)
console.log(g)

//string:sequence of characters
//closed'',"",``
// let name="megha"
// let name1='megha'
// let name2=`megha`
//indexing in string
let str="hello"
console.log(str[0])
console.log(str[1])
console.log(str[2])
//string length
console.log(str.length)
//string is immutable
str[0]="s"
console.log(str[0])
//traverse over the string
for(i=0;i<str.length;i++){
    console.log(str[i])
}
//for..of
for(let ch of str){
    console.log(ch);
}
//string methods
let firstname="Raju"
console.log(firstname.toUpperCase());
console.log(firstname.toLowerCase());

let hello=" Bye ";
//to remove extra spaces
console.log(hello.trim())

//includes()
let course="JavaScript";
console.log(course.includes("Script"))

//startswith
console.log(firstname.startsWith("R"))
//endswith
console.log(firstname.endsWith("u"))

//indexof:
console.log(firstname.indexOf("R"))
//lastindexof
console.log(firstname.lastIndexOf("a"))

//replace():
let str1="I love javascript"
console.log(str1.replace("javascript","Python"))
console.log(str1)

//ReplaceAll():
let str2="cat dog cat"
console.log(str2.replaceAll("cat","lion"))


//slice
console.log(course.slice(0,3))

//substring:
let str3="Programming"
console.log(str3.substring(3,8))

//split():
let str4="HTML,CSS,REACT "
console.log(str4.split(","))
//charAt
console.log(str4.charAt(4))

//concat():
let first="Meghana"
let last="Sree"
console.log(first.concat(" ",last))

//object:collection of key :values
let student={
    //complex nested obj
    personal:{
        name:"Meghana",
    rollno:22,
    course:"MERN"
    },
    is_permanent:true,
    greet:function(){
        console.log("Welcome")
    },
    //nested objects
    address:{
        city:"Hyd",
        state:"TG",
        pincode:123456
    }
};
student.greet()
console.log(student)
//let name="meghana"
//let rollno=22
//let course="MERN"
console.log(student.name)
console.log(student.rollno)
console.log(student.course)

//Add a new property:
student.city="Hyderabad"
console.log(student.city)

//update the value
student.rollno=22;
console.log(student.rollno)

//delete property
delete student.city;
console.log(student)

//Task:create an object 
// named:Employee
// store the details of employee
// update the salary to 45000
// remove the city
// write a function expression inside the object and call it outside
//add birth details in a nested obj

let Employee = {
    name: "Meghana",
    city: "Guntur",
    salary: 40000,

    birth: {
        date: 22,
        month: "September",
        year: 2005
    },
    greet: function() {
        console.log("Hello " + this.name);
    }
};
Employee.salary = 45000;
delete Employee.city;
Employee.greet();
console.log(Employee.birth);
console.log(Employee);


//other way
let employee={
    name:"megha",
    idno:9,
    salary:40000,
    job:"Developer",
    cuty:"Bengaluru"
};
//for..in loop
for(let key in employee){
    console.log(key,employee[key])
}
//only keys
console.log(Object.keys(employee))
//only values
console.log(Object.values(employee))
//in a list format
console.log(Object.entries(Employee));
//for..of
for(let[keys,value] of 
    object.entries(employee)){
        console.log(key,value);
    }