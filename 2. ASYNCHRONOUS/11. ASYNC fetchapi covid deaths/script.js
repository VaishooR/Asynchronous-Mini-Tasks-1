

function getCovidData(){
    let url="https://api.covid19api.com/summary";
    fetch(url).then((response) => response.json())
    .then((data)=>{
    console.log(data.Countries[77]);

    let ourCountry=data.Countries[77];
    console.log(ourCountry.Country)
    console.log(ourCountry.TotalConfirmed)
    console.log(ourCountry.TotalDeaths)
    console.log(ourCountry.TotalRecovered)
    console.log(ourCountry.Date)

    getData(data)
})
    .catch((error) => {
    console.log(error);
})
}

function getData(data){
    let ourCountry=data.Countries[77];
    let covid=document.getElementById('covid');
    covid.innerHTML=`
    Name: ${ourCountry.Country} <br>
    Total Confirmed: ${ourCountry.TotalConfirmed} <br>
    Total  Deaths: ${ourCountry.TotalDeaths} <br>
    Total Recovered: ${ourCountry.TotalRecovered} <br>
    Date: ${ourCountry.Date} <br>`
}





