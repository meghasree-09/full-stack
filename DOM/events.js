
//selecting of elements
let button=document.getElementById("btn")
// console.log(button)
let form=document.getElementById("loginform")
let course=document.getElementById("course")
let picker=document.getElementById("colorpicker")
let input=document.getElementById("username")
let count=document.getElementById("count")
let button1=document.getElementById("button1")
let button2=document.getElementById("button2")

//DOM manipulaion
function showmessage(){
    alert("Hello")
}
function login(event){
    //help you to stop page reload
    event.preventDefault();
    alert("form submitted")
}
//change-->occur when the event changes

//event listener
//external event
form.addEventListener("submit",login)
// button.addEventListener("click",showmessage)

//change event
course.addEventListener("change",function(){
    let current_value=course.value;
    console.log(current_value)
});

//color picker
picker.addEventListener("change",function(){
    document.body.style.backgroundColor=picker.value;
});

//keyup:event-->when the key releases
input.addEventListener("keyup",function(){
    count.innerText=input.value.length
    console.log(input.value)
});

//task:light bulb example
//with two buttons switch on and off
//bulb on and off
button1.addEventListener("click",function(){
    button1.style.border = "2px solid yellow";
});
button2.addEventListener("click",function(){
    button2.style.border = "2px solid white";
});
//event object:
button.addEventListener("click",function(event){
    console.log(event.target);
    console.log(event.type);                    
    console.log(event);

});

//properties:
//1.target--Element thet trigered the event
//2.type-- event name
//3.value--current input value
//4.preventDefault()-->stops the reloading


