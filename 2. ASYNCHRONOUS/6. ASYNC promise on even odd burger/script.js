// let getPromiseBurger= new Promise((resolve,reject)=>{
//     let number=Math.floor(Math.random()*10);
//     console.log(number);
//     if(number%2==0){
//         resolve("Yes..!! Here is your promised Burger")
//     }else{
//         reject("No.. Your promised burger is rejected")
//     }
// })
// getPromiseBurger
// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("Have a Good day!!!")
// })



//Promise o Room clean
let getRoomCleaned=new Promise((resolve,reject)=>{
    let roomClean=false;
    if(roomClean){
        resolve("Yes.. Your room is cleaned.")
    }else{
        reject("No..Your room is not yet cleaned.")
    }
})
getRoomCleaned
.then((resolve)=>{
    console.log(resolve)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("Thanks for contacting us.")
})