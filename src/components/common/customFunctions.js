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
export const formatScheduleText = (data) => {
    
};

