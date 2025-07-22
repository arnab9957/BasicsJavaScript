const randomColourGen = () => {
    const hex = '0123456789ABCDEF' //Colour codes...(16 char)
    let colour = '#'

    for (let index = 0; index < 6; index++) {
        colour += hex[Math.floor(Math.random() * 16)]

    }
    return colour

}


// console.log(Math.floor(Math.random() * 16));

let changeColourOfBg = () => {
    document.body.style.backgroundColor = randomColourGen()
}

let intervalID;

let changeColour = document
    .querySelector(".start").addEventListener("click", () => {
        if(!intervalID){
            intervalID = setInterval(changeColourOfBg, 2000)
        }
    })


    const stopChangeColour = document
    .querySelector(".stop").addEventListener("click", () => {
        clearInterval(intervalID)
        console.log("Stopped");
        document.body.style.backgroundColor = "white"
        intervalID = null
    })
    

    const stayChangeColour = document
    .querySelector(".stay").addEventListener("click", () => {
        clearInterval(intervalID)
        console.log("stayed");
        intervalID = null
    })