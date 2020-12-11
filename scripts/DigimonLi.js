class DigimonCreator() {
    constructor() {}

    adicionaCards(digimon) {
    const li = document.createElement("li");
    li.classList.add("card");
    li.innerHTML = `
        <img src="${digimon.img}" alt="${digimon.name}"/>
        <h1 class="digimon-name">${digimon.name}</h1>
        <p>${digimon.level}</p>
        <a target="_blank" href="https://digimon.fandom.com/wiki/${digimon.name}">
            <button><p>Digimon Fandom</p></button>
        </a>        
    `;
    ul.appendChild(li);
    }
}