const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?


const welcome = document.getElementById('welcome') // get the welcome element

if (isMorning) {
    welcome.textContent = 'Good morning, welcome to my homepage!' // set the welcome message for morning
} else if (isAfternoon) {
    welcome.textContent = 'Good afternoon, welcome to my homepage!' // set the welcome message for afternoon
} else if (isEvening) {
    welcome.textContent = 'Good evening, welcome to my homepage!' // set the welcome message for evening
} else {
    welcome.textContent = 'Welcome!' // set a default welcome message
}

localStorage.setItem("It's a secret to everybody.", "The prophecy has been fulfilled." )