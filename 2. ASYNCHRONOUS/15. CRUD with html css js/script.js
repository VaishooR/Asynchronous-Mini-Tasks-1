//Logic to get the data 
async function getUsers(){
    let users;
    try{
        const data= await fetch("https://62865560f0e8f0bb7c1484d1.mockapi.io/users", 
        {
            method:"GET",
            headers:{
                "Content-Type": "application/json"
            },
        });
        users=await data.json();
        console.log(users);

    }
    catch(err){
        console.log(err);
    }
    return users;
}
// getUsers();

//Logic to display the data of the user 
async function displayUsers(){
    let users= await getUsers();
    // console.log(users);
    const userList= document.querySelector(".user-list");
    userList.innerHTML="";
    users.forEach((user)=>{
        console.log(user.name);
        userList.innerHTML += `
        <div class="user-container">
          <img class="user-avatar" src="${user.avatar}" alt="avatar">
          <div>
            <h3>${user.name}</h3>
            <p>${user.createdAt}</p>
            <button onclick="deleteUser(${user.id})">Delete</button>
            <button onclick="editUser(${user.id})">Edit</button>
          </div>
        </div>`;
    })
}
displayUsers();

//Logic to delete the user data
async function deleteUser(id){
    try{
        const data= await fetch(
            `https://62865560f0e8f0bb7c1484d1.mockapi.io/users/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const users=await data.json();
        console.log(users);
        displayUsers();
    }
    catch(err){
        console.log(err);
    }
}

//Logic to Add user data 
async function addUser(){
    const userName= document.querySelector('.add-user-name').value;
    const userAvatar= document.querySelector('.add-user-avatar').value;
    console.log(userName,userAvatar);
    const data=await fetch("https://62865560f0e8f0bb7c1484d1.mockapi.io/users",
    {
        method: "POST",
        body: JSON.stringify({
            name: userName,
            avatar: userAvatar,
        }),
        headers:{
            "Content-Type":"application/json",
        },
    })
displayUsers();
}
