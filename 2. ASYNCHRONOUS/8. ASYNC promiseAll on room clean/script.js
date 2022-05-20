let roomClean=new Promise((resolve, reject) => {
    let isRoomClean=true;
    if(isRoomClean){
        resolve("1.Yes room is cleaned")
    }else{
        reject("1.No room is not yet cleaned")
    }
})

let removeGarbage= new Promise((resolve,reject)=>{
    let isGarbageRemoved=false;
    if(isGarbageRemoved){
        resolve("2.Yes Garbage is removed")
    }else{
        reject("2.No Garbage is not yet removed")
    }
})

let getThePrice=new Promise((resolve,reject)=>{
    let wordkdone=false;
    if(wordkdone){
        resolve("Service charge is Rs 1000")
    }else{
        reject("No Service charge")
    }
})

//Promise all
// let promiseall= Promise.all([roomClean,removeGarbage,getThePrice]);
// promiseall
// .then((resolve)=>{
//     console.log(resolve);
// })
// .catch((reject)=>{
//     console.log(reject);
// })
// .finally(()=>{
//     console.log("Thank You!!!")
// })

//Promise allSettled
let promiseall= Promise.all([roomClean,removeGarbage,getThePrice]);
promiseall
.then((resolve)=>{
    console.log(resolve);
})
.catch((reject)=>{
    console.log(reject);
})
.finally(()=>{
    console.log("Thank You!!!")
})