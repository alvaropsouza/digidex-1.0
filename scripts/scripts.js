function createLi(digimon) {
    const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.classList.add("card");
  li.innerHTML = `
            <img src="${digimon.img}" alt="${digimon.name}"/>
            <h1 class="name" href="#${digimon.name}">${digimon.name}</h1>
            <p>${digimon.level}</p>
            <a target="_blank" href="https://digimon.fandom.com/wiki/${digimon.name}">
                <button><p>Digimon Fandom</p></button>
            </a>        
            `;
  ul.appendChild(li);
}

const fetchDigimon = () => {
    const url = `https://digimon-api.vercel.app/api/digimon`;

    fetch(url)
    .then(response => response.json())
    .then(function (data) {
      return data.map((digimon) => {
        createLi(digimon);
      });
    })
    .catch((error) => {
      console.log("Oops!" + error);
    });
}

fetchDigimon()

const digimons = document.querySelectorAll('li')

// Fetch api and create all elements

  