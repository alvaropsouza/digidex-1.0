function searchDigimons() {
  const inputSearch = document.querySelector("#input-search");

  //List all digimons and create array with names
  setTimeout(function () {
    const queryDigimons = document.querySelectorAll(".digimon-name");
    const digimons = Array.from(queryDigimons);
    const digimonsMapeados = digimons.map(digimon => digimon);

    for(i = 0; i < digimonsMapeados.length; i++) {
      if(inputSearch.value == digimonsMapeados[i].innerHTML) {
        digimonsMapeados[i].classList.add("active");
      }
    }
  }, 200);
  
}

// TO DO LIST
/*
- REMOVE CLASS FROM PREVIEW ELEMENT (FOR NEW SEARCHS)
- ADD ANCHOR TO SCROW DOWN TO DIGIMONSMAPEADOS[I]
- IMPROVE CSS FOR ACTIVE CLASS, MAYBE SOME SHADOW
*/