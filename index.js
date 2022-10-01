for (i = 0; i < 10; i++)
{
    // create div with a class of 'row'
    let div = document.createElement('div');
    div.classList.add('row');
    
    // create multiple span of each letter in the word 'stretch'
    const word = 'spread';
    let wordArray = [...word];
    wordArray.forEach((letter) => {
        let htmlEl = '';
        htmlEl += `<span class="letter">${letter}</span>`;
        div.innerHTML += htmlEl;
    });
    
    // Add created words to the article container
    const container = document.querySelector('.container');
    container.appendChild(div);
}