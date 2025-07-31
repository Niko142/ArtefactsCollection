import { cardItems } from "@/data/data.js";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import { createSkeletonCard } from "./skeleton";
import "swiper/css";
import "swiper/css/pagination";
import "@assets/styles/skeleton.css";
import "@assets/styles/swiper.css";

const slider = document.querySelector(".swiper-wrapper");

// Обновленная функция для создания карточки с обработкой загрузки изображений
const artefactCard = ({ label, image, alt, width, height, title, text }) => {
  return `
    <div class="swiper-slide">
      <article class='artefact__card'>
        <div class='artefact__img'>
          <span class='artefact__indicator' style="left: 16px; top: 16px">${label}</span>
          <img src='${image}' alt='${alt}' width='${width}' height='${height}' loading="lazy" class="image-loading"/>
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

// Обработчик для показа skeleton-анимации
const showSkeletons = () => {
  slider.innerHTML = "";
  for (let i = 0; i < cardItems.length; i++) {
    slider.insertAdjacentHTML("beforeend", createSkeletonCard());
  }
};

// Обработчик загрузки настоящих карточек
const loadCards = async () => {
  // Имитация задержки на 300 ms
  await new Promise((resolve) => setTimeout(resolve, 300));

  return new Promise((resolve) => {
    slider.innerHTML = "";
    let loadedImages = 0; // Загруженные изображения
    const totalImages = cardItems.length; // Общее кол-во изображений

    cardItems.map((card, index) => {
      slider.insertAdjacentHTML("beforeend", artefactCard(card));

      // Добавляем обработчик загрузки изображения
      const img = slider.children[index].querySelector("img");

      const onImageLoad = () => {
        img.classList.remove("img--loading");
        img.classList.add("img--loaded");
        loadedImages++;

        loadedImages === totalImages ? resolve() : null;
      };

      img.complete ? onImageLoad() : (img.onload = img.onerror = onImageLoad);
    });
  });
};

// Инициализация swiper-а
const initializeSlider = async () => {
  showSkeletons();

  // Инициализация Swiper
  const swiper = new Swiper(".swiper", {
    modules: [Pagination],
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: "auto",

    // Не итоговые breakpoints
    breakpoints: {
      475: { slidesPerView: 1 },
      700: { slidesPerView: 2, spaceBetween: 50 },
      1075: { slidesPerView: 3, spaceBetween: 50 },
      1370: { slidesPerView: 4, spaceBetween: 10 },
    },
    // slidesPerView: 30,
    loop: true,
  });

  // Загрузка полноценных карточек
  await loadCards();
};

export default initializeSlider;
