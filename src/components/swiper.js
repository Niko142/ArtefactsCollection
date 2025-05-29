import { cardItems } from "@/data/data.js";
import Swiper from "swiper";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const slider = document.querySelector(".swiper-wrapper");

const artefactCard = (label, image, alt, width, height, title, text) => {
  return `
      <div class="swiper-slide">
        <article class='artefact__card'>
          <div class='artefact__img'>
            <span class='artefact__indicator' style="left: 16px; top: 16px">${label}</span>
            <img src='${image}' alt=${alt} width=${width} height=${height} loading="lazy"/>
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
    artefactCard(
      card.label,
      card.image,
      card.alt,
      card.width,
      card.height,
      card.title,
      card.text
    )
  );
});

const swiper = new Swiper(".swiper", {
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: "auto",
  // Не итоговые брейкпоинты
  breakpoints: {
    475: { slidesPerView: 1 },
    700: { slidesPerView: 2, spaceBetween: 50 },
    1075: { slidesPerView: 3, spaceBetween: 50 },
    1370: { slidesPerView: 4, spaceBetween: 10 },
  },
  // slidesPerView: 30,
  loop: true,
});
