// //selecting  the elements
// let heading=document.getElementById("title")
// console.log(heading)
// //2nd method
// //query method
// //query selector():
// //Return the first matching element
// //id,class,tag
// let heading1=document.querySelector("#title");
// console.log(heading1)
// //selecting by class
// let Bio=document.querySelector(".bio")
// console.log(Bio)
// //selecting by tagname
// let head2=document.querySelector("h2")
// console.log(head2)
// //Selecting all same tags
// let paragraphs = document.querySelectorAll("p");
// console.log(paragraphs)

// //Loop through the elements
// paragraphs.forEach((item)=>{
//     console.log(item.innerText);
// });


// //manipulation:change the text
// heading.innerText="welcome to chalapathi";

// //reading the element:
// console.log(
//     document.getElementById("title").innerText
// );
// //read the html
// console.log(
//     document.getElementById("title").innerHTML
// );

document.getElementById("course").innerHTML="Javascript"

//changing multiple elements
let paragraphs = document.querySelectorAll("p");

paragraphs.forEach((para)=>{
    para.innerText="all"

});
//js can change css also
function changeStyle(){
    let heading=document.getElementById("title")
    heading.style.backgroundColor= "yellow";
    heading.style.fontSize= "40px";
    //border
    heading.style.border="2px solid black";
    heading.style.width="300px";
}
