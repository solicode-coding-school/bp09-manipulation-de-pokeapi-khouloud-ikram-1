// // Si le conteneur existe, on charge les boutons
// if (document.querySelector("#container")) {
//     fetch("https://pokeapi.co/api/v2/type")
//         .then(response => response.json())
//         .then(data => {
//             const container = document.querySelector("#buttons-container");
//             container.innerHTML = ''; // Efface le contenu existant

//             for (let i = 0; i < data.results.length; i++) {
//                 const type = data.results[i];
//                 const button = document.createElement("button");
//                 button.textContent = type.name;
//                 button.classList.add("type-button");

//                 button.addEventListener("click", () => {
//                     window.location.href = `index2.html?name=${type.name}`;
//                 });

//                 container.appendChild(button);
//             }
//         })
// }

// // Si on est sur index2.html, on affiche les Pokémon par type
// if (document.querySelector(".page")) {
//     const name = new URLSearchParams(window.location.search).get("name");
//     fetch(`https://pokeapi.co/api/v2/type/${name}`)
//         .then(response => response.json())
//         .then(data => {
//             const pokemonDisplay = document.querySelector("#pokemon-display");
//             pokemonDisplay.innerHTML = ''; // Efface les Pokémon précédents

//             const pokemonList = document.createElement("div");
//             pokemonList.classList.add("pokemon-list");

//             for (let i = 0; i < data.pokemon.length; i++) {
//                 const pokemon = data.pokemon[i];
//                 fetch(pokemon.pokemon.url)
//                     .then(res => res.json())
//                     .then(pokemonData => {
//                         const pokemonItem = document.createElement("div");
//                         pokemonItem.classList.add("pokemon-item");

//                         const pokemonName = document.createElement("p");
//                         pokemonName.textContent = pokemon.pokemon.name;

//                         const pokemonImage = document.createElement("img");
//                         pokemonImage.src = pokemonData.sprites.front_default;

//                         pokemonItem.appendChild(pokemonImage);
//                         pokemonItem.appendChild(pokemonName);
//                         pokemonList.appendChild(pokemonItem);
//                     });
//             }

//             pokemonDisplay.appendChild(pokemonList);
//         })
// }




// Si le conteneur existe, on charge les boutons
if (document.querySelector("#container")) {
    fetch("https://pokeapi.co/api/v2/type")
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector("#buttons-container");
            container.innerHTML = ''; // Efface le contenu existant

            for (let i = 0; i < data.results.length; i++) {
                const type = data.results[i];
                const button = document.createElement("button");
                button.textContent = type.name;
                button.classList.add("type-button");

                button.addEventListener("click", () => {
                    window.location.href = `index2.html?name=${type.name}`;
                });

                container.appendChild(button);
            }
        })
}

// Si on est sur index2.html, on affiche les Pokémon par type
if (document.querySelector(".page")) {
    const name = new URLSearchParams(window.location.search).get("name");
    fetch(`https://pokeapi.co/api/v2/type/${name}`)
        .then(response => response.json())
        .then(data => {
            const pokemonDisplay = document.querySelector("#pokemon-display");
            pokemonDisplay.innerHTML = ''; // Efface les Pokémon précédents

            const pokemonList = document.createElement("div");
            pokemonList.classList.add("pokemon-list");

            for (let i = 0; i < data.pokemon.length; i++) {
                const pokemon = data.pokemon[i];
                fetch(pokemon.pokemon.url)
                    .then(res => res.json())
                    .then(pokemonData => {
                        const pokemonItem = document.createElement("div");
                        pokemonItem.classList.add("pokemon-item");

                        const pokemonName = document.createElement("p");
                        pokemonName.textContent = pokemon.pokemon.name;

                        const pokemonImage = document.createElement("img");
                        pokemonImage.src = pokemonData.sprites.front_default;

                        // Ajouter l'événement de clic pour afficher les détails du Pokémon
                        pokemonItem.addEventListener("click", () => {
                            window.location.href = `index3.html?url=${pokemon.pokemon.url}`;
                        });

                        pokemonItem.appendChild(pokemonImage);
                        pokemonItem.appendChild(pokemonName);
                        pokemonList.appendChild(pokemonItem);
                    });
            }

            pokemonDisplay.appendChild(pokemonList);
        })
}







































// // Vérifie si le conteneur existe pour charger les boutons
// if(document.querySelector("#container")){
//     async function getData() {
//         try {
//             const response = await fetch("https://pokeapi.co/api/v2/type");
//             const data = await response.json();
            
//             const container = document.querySelector("#buttons-container");

//             container.innerHTML = ''; // Clear before adding new buttons

//             // Crée un bouton pour chaque type
//             data.results.forEach(type => {
//                 const button = document.createElement("button");
//                 button.textContent = type.name;
//                 button.classList.add("type-button");

//                 container.appendChild(button);

//                 // Redirection vers la page avec le type sélectionné
//                 button.addEventListener("click", () => {
//                     window.location.href = `index2.html?name=${type.name}`;
//                 });
//             });
//         } catch (error) {
//             console.error("Error fetching the data:", error);
//         }
//     }
//     getData();
// }

// // Vérifie si la page est index2.html pour afficher les Pokémon du type sélectionné
// if(document.querySelector(".yahya")){
//     const prime = new URLSearchParams(window.location.search);
//     const name = prime.get("name");
//     displayPokemonByType(name);

//     async function displayPokemonByType(name) {
//         try {
//             const response = await fetch(`https://pokeapi.co/api/v2/type/${name}`);
//             const data = await response.json();

//             const pokemonDisplay = document.querySelector("#pokemon-display");

//             pokemonDisplay.innerHTML = ''; // Clear previous Pokémon

//             const pokemonList = document.createElement('div');
//             pokemonList.classList.add('pokemon-list');

//             data.pokemon.forEach(pokemon => {
//                 const pokemonItem = document.createElement('div');
//                 pokemonItem.classList.add('pokemon-item');

//                 const pokemonName = document.createElement('p');
//                 pokemonName.textContent = pokemon.pokemon.name;

//                 fetch(pokemon.pokemon.url)
//                     .then(res => res.json())
//                     .then(pokemonData => {
//                         const pokemonImage = document.createElement('img');
//                         pokemonImage.src = pokemonData.sprites.front_default;
//                         pokemonItem.appendChild(pokemonImage);
//                     });

//                 pokemonItem.appendChild(pokemonName);
//                 pokemonList.appendChild(pokemonItem);
//             });

//             pokemonDisplay.appendChild(pokemonList);

//         } catch (error) {
//             console.error("Error fetching Pokémon data:", error);
//         }
//     }
// }
