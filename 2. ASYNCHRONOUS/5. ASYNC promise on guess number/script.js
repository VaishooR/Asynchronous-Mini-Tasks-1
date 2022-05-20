let actualNum=5;
let guessNum= new Promise((resolve, reject) => {
    let guessNum=Math.floor(Math.random()*10);
    console.log(guessNum);
    if(actualNum==guessNum){
        resolve("Correct Guess!!!");
    }else{
        reject("Wrong Guess");
    }
})
console.log(guessNum);


guessNum
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})