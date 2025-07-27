function setUserName(username){
    this.username = username;
}

function createUsers(username, email, pass){
    //setUserName(this.username) //Though we are using paranthesis but we are only passing the referrance of this function not calling it..
    //called but the referrance is deleted to solve this we can use .call, .bind etc.
    setUserName.call(this, username) //this keyword takes the referrrance. as like a son😀
    this.email = email
    this.pass = pass
    // console.log(username);
    
}

const userOne = new createUsers("Arnab", "ar@insta.com", "Arnab@123")
console.log(userOne);
