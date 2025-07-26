fetch(resource)
fetch(resource, options)

// A fetch() promise does not reject if
//  the server responds with HTTP status codes that indicate 
//  errors (404, 504, etc.). => this is also a resolve of the promise not reject" though it it an error.
//  Instead, a then() handler must check the Response.ok and/or Response.status properties.



// const URL = "https://jsonplaceholder.typicode.com/users"

// async function fetching() {
//     const urlResponce = await fetch(URL)
//     let json = await urlResponce.json() 
//     const text = await urlResponce.text()
//     const jsonParse = JSON.parse(text)
//     console.log(jsonParse);
//     console.log(json);
// }

// fetching()

// const fetchPromise = new Promise((resolve, reject)=>{
//     resolve( fetch(URL) )
// })

// fetchPromise.then((res)=>{
//     console.log(res);
// })

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//     return res.json()
// }) 
// .then((jsonRes)=>{console.log(jsonRes);
// })
// .catch((error)=>{console.log(error);
// })




