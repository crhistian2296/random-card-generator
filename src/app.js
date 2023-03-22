/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cardValues = [
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

const suitValues = ["♠", "♣", "♥", "♦"];

const card = () => cardValues[Math.floor(Math.random() * cardValues.length)];
const suit = () => suitValues[Math.floor(Math.random() * suitValues.length)];

const cardNumber = document.querySelector(".cardNumber");
const cardSuit = document.querySelectorAll(".cardSuit")[0];
const cardSuit2 = document.querySelectorAll(".cardSuit")[1];

function suiteColor(char) {
  if (char === "♣" || char === "♠") {
    cardSuit.style.color = "black";
    cardSuit2.style.color = "black";
  } else {
    cardSuit.style.color = "red";
    cardSuit2.style.color = "red";
  }
}

window.onload = function() {
  cardNumber.textContent = card();
  cardSuit.textContent = suit();
  cardSuit2.textContent = cardSuit.innerText;
  suiteColor(cardSuit.textContent);
};
