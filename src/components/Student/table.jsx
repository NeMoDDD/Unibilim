import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setReservationLessonsCount, setReservationLessonsData} from '../../redux/reservation-reducer';
import './__table.scss';
import {Spin} from "antd";

const CalendarTable = ({dates, setCurrentWeekStart}) => {
    const [selectedSlots, setSelectedSlots] = useState([]);
    // const [currentWeekStart, setCurrentWeekStart] = useState(new Date());
    const [weeksForward, setWeeksForward] = useState(0)
    //
    const dispatch = useDispatch();
    const {
        // reservationLessonsCount,
        holidays,
        timetableProfessor,
        reservationTableIsFetching
    } = useSelector(state => state.reservationReducer);

    const setStartOfWeek = (date, weeks) => {
        const day = date.getDay();
        const diff = date.getDate() - day + 1 + (weeks * 7);
        const startOfWeek = new Date(date.getFullYear(), date.getMonth(), diff);
        return startOfWeek;
    };


    useEffect(() => {
        setCurrentWeekStart(setStartOfWeek(today, weeksForward));

        dispatch(setReservationLessonsCount(selectedSlots.length));
        dispatch(setReservationLessonsData(selectedSlots));
    }, [selectedSlots]);
    //
    const toggleSlot = (date, time) => {
        const slotKey = `${date}T${time}:00`;
        if (selectedSlots.includes(slotKey)) {
            setSelectedSlots(selectedSlots.filter(slot => slot !== slotKey));
        } else {
            setSelectedSlots([...selectedSlots, slotKey]);
        }
    };
    //
    const today = new Date();
    const daysOfWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    //
    // const goToNextWeek = () => {
    //     const nextWeekStart = new Date(currentWeekStart);
    //     nextWeekStart.setDate(currentWeekStart.getDate() + 7);
    //     setCurrentWeekStart(nextWeekStart);
    // };
    // const goToPreviousWeek = () => {
    //     const previousWeekStart = new Date(currentWeekStart);
    //     previousWeekStart.setDate(currentWeekStart.getDate() - 7);
    //
    //     const lastMonday = new Date();
    //     lastMonday.setDate(lastMonday.getDate() - (lastMonday.getDay() + 6) % 7);
    //
    //     if (previousWeekStart >= lastMonday) {
    //         setCurrentWeekStart(previousWeekStart);
    //     } else {
    //         setCurrentWeekStart(lastMonday);
    //     }
    // };
    //
    // const getStartOfWeek = (date) => {
    //     const day = date.getDay();
    //     const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    //     return new Date(date.getFullYear(), date.getMonth(), diff);
    // };
    //
    // const dates = Array.from({length: 7}, (_, index) => {
    //     const date = new Date(currentWeekStart);
    //     date.setDate(getStartOfWeek(currentWeekStart).getDate() + index);
    //     return date;
    // });
    //
    //
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
                                const isFutureDate = date > today

                                return (
                                    <td
                                        key={dateIndex}
                                        onClick={() => !isReserved && isFutureDate && toggleSlot(dateString, timeSlot)}
                                        className={`reserv_day ${isSelected ? 'selected' : ''} ${isReserved || !isFutureDate ? 'reserved' : ''} ${isReserved || !isFutureDate ? 'disabled' : ''}`}
                                    >
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
            {/*<button onClick={goToPreviousWeek}>Prev</button>*/}
            {/*<button onClick={goToNextWeek}>Next</button>*/}
        </div>
    );
};

export default CalendarTable;
