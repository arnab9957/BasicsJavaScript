    // USING CLASSES

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    get password(){
        //Method
        return this._password.toUpperCase()
    }

    set password(pass){
        this._password = pass
    }

    // Same for Email or username
}

const UserClass = new User("Arnab", "arnabmicr@gmail.com", "hhttyd")
// console.log(UserClass.password);


    // USING FUNCTIONS

function Users(username, email, password){
        this._username = username;
        this._email = email;
        this._password = password;

    // Object.defineProperty(this, "password", {
    //     get: function(){
    //         return this._password.toUpperCase()
    //     },
    //     set: function(value){
    //         this._password = value
    //     }
    // })

    //     Object.defineProperty(this, "password", {
    //     get: function(){
    //         return this._password.toUpperCase()
    //     },
    //     set: function(value){
    //         this._password = value
    //     }
    // })

    Encryption.call(this, username);
}


function Encryption(value){
        this._value = value
        Object.defineProperty(this, "value", {
        get: function(){
            return this._value.toUpperCase()
        },
        set: function(finalValue){
            this._value = finalValue
        }
    })
}

const userOne = new Users("Arnab", "arnabmicr@gmail.com", "jjggtt")
// console.log(userOne.password);
// console.log(userOne.value);
// console.log(userOne.email);



    // USING OBJECT 

const getSet = {
    _email: "ar@akd.com",
    _pass: "grsf@245",

    get email(){
        return this._email = this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}


const objUser = Object.create(getSet) //These are Factory function

console.log(getSet.email);

