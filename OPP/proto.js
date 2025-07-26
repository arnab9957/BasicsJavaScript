//      function/Array/String ==> Object => Null
// if we add a pwer in the object then the function, array and string all will get the power.
// but if we asign the power to anny specifin things the the other things will not get the power.



const myName = "Arnab    "
String.prototype.realLength = function () {
    console.log(`${this}`);
    
    console.log(`Real length is: ${this.trim().length}`);    
}
// console.log(myName.length);
const realLength = myName.realLength()
"kjdfhkshfk   ".realLength()
"     kjdfdkjflskhkshfk   ".realLength()


// console.log(myName.prototype)

// WE have to find the true length of any string




//INHERITANCE

// 1. OBJECT LITERAL - Most common way
const objectLiteral = {
    name: "Arnab",
    age: 25,
    city: "Kolkata",
    greet: function() {
        return `Hello, I'm ${this.name} from ${this.city}`;
    }
};

// 2. CONSTRUCTOR FUNCTION - Traditional OOP approach
function Person(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.introduce = function() {
        return `I'm ${this.name}, ${this.age} years old, working as ${this.profession}`;
    };
}
const personInstance = new Person("Riju", 28, "Developer");

// 3. OBJECT.CREATE() - Creates object with specified prototype
const animalPrototype = {
    speak: function() {
        return `${this.name} makes a sound`;
    },
    eat: function() {
        return `${this.name} is eating`;
    },
    __proto__: Person
};
const dog = Object.create(animalPrototype);
dog.name = "Buddy";
dog.breed = "Golden Retriever";

// 4. ES6 CLASS - Modern syntax for objects
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    
    start() {
        return `${this.brand} ${this.model} is starting...`;
    }
    
    getInfo() {
        return `${this.year} ${this.brand} ${this.model}`;
    }
}
const myCar = new Car("Toyota", "Camry", 2023);
//                   <------->

const objectLiteral2 = {
    name: "Arnab",
    age: 25,
    city: "Kolkata",
    greet: function() {
        return `Hello, I'm ${this.name} from ${this.city}`;
    }
};

const objectLiteral3 = {
    name: "Arnab",
    age: 25,
    city: "Kolkata",
    greet: function() {
        return `Hello, I'm ${this.name} from ${this.city}`;
    }
};

const objectLiteral4 = {
    name: "Arnab",
    age: 25,
    city: "Kolkata",
    greet: function() {
        return `Hello, I'm ${this.name} from ${this.city}`;
    }
};

const objectLiteral5 = {
    name: "Arnab",
    age: 25,
    city: "Kolkata",
    greet: function() {
        return `Hello, I'm ${this.name} from ${this.city}`;
    }
};

// This are some old techniques of inheritence
objectLiteral.__proto__ = animalPrototype

//MODERN APPROACH
Object.setPrototypeOf(objectLiteral5, objectLiteral)


