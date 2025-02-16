import Swiper from "swiper";
import "swiper/css";
import { cardItems } from "@/data/data.js";

const slider = document.querySelector(".swiper-wrapper");

const artefactCard = (image, title, text) => {
  return `
      <div class="swiper-slide">
        <article class='artefact__card'>
            <img src='${image}'/>
            <h3>${title}</h3>
            <p>${text}</p>
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
  // breakpoints
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
});
