// // // console.log("start")
// // // console.log("Learning Js")
// // // console.log("End")

// // // //asychronous 
// // // console.log("start");
// // // setTimeout(()=>{
// // //     console.log("Hello")

// // // },2000);//2sec
// // // console.log("End")

// // // //setTimeout():execute a function "once" after a specified delay


// // // // `syntax:
// // // // setTimeout(function()){
// // // // //code
// // // // },delay);
// // // // `
// // // //example 1:
// // // setTimeout(function(){
// // //     console.log("Hello students")
// // // },3000);

// // //example2:
// // console.log("Program started")
// // //store time in timer
// // let timer=setTimeout(()=>{
// //     console.log("Loding completed")
// // },5000);
// // console.log(timer)
// // console.log("Program finished")

// // //clearTimeout():stops a timeout before executing
// // clearTimeout(timer);

// // let timer1=setTimeout(()=>{
// //     alert("session expired")
// // },10000);
// // //cancle timeout
// // clearTimeout(timer1)

// // //setInterval():
// // //repeatedly executes a function
// // //after a specified interval

// // // `
// // // setInterval(function(){
// // // //code
// // // },delay);
// // // `
// // //example:
// // // setInterval(function(){
// // //     console.log("Hello")
// // // },2000);

// // //counter Example:
// // let count=1
// // let counter=setInterval(()=>{
// //     console.log(count);
// //     count++;
// //     if(count==10){
// //         clearInterval(counter)
// //     }
// // },1000);

// // // setInterval(()=>{
// // //     let time=new Date();
// // //     console.log(time.toLocaleTimeString());
// // // },1000);
// // //otp expiry
// // //splash screen
// // //Auto logout
// // //delay notification
// // //loading screen

// // //task:change color of body using setInterval
// // // let colors=[
// // //     "red",
// // //     "green",
// // //     "blue",
// // //     "yellow",
// // // ];
// // // let index=0;
// // // setInterval(()=>{
// // //     document.body.style.backgroundColor=colors[index];
// // //     index++;
// // //     if(index ==colors.length){
// // //         index=0;
// // //     }
// // // },2000);

// // //Callbacks:helps you to executes task after another task finishes

// // //callback Functions:passed as argument to another func

// // //callback  func
// // function greet(name){
// //     console.log("hello"+name);
// // }
// // //higher order func
// // function process(Callback){
// //     Callback("Megha");
// // }
// // process(greet);

// //note:setTimeout():uses callback funct

// //setTimeout(function(){
   
// //})

// //async callbacks
// // setTimeout(function(){
// //     alert("Hello")
// // })

// //multiple async tasks:
// // `
// // login
// //   |
// // get users
// //    |
// // get orders
// //     |
// // payments
// //     |
// // logouts

// // setTimeout()--callbacks
// // problem:callback leads to nested code
// // callback hell:occurs when multiple callbacks are nested inside ine another
// // 1.read
// // 2.debug
// // 3.maintain
// // `
// // login(function(){
// //     getprofile(function(){
// //         getorders(function(){
// //             makepayment(function(){
// //                 logout(function(){
// //                     console.log("done")
// //                 });
// //             });
// //         });
// //     });
// // });

// //to solve the above problem
// //promises:represent the eventual completion
// //(or failure) of an asyncronous operation

// //think of it as a promise that somthing
// //will happened in future

// // `
// // promises states

// // pending
// //    |
// // resolved(success)
// //     or
// // rejected(failure)

// // syntax:
// // let promise=new promise(function(resolve,reject){

// // });

// // `
// //create a promise
// let promise=new 
// Promise((resolve,reject)=>{
//     resolve("success");
// });
// console.log(promise)
// //resolve is called:op is successful

// //handle the success
// promise.then((result)=>{
//     console.log(result)
// });

// //reject():called when op fails
// let promise1 = new 
// Promise((rsolve,reject)=>{
//     reject("Network Error");
// });
// promise1.catch((error)=>{
//     console.log(error)
// });

// //then():successful execution
// //catch():ued to handle the errors

// function login(){
//     return new
//     Promise((resolve,reject)=>{
//         let success=true;
//         if(success){
//             resolve("login successful")
//         }
//         else{
//             reject("Login Failed")
//         }
//     });
// }
// login()
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error)
// });

// //callback hell:
// login(function(){
//     profiler(function(){
//         orders(function(){
//             console.log("chaining process")
//         });
//     });
// });
//promises
// login()
// .then(getprofile)
// .then(getorders)
// .catch(error).

//Fake API call
// function fetchData(){
//     return new
//     Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Data Received")
//         },3000);
//     });
// }
// console.log("Loading....")
// fetchData()
// .then((data)=>{
//     console.log(data)
// })
// console.log("please wait...")

// `
// Promise Flow:

// create a promise
//      |
//     pending-->reject()->.catch
//        |   no
//     success?
//       |yes
//       resolve()
//       |
//       .then() 

// `

//drawback on promises:
//it works well but when multiple async operations are involved 
//the code becomes difficult to read

//javascript "Async/Await"
//makes asunc code look like
//syncronous code

//what is async await:
//syntatic sugar built on top of promises
//it makes async code:

// `
// 1.easier to read
// 2.easier to write
// 3.easier to debug
// 4.easier to maintain
// `
//  login()
//  .then(getprofile)
//  .then(getOrders)
//  .then(makePayment)
//  .catch(handleError)

//  //async/await
// async function app(){
//     const user=await login();
//     const profile=await getprofile();
//     const orders=await getOrders();
// }
//async-->keyword used before function
//it will automatically makes the function returns a promise

//async function function_name()
//async makes the func return a Promise
async function greet() {
    //returned value automatically becomes
    //promise.resolve(...)
    return "Welcome to college";
}
//calling 
greet().then((message)=>{
    console.log(message)
});

//returns numbers
async function add(){
    return 100;
}
add().then((result)=>{
    console.log(result);
});

//awat:keyword waits until a promise is completed
//this can be only used inside async funct
//Example:
function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data loaded")
        },3000);
    });
}
async function display() {
    let data=await fetchData();
    console.log(data)
}
display();
//Task: login promise-create
//use async await to finish the above promise
async function userlogin(){
    let result2=await fetchData();
    console.log(result2)
}
userlogin();

//error handling:

`
try{
  risky code
}
catch(error){
   //handle error
}
`
try{
    console.log(a)
}
catch(error){
    //this block will be excuted
    //instead of crashing  
    console.log(error);
}

//try-catch with async await
function payment(){
    return new
    Promise((resolve,reject)=>{
        let success=true;
        if(success){
            resolve("Payment successful");
        }
        else{
            reject("Payment Failed");
        };
    });
}
async function makePayment(){
    try{
        let result=await payment();
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("transaction completed")
    }
}
makePayment();