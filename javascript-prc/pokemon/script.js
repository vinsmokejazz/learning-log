// Get references to HTML elements
const form = document.getElementById("pokemonForm");
const numCardsInput = document.getElementById("numCards");
const categorySelect = document.getElementById("category");
const cardContainer = document.getElementById("cardContainer");

// Listen for form submission
form.addEventListener("submit", async function(e) {
  e.preventDefault();
  const numCards = parseInt(numCardsInput.value);
  const category = categorySelect.value; // For now, category is not used for filtering
  cardContainer.innerHTML = ""; // Clear previous cards

  // Loop from 1 to numCards and fetch Pokémon data for each id
  for (let i = 1; i <= numCards; i++) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();
      renderPokemonCard(data);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  }
});

// Function to create and render a Pokémon card
function renderPokemonCard(pokemon) {
  const card = document.createElement("div");
  card.className = "pokemon-card";
  
  const name = document.createElement("h3");
  name.textContent = pokemon.name.toUpperCase();
  card.appendChild(name);
  
  const img = document.createElement("img");
  img.src = pokemon.sprites.front_default;
  img.alt = pokemon.name;
  card.appendChild(img);
  
  const types = document.createElement("p");
  types.textContent = "Types: " + pokemon.types.map(t => t.type.name).join(", ");
  card.appendChild(types);
  
  cardContainer.appendChild(card);
}
