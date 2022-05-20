//WITHOUT CALLBACK:

// const time=1000;

// //Raising a dough
// function raisingDough(){
//     console.log("1.Waiting for Dough...");
//     setTimeout(function(){
//         console.log("2.Dough is ready.");
//         callback();
//     },3*1000)
// }
// raisingDough()

// //Rolling a dough
// function rollingDough(){
//     console.log("3.Rolling a dough...");
//     setTimeout(function(){
//         console.log("4.Rolled");
//     },2*time)
// }
// rollingDough()

// //Pouring the Sauce 
// function pouringSauce(){
//     console.log("5.Pouring Sauce...");
//     setTimeout(function(){
//         console.log("6.Poured Sauce")
//     },1*time);
// }
// pouringSauce()

// //Adding the toppings 
// function addingTopping(){
//     console.log("7.Adding Toppings...");
//     setTimeout(function(){
//         console.log("8.Toppings added");
//     },1*time)
// }
// addingTopping()

// //Baking the pizza 
// function bakingPizza(){
//     console.log("9.Baking the pizza...");
//     setTimeout(function(){
//         console.log("10.Pizza baked");
//     },8*time)
// }
// bakingPizza()

// //Delivery of Pizza 
// function deliverPizza(){
//     console.log("11.Delivering Pizza...")
//     setTimeout(function(){
//         console.log("12.Pizza delivered");
//     },5*time)
// }
// deliverPizza()





//WITH CALLBACK:

const time=1000;

//Raising a dough
function raisingDough(callback){
    console.log("1.Waiting for Dough...");
    setTimeout(function(){
        console.log("2.Dough is ready.");
        callback();
    },3*1000)
}

//Rolling a dough
function rollingDough(callback){
    console.log("3.Rolling a dough...");
    setTimeout(function(){
        console.log("4.Rolled");
        callback();
    },2*time)
}

//Pouring the Sauce 
function pouringSauce(callback){
    console.log("5.Pouring Sauce...");
    setTimeout(function(){
        console.log("6.Poured Sauce");
        callback();
    },1*time);
}

//Adding the toppings 
function addingTopping(callback){
    console.log("7.Adding Toppings...");
    setTimeout(function(){
        console.log("8.Toppings added");
        callback();
    },1*time)
}

//Baking the pizza 
function bakingPizza(callback){
    console.log("9.Baking the pizza...");
    setTimeout(function(){
        console.log("10.Pizza baked");
        callback();
    },8*time)
}

//Delivery of Pizza 
function deliverPizza(callback){
    console.log("11.Delivering Pizza...")
    setTimeout(function(){
        console.log("12.Pizza delivered");
        callback();
    },5*time)
}

//callback hell
raisingDough(()=>{
    rollingDough(()=>{
        pouringSauce(()=>{
            addingTopping(()=>{
                bakingPizza(()=>{
                    deliverPizza(()=>{
                        console.log("Finally Pizza delivery process is over")
                    })
                })
            })
        })
    })
})












