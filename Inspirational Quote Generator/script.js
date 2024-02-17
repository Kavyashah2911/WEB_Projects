// script.js
document.addEventListener("DOMContentLoaded", function () {
    getRandomQuote();
});

async function getRandomQuote() {
    const quoteContainer = document.getElementById("quote-text");
    const button = document.querySelector("button");
    
    button.disabled = true;
    quoteContainer.textContent = "Loading...";

    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();

        if (response.ok) {
            quoteContainer.innerHTML = `"${data.content}"<br> - ${data.author}`;
        } else {
            quoteContainer.textContent = "Failed to fetch a quote.";
        }
    } catch (error) {
        console.error("Error fetching quote:", error);
        quoteContainer.textContent = "Error fetching quote.";
    }

    button.disabled = false;
}
