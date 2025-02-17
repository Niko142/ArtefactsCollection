import Swiper from "swiper";
import "swiper/css";
import { cardItems } from "@/data/data.js";

const slider = document.querySelector(".swiper-wrapper");

const artefactCard = (image, title, text) => {
  return `
      <div class="swiper-slide">
        <article class='artefact__card'>
          <div class='artefact__img'>
            <img src='${image}'/>
          </div>
          <div class='artefact__content'>
            <h3>${title}</h3>
            <p>${text}</p>
            <button class='artefact__detail'>Подробнее</button>
          </div>
        </article>
      </div>
      `;
};

cardItems.map((card) => {
  return slider.insertAdjacentHTML(
    "beforeend",
    artefactCard(card.image, card.title, card.text)
  );
});

const swiper = new Swiper(".swiper", {
  // modules: [],
  slidesPerView: 1,
  // Не итоговые брейкпоинты
  breakpoints: {
    475: {slidesPerView: 1},
    768: {slidesPerView: 2},
    1100: {slidesPerView: 3},
    1370: {slidesPerView: 4},
  },
  spaceBetween: 30,
  loop: true,
});
