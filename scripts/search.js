function searchDigimons() {
  const inputSearch = document.querySelector("#input-search");
  const inputSearchValue = inputSearch.addEventListener("change", function () {
    const inputValue = inputSearch.value;
    return inputValue;
  });

  console.log(inputSearchValue + " Valor do input");

  //List all digimons and create array with names
  setTimeout(function () {
    const queryDigimons = document.querySelectorAll(".digimon-name");
    const digimons = Array.from(queryDigimons);
    const digimonsMapeados = digimons.map((digimon) => digimon.textContent);
    console.log(digimonsMapeados);
  }, 2000);
}

// GOTTA START WORKING WITH CLASSES TO AVOID SCOPE PROBLEMS
