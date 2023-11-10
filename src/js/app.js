import { CardWidget } from "./card_widget";

const container = document.querySelector('.card-container');
const form = new CardWidget(container);
form.bindToDOM();