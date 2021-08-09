import menu from "./menu.json";
import cardCreatorTpl from "./Templates/cardCreator.hbs";
import "./themes-switcher.js";
//console.log(cardCreatorTpl);

const cardsMarkup = createCardsMarkup(menu);

function createCardsMarkup(menu) {
  return menu.map(cardCreatorTpl).join("");
}

//console.log(createCardsMarkup(menu));

document.querySelector(".js-menu").insertAdjacentHTML("beforeend", cardsMarkup);
