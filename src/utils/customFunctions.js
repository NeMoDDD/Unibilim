export function compareDateWithProps(dateString) {
    // Парсим строку даты, пришедшую через пропсы
    const propDate = new Date(dateString);
  
    // Получаем текущее время
    const currentDate = new Date();
  
    // Проверяем, находится ли текущее время в пределах 15 минут до даты из пропсов
    const diffInMinutes = (propDate.getTime() - currentDate.getTime()) / (1000 * 60);
    if (diffInMinutes <= 15 && diffInMinutes >= 0) {
      return true;
    }
  
    // Если время не совпадает, возвращаем false
    return false;
  }