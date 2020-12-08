const input = document.querySelector("#input-search");

// Tentar trabalhar com event listener, para pegar o valor do input e comparar varrendo lista de arrays

function createArray() {
  setTimeout(function () {
    const names = document.querySelectorAll(".name");
    const namesArray = Array.from(names);
    return namesArray;
  }, 3000);
}
