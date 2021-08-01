// Dragon Clicker
var waterDragon = dragon("water");
var windDragon = dragon("wind");
var fireDragon = dragon("fire");
var earthDragon = dragon("earth");
var spaceDragon = dragon("space");

function dragon(species) {
    return {
        category: `#${species} output`,
        click:0,
        addClick: function(clickNumber) {
            this.click += clickNumber;
            document.querySelector(this.category).innerText = this.click;
        },
        view: function() {
            document.querySelector(".dragonCard").innerHTML = "";
            document.querySelector(".dragonCard").innerHTML += `<div class="card" id="${species}" onclick="${species}Dragon.addClick(1)">
              <h2>${species} dragon</h2>
              <span class="${species}"> &#128009; </span>
              <p>Clicks: <output>${this.click}</output> </p>
            </div>`
        }
    }
}