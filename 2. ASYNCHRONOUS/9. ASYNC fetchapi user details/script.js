function usersData(){
    let url="https://jsonplaceholder.typicode.com/users";
    fetch(url).then((response) =>(response.json()))
    .then((data)=>{
        console.log(data);
        getData(data);
    })
    .catch((error)=>{
        console.log(error);
    })
}

function getData(data){
    let tbody=document.querySelector('#tbody');
    let trow="";
    data.forEach((user)=>{
        trow +=
        `<tr>
        <td>${user.name}</td>
        <td>${user.address.city}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        </tr>`
        tbody.innerHTML=trow;
    })
    
}