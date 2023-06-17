//Define DonutMaker class
//Set initial variable values
let donutCount = 0;
let donutsPerClick = 1;
let autoClickersPurchased = 0;
let level = 1;
let slowPokePrice = 150;
let slowPokeCount = 0;
let jolteonCount = 0;
let jolteonPrice = 250;
let gyaradosCount = 0;
let gyaradosPrice = 500;

function purchaseSlowPoke() {
  if (donutCount >= slowPokePrice) {
    donutCount = donutCount - slowPokePrice;
    slowPokeCount = slowPokeCount + 1;
    slowPokePrice = Math.round(slowPokePrice * 1.1);
    level = level + 1;

    document.getElementById("donutCount").innerHTML = donutCount;
    document.getElementById("slowPokePrice").innerHTML = slowPokePrice;
    document.getElementById("slowPokeCount").innerHTML = slowPokeCount;
    document.getElementById("level").innerHTML = level;
  }
}

function purchaseJolteon() {
  if (donutCount >= jolteonPrice) {
    donutCount = donutCount - jolteonPrice;
    jolteonCount = jolteonCount + 1;
    autoClickersPurchased = autoClickersPurchased + 1;
    jolteonPrice = Math.round(jolteonPrice * 1.2);
    level = level + 2;

    document.getElementById("donutCount").innerHTML = donutCount;
    document.getElementById("jolteonCount").innerHTML = jolteonCount;
    document.getElementById("jolteonPrice").innerHTML = jolteonPrice;
    document.getElementById("level").innerHTML = level;
  }
}

function purchaseGyarados() {
  if (donutCount >= gyaradosPrice) {
    donutCount = donutCount - gyaradosPrice;
    gyaradosCount = gyaradosCount + 1;
    autoClickersPurchased = autoClickersPurchased + 1;
    gyaradosPrice = Math.round(gyaradosPrice * 1.5);
    level = level + 3;

    document.getElementById("donutCount").innerHTML = donutCount;
    document.getElementById("gyaradosCount").innerHTML = gyaradosCount;
    document.getElementById("gyaradosPrice").innerHTML = gyaradosPrice;
    document.getElementById("level").innerHTML = level;
  }
}

function donutClick(amount) {
  donutCount = donutCount + amount;
  document.getElementById("donutCount").innerHTML = donutCount;
}

function loadGame() {
  let savedGame = JSON.parse(localStorage.getItem("gameSave"));
  // To prevent errors -->
  if (typeof savedGame.donutCount !== "undefined")
    donutCount = savedGame.donutCount;
  if (typeof savedGame.donutsPerClick !== "undefined")
    donutsPerClick = savedGame.donutsPerClick;
  if (typeof savedGame.level !== "undefined") level = savedGame.level;
  if (typeof savedGame.autoClickersPurchased !== "undefined")
    autoClickersPurchased = savedGame.autoClickersPurchased;
  if (typeof savedGame.slowPokeCount !== "undefined")
    slowPokeCount = savedGame.slowPokeCount;
  if (typeof savedGame.slowPokePrice !== "undefined")
    slowPokePrice = savedGame.slowPokePrice;
  if (typeof savedGame.jolteonCount !== "undefined")
    jolteonCount = savedGame.jolteonCount;
  if (typeof savedGame.jolteonPrice !== "undefined")
    jolteonPrice = savedGame.jolteonPrice;
  if (typeof savedGame.gyaradosCount !== "undefined")
    gyaradosCount = savedGame.gyaradosCount;
  if (typeof savedGame.gyaradosPrice !== "undefined")
    gyaradosPrice = savedGame.gyaradosPrice;
}

function saveGame() {
  let gameSave = {
    donutCount: donutCount,
    donutsPerClick: donutsPerClick,
    level: level,
    autoClickersPurchased: autoClickersPurchased,
    slowPokeCount: slowPokeCount,
    slowPokePrice: slowPokePrice,
    jolteonCount: jolteonCount,
    jolteonPrice: jolteonPrice,
    gyaradosCount: gyaradosCount,
    gyaradosPrice: gyaradosPrice,
  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));

  // if (level !== undefined) {
  //   level = slowPokeCount * 1 + jolteonCount * 2 + gyaradosCount * 3;
  // }
}

function resetGame() {
  if (confirm("Confirm you would like to reset your game.")) {
    let gameSave = {};
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
    location.reload();
  }
}

window.onload = function () {
  loadGame();
  document.getElementById("donutCount").innerHTML = donutCount;
  document.getElementById("level").innerHTML = level;
  document.getElementById("slowPokeCount").innerHTML = slowPokeCount;
  document.getElementById("slowPokePrice").innerHTML = slowPokePrice;
  document.getElementById("jolteonCount").innerHTML = jolteonCount;
  document.getElementById("jolteonPrice").innerHTML = jolteonPrice;
  document.getElementById("gyaradosCount").innerHTML = gyaradosCount;
  document.getElementById("gyaradosPrice").innerHTML = gyaradosPrice;
};

setInterval(function () {
  donutCount = donutCount + Math.abs(slowPokeCount * 2);
  donutCount = donutCount + Math.abs(jolteonCount * 3);
  donutCount = donutCount + Math.abs(gyaradosCount);

  document.getElementById("donutCount").innerHTML = donutCount;
}, 1000);

setInterval(function () {
  saveGame();
}, 3000);
