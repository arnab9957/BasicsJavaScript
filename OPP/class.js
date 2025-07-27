

class User {
    constructor(username, email, pass) {
        this.username = username;
        this.email = email;
        this.pass = pass;
    }

    encryptPass(){
        //Method
        return `${this.pass}arb`
    }
}

const UserClass = new User("Arnab", "arnabmicr@gmail.com", "hhttyd@345")
console.log(UserClass.encryptPass());

// Behind the scene

const CreateUser = function(userName, score){
    this.userName = userName
    this.score = score
}

CreateUser.prototype.double = function (){
    this.score = this.score * 2
    console.log(`Price is ${this.score}`);
    
}

const userOne = new CreateUser("Chai", 600)
console.log(userOne.double());
