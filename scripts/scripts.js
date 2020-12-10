const ul = document.querySelector("ul");

function adicionaCards(digimon) {
  const li = document.createElement("li");
  li.classList.add("card");
  li.innerHTML = `
        <img src="${digimon.img}" alt="${digimon.name}"/>
        <h1>${digimon.name}</h1>
        <p>${digimon.level}</p>
        <a target="_blank" href="https://digimon.fandom.com/wiki/${digimon.name}">
            <button><p>Digimon Fandom</p></button>
        </a>        
        `;
  ul.appendChild(li);
}

const fetchDigimon = () => {
  const url = `https://digimon-api.vercel.app/api/digimon`;

  // Fetch api, map elements and create them
  // Still need to make this process cleaner and faster

  fetch(url)
    .then((response) => response.json())
    .then((data) =>
      data.map(function (digimon) {
        adicionaCards(digimon);
      })
    )
    .catch((error) => {
      console.log("Oops!" + error);
    });
};

fetchDigimon();
