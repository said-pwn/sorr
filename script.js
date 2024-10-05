document.addEventListener('DOMContentLoaded', () => {
    const inspireBtn = document.getElementById('inspireBtn');
    const quoteDisplay = document.getElementById('quoteDisplay');
    const prevQuote = document.getElementById('prevQuote');
    const nextQuote = document.getElementById('nextQuote');
    const toggleThemeBtn = document.getElementById('toggleTheme');

    const quotes = [
        "Счастье — это не что иное, как хорошее здоровье и плохая память. — Альберт Швейцер",
        "Счастье не в счастье, а в его достижении. — Федор Достоевский",
        "Счастье — это когда то, что ты думаешь, что ты говоришь и что ты делаешь, находится в гармонии. — Махатма Ганди",
        "Секрет счастья не в том, чтобы делать то, что ты любишь, а в том, чтобы любить то, что ты делаешь. — Джеймс М. Барри"
    ];

    let currentQuoteIndex = 0;

    function displayQuote(index) {
        quoteDisplay.textContent = quotes[index];
        quoteDisplay.classList.remove('fadeIn');
        void quoteDisplay.offsetWidth; // Принудительное перерисовывание для анимации
        quoteDisplay.classList.add('fadeIn');
    }

    function displayRandomQuote() {
        currentQuoteIndex = Math.floor(Math.random() * quotes.length);
        displayQuote(currentQuoteIndex);
    }

    function showNextQuote() {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        displayQuote(currentQuoteIndex);
    }

    function showPrevQuote() {
        currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
        displayQuote(currentQuoteIndex);
    }

    inspireBtn.addEventListener('click', displayRandomQuote);
    nextQuote.addEventListener('click', showNextQuote);
    prevQuote.addEventListener('click', showPrevQuote);
    
    toggleThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });

    // Показать первую цитату при загрузке страницы
    displayQuote(currentQuoteIndex);
});
