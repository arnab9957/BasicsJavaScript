class User {
    constructor(username) {
        this.username = username;
    }

    logMe(){
        console.log(this.username);
        
    }

}

// if we have to make the user as an admin or something else

class Admin extends User{
    constructor(username, email, pass){
        // this.username = username
        super(username)
        this.email = email
        this.pass = pass
    }

    feature(){
        console.log(`New Feature was added by ${this.username}`);
    }
}

const adminUser = new Admin("Arnab", "ar@insta.com", "Arnab@123")
// console.log(adminUser.logMe());

adminUser.feature()

// console.log(adminUser instanceof Admin);

// console.log(adminUser instanceof User);







