

let arrayLength=new Promise ((resolve,reject)=>{
    let data=['one','two','three','four'];
    if(data.length==4){
        resolve("Yes correct length");
    }else{
        reject("No its a wrong guess");
    }
})
console.log(arrayLength)
arrayLength
.then((resolve)=>{
    console.log(resolve)
})
.catch((reject)=>{
    console.log(reject)
})