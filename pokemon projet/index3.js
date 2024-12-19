const params = new URLSearchParams(window.location.search);
const pokemonUrl = params.get("url");

if (pokemonUrl) {
    fetch(pokemonUrl)
        .then(response => response.json())
        .then(data => {
            const detailsContainer = document.querySelector("#pokemon-details");
            detailsContainer.innerHTML = ''; // Effacer les anciens détails

            const name = document.createElement('h2');
            name.textContent = data.name;

            const image = document.createElement('img');
            image.src = data.sprites.front_default;
            image.alt = data.name;

            const stats = document.createElement('ul');
            for (let i = 0; i < data.stats.length; i++) {
                const stat = data.stats[i];
                const statItem = document.createElement('li');
                statItem.textContent = `${stat.stat.name} : ${stat.base_stat}`;
                stats.appendChild(statItem);
            }

            detailsContainer.appendChild(name);
            detailsContainer.appendChild(image);
            detailsContainer.appendChild(stats);
        })
        .catch(error => {
            console.error("Erreur lors du chargement des détails :", error);
            document.querySelector("#pokemon-details").textContent = "Impossible de charger les détails du Pokémon.";
        });
} else {
    document.querySelector("#pokemon-details").textContent = "Aucun Pokémon sélectionné.";
}