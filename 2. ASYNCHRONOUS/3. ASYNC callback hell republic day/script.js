//Console wishes:
let wishes=document.querySelector('#wishes');
setTimeout(function() {
    console.log("10");
    setTimeout(function(){
        console.log("9");
        setTimeout(function() {
            console.log("8");
            setTimeout(function() {
                console.log("7");
                setTimeout(function() {
                    console.log("6");
                    setTimeout(function() {
                        console.log("5");
                        setTimeout(function() {
                            console.log("4");
                            setTimeout(function() {
                                console.log("3");
                                setTimeout(function() {
                                    console.log("2");
                                    setTimeout(function() {
                                        console.log("1");
                                        setTimeout(function() {
                                            console.log("Happy Independence Day");
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)



//Browser wishes 
// let countdown=document.querySelector('#wishes');
// setTimeout(function() {
//     countdown.innerHTML ="10";
//     setTimeout(function(){
//         countdown.innerHTML ="9";
//         setTimeout(function() {
//             countdown.innerHTML ="8";
//             setTimeout(function() {
//                 countdown.innerHTML ="7";
//                 setTimeout(function() {
//                     countdown.innerHTML ="6";
//                     setTimeout(function() {
//                         countdown.innerHTML ="5";
//                         setTimeout(function() {
//                             countdown.innerHTML ="4";
//                             setTimeout(function() {
//                                 countdown.innerHTML ="3";
//                                 setTimeout(function() {
//                                     countdown.innerHTML ="2";
//                                     setTimeout(function() {
//                                         countdown.innerHTML ="1";
//                                         setTimeout(function() {
//                                             countdown.innerHTML ="Happy Independence Day";
//                                         },1000)
//                                     },1000)
//                                 },1000)
//                             },1000)
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)



//Browser wishes by using timer--
let timer=10;
let countdown1=document.querySelector('#wishes');
setTimeout(function() {
    countdown1.innerHTML =timer;
    setTimeout(function(){
        countdown1.innerHTML =timer--;
        setTimeout(function() {
            countdown1.innerHTML =timer--;
            setTimeout(function() {
                countdown1.innerHTML =timer--;
                setTimeout(function() {
                    countdown1.innerHTML =timer--;
                    setTimeout(function() {
                        countdown1.innerHTML =timer--;
                        setTimeout(function() {
                            countdown1.innerHTML =timer--;
                            setTimeout(function() {
                                countdown1.innerHTML =timer--;
                                setTimeout(function() {
                                    countdown1.innerHTML =timer--;
                                    setTimeout(function() {
                                        countdown1.innerHTML =timer--;
                                        setTimeout(function() {
                                            countdown1.innerHTML =`Happy Independence Day <br>
                                            <img src="https://th.bing.com/th/id/R.bd08086ffe0739cc048759c74e9be95c?rik=UVOxs63PPCu0EQ&riu=http%3a%2f%2fclipartmag.com%2fimages%2findependence-clipart-43.jpg&ehk=QTY4LutfS7WnKRwnEa1tl35cUViL%2brDZr%2fJP%2fUX2Nf4%3d&risl=&pid=ImgRaw&r=0" width="500" height="500">`;
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)