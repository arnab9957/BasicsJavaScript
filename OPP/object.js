//                  function/Array/String ==> Object => Null




const multiplyByItself = (val) => {
    return val * val
}

const multiplyByTwo = function(val) {
    return val * 2
}

multiplyByItself.power = 5

// console.log(multiplyByItself(10));
// console.log(multiplyByItself.power);
// console.log(multiplyByItself.prototype); //Return undefined for arrow function.
// console.log(multiplyByTwo.prototype); //Return empty obj for normal function.

//              #Reason

// Regular function - CAN be used as constructor
function RegularFunc() {
    this.name = "test"
}
// const instance1 = new RegularFunc() // ✅ Works

// Arrow function - CANNOT be used as constructor
const ArrowFunc = () => {
    this.name = "test"
}
// const instance2 = new ArrowFunc() // ❌ TypeError: ArrowFunc is not a constructor


const CreateUser = function(userName, score){
    this.userName = userName
    this.score = score
}

CreateUser.prototype.double = function (){
    this.score = this.score * 2
    console.log(`Price is ${this.score}`);
    
}

const userOne = new CreateUser("Indian", 300)

userOne.double()