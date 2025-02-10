const inputBox = document.getElementById("inputBox");
const category = document.getElementById("dropDown");

const fetchdata = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from pokemon:", error);
  }
};

const renderBox = (pokemon) => {
  if(!pokemon) return;

  const disp = document.createElement("div");
  disp.className="pokemon-card"

  const heading = document.createElement("h3");
  heading.textContent=pokemon.name.toUpperCase();
  disp.appendChild(heading);
};
