import modals from "./modules/modals";
import slides from "./modules/slides";

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
});
