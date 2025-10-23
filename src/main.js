import { initGallery } from "./components/gallery";
import { initSlider } from "./components/swiper";
import { FORM_DELAY } from "./constants/delay";
import { validateForm } from "./services/formValidation";

import "@/index.css";

document.addEventListener("DOMContentLoaded", () => {
  const feedbackForm = document.querySelector(".form");
  const formInputs = document.querySelectorAll(".form__input");

  initSlider(); // Инициализация слайдера
  initGallery(); // Инициализация галереи

  // Обработчик оправки данных в форме
  feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const isValid = validateForm(formInputs);

    if (isValid) {
      formInputs.forEach((input) => (input.value = ""));
      setTimeout(() => {
        alert("Данные успешно отправлены!");
      }, FORM_DELAY);
    }
  });
});
