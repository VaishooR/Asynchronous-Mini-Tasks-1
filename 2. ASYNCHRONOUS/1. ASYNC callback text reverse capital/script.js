
//Uppercase a string
let makeUpperCase=(text1)=>{
    return text1.toUpperCase();
}
//Reverse string
let reverseString=(text1)=>{
    return text1.split("").reverse().join("")
}
//Use above two functions as callback
let handleName=(text1,callback)=>{
    return callback(text1)
}

console.log(handleName("Orange",makeUpperCase)); //makeUpperCase() function is added as an argument to handleName() function.
console.log(handleName("Orange",reverseString)); //reverseString() function is added as an argument to handleName() function.