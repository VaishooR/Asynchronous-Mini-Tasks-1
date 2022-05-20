
let githubButton=document.getElementById('btn');
githubButton.addEventListener('click',getData);
async function getData() {
    try {
    const res= await fetch("https://api.github.com/users/VaishooR")
    const data=await res.json();
        console.log(data);
        console.log(data.login);
        console.log(data.following);
        console.log(data.public_repos);
        console.log(data.url);

        gitHubDetails(data);
    }
    catch(error) {
        let github = document.getElementById('github');
        github.innerHTML=error;   
    }
}

function gitHubDetails(data){
    let github = document.getElementById('github');
    github.innerHTML=`<b>Login:</b> ${data.login} <br>
    <b>Following:</b> ${data.following} <br>
    <b>Repositories:</b> ${data.public_repos} <br>
    <b>Github URL:</b> ${data.url} <br><br>
    <a href="${data.html_url}">VaishooR Github</a>`
}



