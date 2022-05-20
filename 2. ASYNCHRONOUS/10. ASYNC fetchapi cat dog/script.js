
//Cat:
function cat() {
  let url = "https://aws.random.cat/meow";
  fetch(url).then((response) => response.json())

    .then((data1) => {
      console.log(data1);
      getCat(data1);
    })
    .catch((error) => {
      console.log(error);
    });
}

let getCat=(data1)=>{
    let catImage = document.getElementById("image1");
    catImage.innerHTML = `<img src="${data1.file}" width="200" height="200" />`;
}


//Dog:
function dog(){
    let dog="https://dog.ceo/api/breeds/image/random";
    fetch(dog).then((response)=>(response.json()))
    .then((data2)=>{
        getDog(data2)
    })
}
function getDog(data2){
    let dog=document.getElementById("image2");
    dog.innerHTML=`<img src="${data2.message}" width="200" height="200"/>`
}

