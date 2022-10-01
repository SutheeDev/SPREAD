let div = document.createElement('div');
div.classList.add('row');

const word = 'spread';
let wordArray = [...word];
wordArray.forEach((letter) => {
    let htmlEl = '';
    htmlEl += `<span class="letter">${letter}</span>`;
    div.innerHTML += htmlEl;
});

const container = document.querySelector('.container');
container.appendChild(div);