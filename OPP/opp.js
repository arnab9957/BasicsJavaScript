// Creating an object named obj
const obj = {
    name: "Arnab",
    age: 25,
    city: "Kolkata",
    isStudent: true,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
// console.log(obj.greet());
// console.log(this);

// CONSTRUCTOR FUNCTION
// const promise = new Promise()
// const date = new Date()
//this "NEW" keywords are use to create context

// NEW => create an Object 
// => constructor function is called 
// => Inject the responce in "this" keyword 
// => we got in the function

// Constructor => A referance about itself

function User(userName, loggedInCount, isLoggedIn){
    this.userName = userName
    this.loggedInCount = loggedInCount
    this.isLoggedIn = isLoggedIn

    return this;
}

const UserOne = new User("Arnab", 50, false)
const UserTwo = new User("Riju", 10, true)

// console.log(UserOne)
// console.log(UserTwo.constructor) 



