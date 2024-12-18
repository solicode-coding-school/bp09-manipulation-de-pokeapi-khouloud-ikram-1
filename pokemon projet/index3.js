// Récupérer l'URL du Pokémon passée en paramètre dans l'URL
const params = new URLSearchParams(window.location.search);
const pokemonUrl = params.get("url");

if (pokemonUrl) {
    // Faire une requête API pour obtenir les détails du Pokémon
    fetch(pokemonUrl)
        .then(response => response.json())
        .then(data => {
            // Sélectionner le conteneur des détails et vider son contenu
            const detailsContainer = document.querySelector("#pokemon-details");
            detailsContainer.innerHTML = ''; // Effacer les anciens détails

            // Créer des éléments pour afficher le nom, l'image et les statistiques du Pokémon
            const name = document.createElement('h2');
            name.textContent = data.name;

            const image = document.createElement('img');
            image.src = data.sprites.front_default;
            image.alt = data.name;

            // Utilisation d'une boucle 'for' classique pour les statistiques
            const stats = document.createElement('ul');
            for (let i = 0; i < data.stats.length; i++) {
                const stat = data.stats[i];
                const statItem = document.createElement('li');
                statItem.textContent = `${stat.stat.name}: ${stat.base_stat}`;
                stats.appendChild(statItem);
            }

            // Ajouter les détails à la page
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