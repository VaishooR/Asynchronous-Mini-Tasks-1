// function quotes(){
//     fetch("https://www.breakingbadapi.com/api/quote/random")
//     .then((response)=>(response.json()))
//     .then((data)=>{
//         console.log(data);
//         console.log(data[0].quote);
//         document.getElementById('display').innerHTML=data[0].quote;
//     })
// }

async function quotes(){
    try{
        let url= await fetch("https://www.breakingbadapi.com/api/quote/random");
        let data= await url.json();
        console.log(data[0].quote);
        document.getElementById('display').innerHTML=`${data[0].quote} <br>
               -${data[0].author} `;

    }
    catch(error){
        console.log(error);
        document.getElementById('display').innerHTML=error;
    }
}