//Promie-1
let doProject=new Promise((resolve,reject)=>{
    let isProjectDone=true;
    if(isProjectDone){
        resolve(`1.Project is done   `)
    }else{
        reject("1.No project is not done")
    }
})

//Promie-2
let attendTechnicalRound=new Promise((resolve,reject)=>{
    let isTechnicalRoundAttended=false;
    if(isTechnicalRoundAttended){
        resolve(`2.Technical Round is cleared   `)
    }else{
        reject("2.Technical round fail")
    }
})

//Promie-3
let attendHRround=new Promise((resolve,reject)=>{
    let isHRroundAttended=true;
    if(isHRroundAttended){
        resolve(`3.Cleared HR round also.  `)
    }else{
        reject("No, HR round failed")
    }
})

//Promise dependent on another promise:

// doProject.then((resolve)=>{
//     let msg=`${resolve}`;
//     attendTechnicalRound.then((resolve)=>{
//          msg +=`${resolve}`;
//          attendHRround.then((resolve)=>{
//              msg += `${resolve}`
//              console.log(msg);
//          }).catch((reject)=>{
//             let msg=`${reject}`
//         })
//     }).catch((reject)=>{
//         let msg=`${reject}`
//     })
// }).catch((reject)=>{
//     let msg=`${reject}`
// })
// .finally(()=>{
//     console.log("Inteview process is over.")
// })


//Promise all: 
// let promiseall=Promise.all([doProject,attendTechnicalRound,attendHRround])
// console.log(promiseall)
// promiseall
// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((reject)=>{
//     console.log(reject)
// })
// .finally(()=>{
//     console.log("Inteview process is over.")
// })


//Promise allSettled:
let promiseall=Promise.allSettled([doProject,attendTechnicalRound,attendHRround])
console.log(promiseall)
promiseall
.then((resolve)=>{
    console.log(resolve)
})
.catch((reject)=>{
    console.log(reject)
})
.finally(()=>{
    console.log("Inteview process is over.")
})

//Check what is Promise.race()




