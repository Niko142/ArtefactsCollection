import { artefactItems } from "@/data/data";

const galleryWrapper = document.querySelector("figure.novelty__gallery");

const artefactEl = (id, x, y, label, img, alt) => {
  return `
    <div class='artefact__item item-${id}'>
        <span class='artefact__indicator' style="left: ${x}px; top: ${y}px">${label}</span>
        <img src='${img}' alt='${alt}'/>
    </div>
    `;
}

artefactItems.map((item) => galleryWrapper.insertAdjacentHTML('beforeend', artefactEl(item.id, item.x, item.y, item.label, item.image, item.alt)));
