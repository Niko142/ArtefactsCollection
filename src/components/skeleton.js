// Skeleton-анимация для карточки с артефактами
export const createSkeletonCard = () => {
  return `
    <div class="swiper-slide">
      <div class="skeleton__card">
        <div class="skeleton skeleton--img"></div>
        <div class="skeleton__content">
          <div class="skeleton skeleton--title"></div>
          <div class="skeleton skeleton--text"></div>
          <div class="skeleton skeleton--text"></div>
          <div class="skeleton skeleton--text"></div>
          <div class="skeleton skeleton--button"></div>
        </div>
      </div>
    </div>
  `;
};

// Skeleton-анимация для галереи
export const createSkeletonWrapper = () => {
  return `<div class="skeleton skeleton__gallery"></div>`;
};
