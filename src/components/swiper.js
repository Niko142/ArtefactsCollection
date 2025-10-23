import Swiper from "swiper";
import { Pagination } from "swiper/modules";

import { cardItems } from "@/data/card.js";

import { LOADING_DELAY } from "../constants/delay";
import { loadImages } from "../services/imageLoader";
import { renderSkeletonCard } from "./skeleton";

import "swiper/css";
import "swiper/css/pagination";
import "@assets/styles/swiper.css";
import "@assets/styles/card.css";

const slider = document.querySelector(".swiper-wrapper");

// Обновленная функция для создания карточки с обработкой загрузки изображений
const artefactCard = (card) => {
  return `
    <div class="swiper-slide">
      <article class='artefact__card'>
        <div class='artefact__img'>
          <span class='artefact__indicator' style="inset: 16px">${card.label}</span>
          <img src='${card.img}' alt='${card.alt}' width='${card.width}' height='${card.height}' loading="lazy" class="image-loading"/>
        </div>
        <div class='artefact__content'>
          <h3>${card.title}</h3>
          <p>${card.text}</p>
          <button class='artefact__detail'>Подробнее</button>
        </div>
      </article>
    </div>
  `;
};

// Обработчик для отображения skeleton-анимации
const showSkeletons = () => {
  slider.innerHTML = cardItems.map(() => renderSkeletonCard()).join("");
};

// Обработчик загрузки карточек
const loadCards = async () => {
  // Имитация задержки
  await new Promise((res) => setTimeout(res, LOADING_DELAY));

  slider.innerHTML = "";
  await loadImages(cardItems, slider, artefactCard);
};

// Инициализация слайдера
export const initSlider = async () => {
  showSkeletons();

  // Инициализация Swiper
  new Swiper(".swiper", {
    modules: [Pagination],
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: "auto",

    breakpoints: {
      475: { slidesPerView: 1 },
      700: { slidesPerView: 2, spaceBetween: 50 },
      1075: { slidesPerView: 3, spaceBetween: 50 },
      1370: { slidesPerView: 4, spaceBetween: 10 },
    },
    loop: true,
  });

  await loadCards();
};
