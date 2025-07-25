

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



const promise3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({   "userName": "Arnab",
                    "RollNo": 328957635  })
    }, 2000) 

    
})

promise3.then((user)=>{
    console.log(user);
    return user.userName;
})
.then((userName)=>{
    console.log(userName);
    
})
.catch(()=>{})
.finally(()=>{console.log("Done");
})