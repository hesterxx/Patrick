if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then( () => {
    console.log('Service Worker Registered')
})
})
}

document.getElementById('fetchCatBtn').addEventListener('click', fetchRandomCat);

function fetchRandomCat() {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(data => {
            const catContainer = document.getElementById('catContainer');
            catContainer.innerHTML = `
                <img src="${data[0].url}" alt="Random Cat">
            `;
        })
        .catch(error => {
            console.error("Error fetching random cat:", error);
            const catContainer = document.getElementById('catContainer');
            catContainer.innerHTML = `<p>Oops! Unable to fetch a cat image right now.</p>`;
        });
}
