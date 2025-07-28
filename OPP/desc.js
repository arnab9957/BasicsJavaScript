
// PI = Math.PI

// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);
//OUTPUT
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }


let myObj = {
    name: "Fried Chai",
    price: 200,  
    isAvailable: true,
    function(){
        console.log(`code breaked `);        
    }
}

// console.log(Object.getOwnPropertyDescriptor(myObj,"price"));

Object.defineProperty(myObj,"price", {

    value:300,
    writable: false,
    enumerable: false,
    configurable: false
})

// console.log(Object.getOwnPropertyDescriptor(myObj,"price"));

// myObj.price = 600;
// console.log(myObj);

for (const [key, value] of Object.entries(myObj)) {
    if (typeof value !== "function"){
        console.log(`${key}:${value}`);
    }
    
}

