import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setReservationLessonsCount, setReservationLessonsData} from '../../redux/reservation-reducer';
import './__table.scss';
import {Spin} from "antd";

const CalendarTable = () => {
    const [selectedSlots, setSelectedSlots] = useState([]);
    const [reservationLessons, setReservationLessons] = useState(1);
    const dispatch = useDispatch();
    const {
        reservationLessonsCount,
        holidays,
        timetableProfessor,
        reservationTableIsFetching
    } = useSelector(state => state.reservationReducer);

    useEffect(() => {
        dispatch(setReservationLessonsCount(selectedSlots.length));
        dispatch(setReservationLessonsData(selectedSlots));
    }, [selectedSlots]);

    const toggleSlot = (date, time) => {
        const slotKey = `${date}T${time}:00`;
        if (selectedSlots.includes(slotKey)) {
            setSelectedSlots(selectedSlots.filter(slot => slot !== slotKey));
        } else {
            setSelectedSlots([...selectedSlots, slotKey]);
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
                <Spin spinning={reservationTableIsFetching}>
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
                            {dates.map((date, dateIndex) => {
                                const dateString = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
                                const isSelected = selectedSlots.some(slot => slot === `${dateString}T${timeSlot}:00`);
                                const isHoliday = holidays.some(item => item.date === dateString);
                                const isAlreadyBooked = timetableProfessor.some(lesson => lesson.datetime === `${dateString}T${timeSlot}:00Z`);
                                const isReserved = isAlreadyBooked || isHoliday;

                                return (
                                    <td
                                        key={dateIndex}
                                        onClick={() => !isReserved && toggleSlot(dateString, timeSlot)}
                                        className={`reserv_day ${isSelected ? 'selected' : ''} ${isReserved ? 'reserved' : ''} ${isReserved ? 'disabled' : ''}`}
                                    >
                                        {isSelected ? 'Выбрано' : ''}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                    </tbody>
                </Spin>
            </table>
            <button className="show-button" onClick={() => console.log(selectedSlots)}>
                Показать выбранные даты
            </button>
        </div>
    );
};

export default CalendarTable;
