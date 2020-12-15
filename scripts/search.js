const inputSearch = document.querySelector("#input-search");

inputSearch.addEventListener('keyup', function(event) {
  var key = event.keyCode;
  if (key === 13) {
    searchDigimons()
  }
})

function searchDigimons() {
  //List all digimons and create array with names
  setTimeout(function () {
    const queryDigimons = document.querySelectorAll(".digimon-name");
    const digimons = Array.from(queryDigimons);
    const digimonsMapeados = digimons.map(digimon => digimon);

    for(i = 0; i < digimonsMapeados.length; i++) {
      const searchValue = inputSearch.value
      const digimonName = digimonsMapeados[i].innerHTML

      digimonsMapeados[i].classList.remove("active");

      if(searchValue == digimonName || searchValue.toUpperCase() == digimonName) {
        digimonsMapeados[i].classList.add("active");
        continue;
      } 
    } 
  }, 200);
  
}

// TO DO LIST
/*
- ADD ANCHOR TO SCROW DOWN TO DIGIMONSMAPEADOS[I]
- IMPROVE CSS FOR ACTIVE CLASS, MAYBE SOME SHADOW 
*/