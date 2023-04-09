import modals from "./modules/modals";
import slides from "./modules/slides";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from './modules/pictureSize'

window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  modals();
  slides(
    ".feedback-slider-item",
    "horizontal",
    ".main-prev-btn",
    ".main-next-btn"
  );
  slides(".main-slider-item", "vertical");
  forms();
  mask("[name='phone']");
  checkTextInputs("[name='name']");
  checkTextInputs("[name='message']");
  showMoreStyles(".button-styles", "#styles .row");
  calc("#size", "#material", "#options", ".promocode", ".calc-price");
  filter();
  pictureSize('.sizes-block');
});
