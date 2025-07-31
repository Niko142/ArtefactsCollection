// Конфигурация валидации
export const VALIDATION_CONFIG = {
  name: {
    required: "Поле обязательно для заполнения",
    pattern: /^[a-zA-Zа-яА-ЯёЁ\s]+$/,
    invalidFormat: "Недопустимый формат",
  },
  email: {
    required: "Поле обязательно для заполнения",
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    invalidFormat: "Недопустимый формат",
  },
};
