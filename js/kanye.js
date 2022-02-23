const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data));
}
const displayQuote = (quotes) => {
    const getElement = document.getElementById('quotes');
    getElement.innerText = quotes.quote;
    console.log(quotes.quote);

}