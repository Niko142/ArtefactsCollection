import { artefactItems } from "@/data/data.js";
import { createSkeletonWrapper } from "./skeleton";
import "@assets/styles/skeleton.css";

const galleryWrapper = document.querySelector("figure.novelty__gallery");

const artefactElement = ({ id, x, y, label, image, alt, width, height }) => {
  return `
    <div class="artefact__item item-${id}">
      <span class="artefact__indicator" style="left: ${x}px; top: ${y}px">${label}</span>
      <img src="${image}" alt="${alt}" width=${width} height=${height} loading="lazy"/>
    </div>
  `;
};

// Показать skeleton-анимацию
const showSkeletonGallery = () => {
  galleryWrapper.innerHTML = createSkeletonWrapper();
};

const loadArtefacts = async () => {
  // Имитация задержки на 300 ms
  await new Promise((resolve) => setTimeout(resolve, 300));

  return new Promise((resolve) => {
    galleryWrapper.innerHTML = "";
    let loadedItems = 0; // Загруженное количество элементов
    const totalItems = artefactItems.length; // Общее количество элементов

    artefactItems.forEach((el, index) => {
      galleryWrapper.insertAdjacentHTML("beforeend", artefactElement(el));
      const img = galleryWrapper.children[index].querySelector("img");

      const onImageLoad = () => {
        loadedItems++;
        loadedItems === totalItems ? resolve() : null;
      };

      img.complete ? onImageLoad() : (img.onload = img.onerror = onImageLoad);
    });
  });
};

const initializeGallery = async () => {
  showSkeletonGallery();
  await loadArtefacts();
};

export default initializeGallery;
