import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setReservationLessonsCount, setReservationLessonsData} from '../../redux/reservation-reducer';
import './__table.scss';
import {Spin} from "antd";
import { findMatchingSlot, formatScheduleText, getMonth } from '../common/customFunctions';

const CalendarTable = ({dates, setCurrentWeekStart, today}) => {
    const [selectedSlots, setSelectedSlots] = useState([]);
    const [weeksForward, setWeeksForward] = useState(0)
    //
    const dispatch = useDispatch();
    const {
        holidays,
        timetableProfessor,
        reservationTableIsFetching,
        closedTimetableProfessor
    } = useSelector(state => state.reservationReducer);
    const text = formatScheduleText(closedTimetableProfessor) 
    console.log(text);
    const {format} = require('date-fns');
    const {ru} = require('date-fns/locale');

    const daysOfWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    const setStartOfWeek = (date, weeks) => {
        const day = date.getDay();
        const diff = date.getDate() - day + 1 + (weeks * 7);
        const startOfWeek = new Date(date.getFullYear(), date.getMonth(), diff);
        return startOfWeek;
    };


    useEffect(() => {
        dispatch(setReservationLessonsCount(selectedSlots.length));
        dispatch(setReservationLessonsData(selectedSlots));
    }, [selectedSlots]);
    useEffect(() => {
        setCurrentWeekStart(setStartOfWeek(today, weeksForward));
    }, [])
    const toggleSlot = (date, time) => {
        const slotKey = `${date}T${time}:00`;
        if (selectedSlots.includes(slotKey)) {
            setSelectedSlots(selectedSlots.filter(slot => slot !== slotKey));
        } else {
            setSelectedSlots([...selectedSlots, slotKey]);
        }
    };

    const timeSlots = Array.from({length: 10}, (_, index) => {
        const hour = 12 + index;
        return `${hour}:00`;
    });
    const timeSlotsMobile = Array.from({length: 10}, (_, index) => {
        const startHour = 12 + index;
        const endHour = startHour + 1;
        return {start: `${startHour}:00`, end: `${endHour}:00`};
    });

    // Функция для проверки, является ли день в прошлом или сегодняшним днем
    const isPastOrToday = (dateToCheck, today) => {
        const dateToCheckWithoutTime = new Date(dateToCheck);
        dateToCheckWithoutTime.setHours(0, 0, 0, 0);

        const todayWithoutTime = new Date(today);
        todayWithoutTime.setHours(0, 0, 0, 0);

        // Сравниваем даты без времени
        return dateToCheckWithoutTime >= todayWithoutTime;
    };
    return (
        <div>
            <div className="calendar-container">
                <Spin spinning={reservationTableIsFetching}>
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
                                {dates.map((date, dateIndex) => {
                                    const dateString = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
                                    const isSelected = selectedSlots.some(slot => slot === `${dateString}T${timeSlot}:00`);
                                    const isHoliday = holidays.some(item => item.date === dateString); 
                                    const currentData = getMonth(dateString) 
                                    const isAlreadyBooked = timetableProfessor.some(lesson => lesson.datetime === `${dateString}T${timeSlot}:00Z`);
                                    const isReserved = isAlreadyBooked || isHoliday; 
                                    const isWorks = findMatchingSlot(closedTimetableProfessor,currentData,timeSlot) 
                                    const isFutureDate = isPastOrToday(dateString, today)
                                    return (
                                        <td
                                            key={dateIndex}
                                            onClick={() => !isReserved && isFutureDate && toggleSlot(dateString, timeSlot)}
                                            className={`reserv_day ${isSelected ? 'selected' : ''} ${isReserved || !isFutureDate || !isWorks ? 'reserved' : ''} ${isReserved || !isFutureDate ? 'disabled' : ''}`}
                                        >
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </Spin>
            </div>


            {/* ДЛЯ МОБИЛОК */
            }
            <div className="calendar-container-mobile">
                {dates.map((date, dateIndex) => {
                    const inputDate = new Date(date);
                    const formattedDayAndMonth = format(inputDate, 'd MMMM', {locale: ru});
                    const formattedDayOfWeek = format(inputDate, 'EEEE', {locale: ru});

                    return (
                        <div className="reser_card" key={dateIndex}>
                            <Spin spinning={reservationTableIsFetching}>
                                <div className="reser_date">
                                    <p className="reser_week">{formattedDayOfWeek}, <span
                                        className="reser_day">{formattedDayAndMonth}</span></p>
                                </div>
                                <div className="reser_times_block">
                                    {timeSlotsMobile.map((timeSlot, timeIndex) => {
                                        const dateString = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
                                        const isSelected = selectedSlots.some(slot => slot === `${dateString}T${timeSlot.start}:00`);
                                        const isHoliday = holidays.some(item => item.date === dateString);
                                        const isAlreadyBooked = timetableProfessor.some(lesson => lesson.datetime === `${dateString}T${timeSlot}:00Z`);
                                        const isReserved = isAlreadyBooked || isHoliday;
                                        const isFutureDate = date > today
                                        return (
                                            <div key={timeIndex} style={{width: "33%"}}>
                                                <button
                                                    onClick={() => !isReserved && isFutureDate && toggleSlot(dateString, timeSlot.start)}
                                                    className={`reser_times ${isSelected ? 'selected' : ''} ${isReserved || !isFutureDate ? 'reserved' : ''} ${isReserved || !isFutureDate ? 'disabled' : ''}`}>
                                                    {`${timeSlot.start} - ${timeSlot.end}`
                                                    }</button>
                                            </div>
                                        )
                                    })}
                                </div>
                            </Spin>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default CalendarTable;
