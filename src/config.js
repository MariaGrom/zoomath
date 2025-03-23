const loadConfig = async () => {
  try {
    const response = await fetch("/config.json");
    const config = await response.json();
    return config.API_URL; // Возвращаем API URL
  } catch (error) {
    console.error("Ошибка загрузки config.json", error);
    return ""; // Если ошибка, возвращаем пустую строку
  }
};

export { loadConfig };
