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

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

const prevBtn = document.querySelector('#prev');

const nextBtn = document.querySelector('#next');

// next button
nextBtn.addEventListener('click', () => {
    currentImage++;
    showImages();
});

// prev button
prevBtn.addEventListener('click', () => {
    currentImage--;
    showImages();
});

// auto-switch after every 5 seconds
setInterval(() => {
    currentImage++;
    showImages();
}, 5000);