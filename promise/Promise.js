

// const promise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Async Task is COmpleted");
//     }, 2000) 
//     resolve()
// })

// promise.then(()=>{
//     console.log("Promise Consumed");
    
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve([{   "userName": "Arnab",
//                     "RollNo": 328957635  }, {}, [], function(){}])
//     }, 2000) 
    
// })

// promise2.then((user)=>{
//     console.log(user);
    
// })



// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve({   "userName": "Arnab",
//                     "RollNo": 328957635  })
//     }, 2000) 

    
// })

// promise3.then((user)=>{
//     console.log(user);
//     return user.userName;
// })
// .then((userName)=>{
//     console.log(userName);
    
// })
// .catch(()=>{})
// .finally(()=>{console.log("Done");
// })


// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         let error = true
//         if(error){
//             reject("Error Occered in JS")
//         } else {
//         resolve({   "userName": "Arnab",
//                     "RollNo": 328957635  })
//         }

//     }, 2000) 

    
// }) //This is an Object

// async function ConsumePromise() {
//     try {
//         const responce = await promise4 //Now we got the responce
//         console.log(responce);
//     } catch (error) {
//         console.log("Error caught:", error); // Just log the error
//         // OR throw new Error(error) if you want to re-throw
//     }
    
// }

// ConsumePromise()


