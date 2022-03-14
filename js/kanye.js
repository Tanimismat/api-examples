const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => displayQuote(data))
}
loadQuotes()

const displayQuote = (quote) => {
    console.log(quote)
    const quoteContainer = document.getElementById('quote');
    quoteContainer.innerText = quote.quote
}