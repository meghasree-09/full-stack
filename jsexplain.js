// conditional statements
//1.if statement
let age =20;
if (age>=18){
    console.log("Eligible:")
}
//2.if else
if (age>=18){
    console.log("eligible")
} 
else{
    console.log("Not eligible")
}
//else if ladder
let marks=85; 
if (marks>90){
    console.log("Grade A")
}
else if (marks>=80){
    console.log("Grade B")
}
else if (marks>45){
    console.log("Grade C")
}
else{
    console.log("Fail")
}
//4.switch statement
let day=2
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid")
    
}
//For loop
for(let i=0;i<=5;i++){
    console.log(i)
}
//print multiplication table of 7
//use template literals

for(let j=0;j<=10;j++){
    console.log(`7 x ${j} = ${7*j}`);
}
//2.do the sum of all odd numbers
//from 5-50
let total=0
for(let k=5;k<=50;k+=2){
    total+=k
}
console.log(total)
//find the factorial of 6
fact=1
for (let l=6;l>=1;l--){
    fact=fact*l

}
console.log(fact);


let u=1;
while(u<=5)
    {
    console.log(u)
    u++;
}
//do while
// let password;
// do{
//     password=prompt("Enter the password")
// }while(password!=1234){
//     console.log("Login success")

// }f
//do while executes atleast 1 even the condition is false
//while
// while (password!=1234){
//     password=prompt("enter the password")
// }
// Break:
// immediately terminates the loop
for(let i=1;i<=10;i++){
    if(i==5){
        break;
    }
    console.log(i)
}
//continue'skips the current iteration
for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i)
}
//Do the sum of the first n numbers
let p=Number(prompt("Enter the number"))
let total1=0
for (let b =1;b<=p;b++){
    total1=total1+b
}
console.log(total1)