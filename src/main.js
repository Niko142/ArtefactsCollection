import "@/style.css";
import "@/components/swiper";
import "@/components/gallery";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const inputs = document.querySelectorAll(".form__input");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    function isError(error, input, message) {
      error.textContent = message;
      input.classList.add("invalid");
      isValid = false;
    }

    inputs.forEach((input) => {
      let errorMessage = input.previousElementSibling;
      errorMessage.textContent = "";
      input.classList.remove("invalid");

      if (input.name === "name" && input.value.trim().length === 0) {
        isError(errorMessage, input, "Поле обязательно для заполнения");
      } else if (
        input.name === "name" &&
        !/^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(input.value.trim())
      ) {
        isError(errorMessage, input, "Недопустимый формат");
      } else if (input.name === "email" && input.value.trim().length === 0) {
        isError(errorMessage, input, "Поле обязательно для заполнения");
      } else if (
        input.name === "email" &&
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
          input.value.trim()
        )
      ) {
        isError(errorMessage, input, "Недопустимый формат");
      }
    });

    if (isValid) {
      setTimeout(() => {
        alert("Данные успешно отправлены!");
        inputs.forEach((input) => (input.value = ""));
      }, 500);
    }
  });
});
