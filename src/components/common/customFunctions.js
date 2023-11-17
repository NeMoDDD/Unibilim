export function sortUsers (users) { 
    const sortedUsers = [...users].sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
    ); 
    return sortedUsers
}
export function getMonth (dateStr) { 
const dateObject = new Date(dateStr);
const dayOfWeek = dateObject.getDay();
const daysOfWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
const dayName = daysOfWeek[dayOfWeek]; 
return dayName
} 
export const findMatchingSlot = (data, day, time) => {
    const dayTranslation = {
        'ПН': 'monday',
        'ВТ': 'tuesday',
        'СР': 'wednesday',
        'ЧТ': 'thursday',
        'ПТ': 'friday',
        'СБ': 'saturday',
        'ВС': 'sunday'
    };

    const englishDay = dayTranslation[day.toUpperCase()];

    if (englishDay in data) {
        for (const slot of data[englishDay]) { 
            const slotHour = slot.split(':')[0];
            const targetHour = time.split(':')[0]; 
            const start = data[englishDay][0].split(':')[0]
            const end = data[englishDay][1].split(':')[0]

            
            if (targetHour >= start && targetHour <= end) {
                return true;
            }
        }
    }

    return false;
}; 
export function formatDay(schedule) {
    const daysOfWeek = {
      monday: 'Понедельник',
      tuesday: 'Вторник',
      wednesday: 'Среда',
      thursday: 'Четверг',
      friday: 'Пятница',
      saturday: 'Суббота',
      sunday: 'Воскресенье'
    };
  
    const activeDays = Object.keys(schedule).filter(day => schedule[day].length > 0);
  
    const resultString = activeDays.map(day => daysOfWeek[day]).join(', ').toLocaleLowerCase() 

    return capitalizeFirstLetter(resultString);
  }
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



export function convertDaysToString(schedule){
    const daysOfWeeks = {
      monday: 'Пн',
      tuesday: 'Вт',
      wednesday: 'Ср',
      thursday: 'Чт',
      friday: 'Пт',
      saturday: 'Сб',
      sunday: 'Вс'
    };
    const timeIntervals = {};
  
    // Создаем объект с временными интервалами для каждого дня недели
    Object.keys(schedule).forEach(day => {
      const daySchedule = schedule[day];
  
      if (daySchedule.length > 0) {
        timeIntervals[daysOfWeeks[day]] = daySchedule;
      }
    });
  
    // Группируем дни недели с одинаковыми интервалами
    const groupedIntervals = {};
    Object.keys(timeIntervals).forEach(day => {
      const interval = timeIntervals[day].toString();
      if (!groupedIntervals[interval]) {
        groupedIntervals[interval] = [day];
      } else {
        groupedIntervals[interval].push(day);
      }
    });
  
    // Форматируем результат
    let result = '';
    Object.values(groupedIntervals).forEach(days => {
      const start = parseInt(timeIntervals[days[0]][0], 10);
      const end = parseInt(timeIntervals[days[0]][1], 10);
      const formattedDays = days.map(day => day.charAt(0).toUpperCase() + day.slice(1)).join(',');
  
      if (result !== '') {
        result += ' ';
      }
      result += `${formattedDays} - с ${start} до ${end}.`;
    });
  
    return result;
  }