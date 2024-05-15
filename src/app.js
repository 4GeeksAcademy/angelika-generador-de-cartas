/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.addEventListener("DOMContentLoaded", function() {
  document
    .getElementById("cardGenerator")
    .addEventListener("click", generateCard);
  // document.getElementById("card").style.visibility = "visibility";
});

const suit = ["hearts", "diamonds", "clubs", "spades"];
const value = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

const image = {
  hearts: {
    topIcon:
      "https://github.com/AngelikaWebDev/icons/blob/main/suits/heart-up.png?raw=true",
    bottomIcon:
      "https://github.com/AngelikaWebDev/icons/blob/main/suits/heart-down.png?raw=true"
  },
  diamonds: {
    topIcon:
      "https://github.com/AngelikaWebDev/icons/blob/main/suits/diamond-red.png?raw=true",
    bottomIcon:
      "https://github.com/AngelikaWebDev/icons/blob/main/suits/diamond-red.png?raw=true"
  },
  clubs: {
    topIcon:
      "https://github.com/AngelikaWebDev/icons/blob/main/suits/Clubs-up.png?raw=true",
    bottomIcon:
      "https://github.com/AngelikaWebDev/icons/blob/main/suits/Clubs-down.png?raw=true"
  },
  spades: {
    topIcon:
      "https://github.com/AngelikaWebDev/icons/blob/main/suits/Spades-up.png?raw=true",
    bottomIcon:
      "https://github.com/AngelikaWebDev/icons/blob/main/suits/Spades-down.png?raw=true"
  }
};

function generateCard() {
  const topIcon = document.getElementById("iconTop");
  const bottomIcon = document.getElementById("iconBottom");
  const cardValue = document.getElementById("cardValue");

  const suitRandom = Math.floor(Math.random() * suit.length);
  const cardValueRandom = Math.floor(Math.random() * value.length);
  cardValue.innerHTML = value[cardValueRandom];
  const suitRdm = suit[suitRandom];
  const cardValueRdm = value[cardValueRandom];

  topIcon.src = image[suitRdm].topIcon;
  bottomIcon.src = image[suitRdm].bottomIcon;

  document.getElementById("card").classList.remove("hidden");
}

document
  .getElementById("cardGenerator")
  .addEventListener("click", generateCard);
