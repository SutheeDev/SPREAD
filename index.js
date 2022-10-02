document.addEventListener('DOMContentLoaded', () => {
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
    // animate text
    gsap.to('.letter', {
        fontStretch: '125%',
        fontWeight: '600',
        // letterSpacing: '-3.5vw',
        letterSpacing: '0vw',
        stagger: {
            // each: 0.03,
            amount: 0.4,
            from: 'center',
            // grid: 'auto',
        },
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
    }) 
});


