import { VALIDATION_CONFIG } from "../constants/validation";

// Конфиг обработки
const createErrorHandler = (errorElement, inputField) => {
  return {
    showError: (msg) => {
      errorElement.textContent = msg;
      inputField.classList.add("invalid");
    },
    clear: () => {
      errorElement.textContent = "";
      inputField.classList.remove("invalid");
    },
  };
};

// Валидация формы
const validateInputField = (inputSelector) => {
  const { name, value } = inputSelector;
  const trimmedValue = value.trim();
  const errorElement = inputSelector.previousElementSibling;

  const errorHandler = createErrorHandler(errorElement, inputSelector);
  const config = VALIDATION_CONFIG[name];

  if (!config) return;

  errorHandler.clear();

  if (trimmedValue.length === 0) {
    return errorHandler.showError(config.required);
  }

  if (!config.pattern.test(trimmedValue)) {
    return errorHandler.showError(config.invalidFormat);
  }

  return true;
};

// Функция для валидации всей формы
export const validateForm = (inputSelector) => {
  let isValid = true;

  inputSelector.forEach((input) => {
    if (!validateInputField(input)) {
      isValid = false;
    }
  });

  return isValid;
};
