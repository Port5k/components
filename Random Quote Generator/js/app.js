let quoteArray = [{
        quote: '“The only true wisdom is in knowing you know nothing.”',
        author: 'Socrates'
    },
    {
        quote: '“The only place where success comes before work is in the dictionary.”',
        author: 'Vidal Sassoon'
    }, {
        quote: '“Out beyond ideas of wrongdoing and rightdoing there is a field. I\'ll meet you there. When the soul lies down in that grass the world is too full to talk about.”',
        author: 'Rumi'
    }, {
        quote: '“The question isn\'t who is going to let me; it\'s who is going to stop me.”',
        author: 'Ayn Rand'
    }, {
        quote: '“First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.”',
        author: 'Aristotle'
    }, {
        quote: '“There is only one good, knowledge, and one evil, ignorance.”',
        author: 'Socrates'
    }, {
        quote: '“Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do. So, throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.”',
        author: 'Mark Twain'
    }, {
        quote: '“He who fears he will suffer, already suffers because he fears.”',
        author: 'Michel De Montaigne.'
    }, {
        quote: '“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.”',
        author: 'Albert Einstein'
    }, {
        quote: '“The only means to gain one\'s end with people are force are force and cunning. Love also,they say; but that is to wait for sunshine and life needs every moment.”',
        author: 'Johann Von Goethe'
    }
]

function displayQuote() {
    let randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
    let display = `<p class="quote">${randomQuote.quote}</p>
                    <p class="quote_author">${randomQuote.author}</p>
    `;
    return display
}


//To manage quote history.
let historyArray = [];

//Load quote on page load
let openingQuote = displayQuote();
historyArray.push(openingQuote);
document.querySelector('.screen').innerHTML = openingQuote;

//Load quote on button click
Array.from(document.querySelectorAll('.button')).forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('button_right')) {
            let currentQuote = displayQuote();
            document.querySelector('.screen').innerHTML = currentQuote;
            historyArray.push(currentQuote);
        } else if (button.classList.contains('button_left')) {
            let historyQuote = historyArray.pop();
            if (historyArray.length != 0) {
                document.querySelector('.screen').innerHTML = historyQuote;
            }
        }
    })
})