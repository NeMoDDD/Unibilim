import './__table.scss'
import React, {useState} from 'react';

const CalendarTable = () => {
    const [selectedSlots, setSelectedSlots] = useState([]);

    const toggleSlot = (date, time) => {
        const slotKey = `${date}-${time}`;
        if (selectedSlots.some(slot => slot.date === date && slot.time === time)) {
            setSelectedSlots(selectedSlots.filter(slot => !(slot.date === date && slot.time === time)));
        } else {
            setSelectedSlots([...selectedSlots, {date, time}]);
        }
    };

    const today = new Date();
    const daysOfWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    const dates = Array.from({length: 7}, (_, index) => {
        const date = new Date(today);
        date.setDate(today.getDate() + index);
        return date;
    });

    const timeSlots = Array.from({length: 10}, (_, index) => {
        const hour = 12 + index;
        return `${hour}:00`;
    });

    return (
        <div className="calendar-container">
            <table className="calendar">
                <thead>
                <tr className="date_block">
                    <th></th>
                    {dates.map((date, index) => (
                        <th key={index}>
                            {date.getDate()},&nbsp;
                            {daysOfWeek[date.getDay()]}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {timeSlots.map((timeSlot, timeIndex) => (
                    <tr key={timeIndex}>
                        <td className="time_slot">{timeSlot}</td>
                        {dates.map((date, dateIndex) => (
                            <td
                                key={dateIndex}
                                onClick={() => toggleSlot(date.toISOString().split('T')[0], timeSlot)}
                                className={`reserv_day ${
                                    selectedSlots.some(
                                        slot => slot.date === date.toISOString().split('T')[0] && slot.time === timeSlot
                                    )
                                        ? 'selected'
                                        : ''
                                }`}
                            >
                                {selectedSlots.some(
                                    slot => slot.date === date.toISOString().split('T')[0] && slot.time === timeSlot
                                )
                                    ? 'Выбрано'
                                    : ''}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
            <button className="show-button" onClick={() => console.log(selectedSlots)}>
                Показать выбранные даты
            </button>
        </div>
    );
};

export default CalendarTable;
