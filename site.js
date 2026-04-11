(async () => {

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


document.querySelector('button[type="button"]').addEventListener('click', () => {
    const input = document.querySelector('#new-todo');
  
    const todos = JSON.parse(localStorage.getItem('todo-list') || '[]');

    todos.push({
        text: input.value,
        completed: false
    });

    localStorage.setItem('todo-list', JSON.stringify(todos));
    
    console.log(todos);

    renderTodos();

    input.value = '';
});

const renderTodos = () => {
    const todoList = document.querySelector('.todo-list');
    const todos = JSON.parse(localStorage.getItem('todo-list') || '[]');    

    todoList.innerHTML = ''

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        todoList.append(li);
    });
};

renderTodos();

const getRandomPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 1025)

    const response = await fetch(url);
    const data = await response.json();

    return data;
};

const renderPokemon = pokemon => {
    const pokemonContainer = document.querySelector('#pokemon');

    pokemonContainer.innerHTML = '';

    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;
    img.alt = pokemon.name;

    pokemonContainer.append(img);
};

document.querySelector('#fetch-pokemon').addEventListener('click', async () => {
    const pokemon = await getRandomPokemon();
    renderPokemon(pokemon);
});

const pokemon = await getRandomPokemon();
renderPokemon(pokemon);

})();
