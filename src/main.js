import "@/style.css";
import initializeSlider from "./components/swiper";
import initializeGallery from "./components/gallery";
import { VALIDATION_CONFIG } from "./config/config";

document.addEventListener("DOMContentLoaded", () => {
  const feedbackForm = document.querySelector(".form");
  const formInputs = document.querySelectorAll(".form__input");

  // Инициализация слайдера
  initializeSlider();
  // Инициализация галереи
  initializeGallery();

  feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;
    function createErrorHandler(errorElement, inputField) {
      return {
        showError: (errorMessage) => {
          errorElement.textContent = errorMessage;
          inputField.classList.add("invalid");
          isValid = false;
        },
        clear: () => {
          errorElement.textContent = "";
          inputField.classList.remove("invalid");
        },
      };
    }

    formInputs.forEach((input) => {
      const { name, value } = input;
      const trimmedValue = value.trim();
      const errorElement = input.previousElementSibling;
      const errorHandler = createErrorHandler(errorElement, input);

      const config = VALIDATION_CONFIG[name];
      if (!config) return;

      errorHandler.clear(); // Очищаем поля от ошибок

      if (trimmedValue.length === 0) {
        return errorHandler.showError(config.required);
      }

      if (!config.pattern.test(trimmedValue)) {
        return errorHandler.showError(config.invalidFormat);
      }
    });

    if (isValid) {
      setTimeout(() => {
        alert("Данные успешно отправлены!");
        formInputs.forEach((input) => (input.value = ""));
      }, 500);
    }
  });
});
