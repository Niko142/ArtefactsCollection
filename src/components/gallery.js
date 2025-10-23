import { galleryItems } from "@/data/gallery.js";

import { LOADING_DELAY } from "../constants/delay";
import { loadImages } from "../services/imageLoader";
import { renderSkeletonGallery } from "./skeleton";

import "@assets/styles/gallery.css";

const galleryWrapper = document.querySelector("figure.novelty__gallery");

const artefactItem = (item) => {
  return `
    <div class="artefact__item item-${item.id}">
      <span class="artefact__indicator" style="left: ${item.x}px; top: ${item.y}px">${item.label}</span>
      <img src="${item.img}" alt="${item.alt}" width=${item.width} height=${item.height} loading="lazy"/>
    </div>
  `;
};

// Обработчик для отображения skeleton-анимации
const showSkeletonGallery = () => {
  galleryWrapper.innerHTML = renderSkeletonGallery();
};

// Обработчик загрузки галереи
const loadArtefacts = async () => {
  // Имитация задержки
  await new Promise((res) => setTimeout(res, LOADING_DELAY));

  galleryWrapper.innerHTML = "";
  await loadImages(galleryItems, galleryWrapper, artefactItem);
};

export const initGallery = async () => {
  showSkeletonGallery();
  await loadArtefacts();
};
