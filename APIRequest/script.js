
const URL = 'https://api.github.com/users/arnab9957'

const apicall = new XMLHttpRequest()

apicall.open('GET', URL)
console.log("here");

apicall.onreadystatechange = ()=>{
    console.log(apicall.readyState);

    if(apicall.readyState === 4){
        const data = JSON.parse(apicall.responseText)
        console.log(data);  
        setImage(data)
        setName(data)
        setFollowers(data)
    }
}

apicall.send()

const setImage = function(data){
    const pic = document.querySelector(".image")
    pic.src = data.avatar_url;
}

const setName = function(data) {
    const name = document.querySelector(".nameOf")
    name.innerHTML = data.name
}

const setFollowers = function(data){
    const follower = document.querySelector(".followerCount")
    follower.innerHTML = data.followers
}







