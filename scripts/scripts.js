const url = `https://digimon-api.vercel.app/api/digimon`

const ul = document.querySelector('ul')

// Fetch api and create all elements
fetch(url)
.then((response) => response.json())
.then(function(data) {

    return data.map(function(digimon) {
        let li = document.createElement('li')
        li.classList.add('card')
        li.innerHTML = `
        <img src="${digimon.img}" alt="${digimon.name}"/>
        <h1>${digimon.name}</h1>
        <p>${digimon.level}</p>
        <a target="_blank" href="https://digimon.fandom.com/wiki/${digimon.name}">
            <button><p>Digimon Fandom</p></button>
        </a>        
        `
        ul.appendChild(li)
    })

})
    .catch((error) => {
        console.log('Oops!' + error);
    })

