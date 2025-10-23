// Обработчик загрузки изображения
const handleImageLoad = (img) =>
  new Promise((resolve, reject) => {
    const onLoadOrError = () => {
      img.classList.remove("img--loading");
      img.classList.add("img--loaded");
      resolve();
    };

    img.onload = onLoadOrError;
    img.onerror = reject;

    if (img.complete) onLoadOrError();
  });

// Основная логика для загрузки всех изображений
export const loadImages = async (
  dataItems,
  containerSelector,
  itemSelector
) => {
  let loadedItems = 0; // Счеткик кол-ва загруженных изображений
  const totalItems = dataItems.length;

  const imagePromises = dataItems.map(async (item, index) => {
    containerSelector.insertAdjacentHTML("beforeend", itemSelector(item));

    const img = containerSelector.children[index].querySelector("img");

    try {
      await handleImageLoad(img);
      loadedItems++;
    } catch {
      return null;
    }
  });

  await Promise.allSettled(imagePromises);

  return loadedItems === totalItems;
};
