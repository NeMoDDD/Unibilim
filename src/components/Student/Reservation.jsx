import minus from "../../assets/img/Group 212D.svg";
import minusMobile from "../../assets/img/Group 212.svg";
import plus from "../../assets/img/Group 211D.svg";
import plusMobile from "../../assets/img/Group 211.svg";
import backToTeacher from "../../assets/img/Vector 44 (1).svg";
import previous from "../../assets/img/Group 214.svg";
import next from "../../assets/img/Group 213.svg";

import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import "../../styles/__reservation.scss";
import Table from "./table";
import "../../styles/__timetable.scss";
import Header from "../Header/HeaderS";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { message, Spin } from "antd";
import {
  getReservationTable,
  initPayment,
  setWeekForward,
} from "../../redux/reservation-reducer";
import { addWeeks, format } from "date-fns";
import { ru } from "date-fns/locale";
import { convertDaysToString, formatDay } from "../common/customFunctions";

const Reservation = () => {
  const moment = require("moment-timezone");

  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());
  const [isPrevWeek, setPrevWeek] = useState(false);

  const { userRole, token } = useSelector((state) => state.loginReducer);
  const { defineProfessor } = useSelector((state) => state.professorsReducer);

  const [messageApi, contextHolder] = message.useMessage();
  const {
    reservationLessonsCount,
    oneLessonCost,
    reservationLessonsData,
    weekForward,
    paymentIsFetching,
    timetableProfessor,
    reservationTableIsFetching,
    closedTimetableProfessor,
  } = useSelector((state) => state.reservationReducer);
  console.log(closedTimetableProfessor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservationTable(defineProfessor.id, token));
  }, []);

  const minusWeekForwardHandler = () => {
    if (weekForward !== 1) {
      dispatch(setWeekForward(weekForward - 1));
    }
  };
  const plusWeekForwardHandler = () => {
    dispatch(setWeekForward(weekForward + 1));
  };

  const goToNextWeek = () => {
    const nextWeekStart = new Date(currentWeekStart);
    nextWeekStart.setDate(currentWeekStart.getDate() + 7);
    setCurrentWeekStart(nextWeekStart);
    setPrevWeek(true);
  };
  const goToPreviousWeek = () => {
    const previousWeekStart = new Date(currentWeekStart);
    previousWeekStart.setDate(currentWeekStart.getDate() - 7);

    const lastMonday = new Date();
    lastMonday.setDate(lastMonday.getDate() - ((lastMonday.getDay() + 6) % 7));
    if (previousWeekStart >= lastMonday) {
      setCurrentWeekStart(previousWeekStart);
    } else {
      setPrevWeek(false);
      setCurrentWeekStart(lastMonday);
    }
  };

  const getStartOfWeek = (date) => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.getFullYear(), date.getMonth(), diff);
  };

  const today = new Date();
  const dates = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(currentWeekStart);
    date.setDate(getStartOfWeek(currentWeekStart).getDate() + index);
    return date;
  });

  const reserveError = (message) => {
    messageApi.open({
      type: "error",
      content: message,
    });
  };
  const addWeeksToDate = (date, numberOfWeeks) => {
    const result = [];
    const professorDates = timetableProfessor.map((lesson) => lesson.datetime);

    let hasError = false;

    for (const dateStr of date) {
      const kyrgyzstanTime = moment(dateStr).tz("Asia/Bishkek");

      for (let i = 0; i < numberOfWeeks; i++) {
        kyrgyzstanTime.add(1, "weeks");
        const formattedDate = kyrgyzstanTime.format("YYYY-MM-DDTHH:mm:ss[Z]");

        if (
          !result.includes(formattedDate) &&
          !date.includes(formattedDate) &&
          !professorDates.includes(formattedDate)
        ) {
          result.push(formattedDate);
        } else {
          console.error();
          reserveError(
            `${formattedDate} уже забронировано, выберите другую дату!`
          );
          hasError = true;
        }
      }
    }

    if (!hasError) {
      // Выполняем диспетчер только если нет ошибок

      // Тут стоит заглушка предметов препода, так как там массив
      dispatch(
        initPayment(
          defineProfessor.id,
          result,
          Number(defineProfessor.price),
          defineProfessor.subject[0],
          token
        )
      );
    }
  };

  
  const payOnSubmit = (message) => {
    if (reservationLessonsCount !== 0) {
      addWeeksToDate(reservationLessonsData, weekForward); 
    } else {
      reserveError(message);
    }
  };
  console.log(weekForward);
  return (
    <>
      {contextHolder}
      <Header />
      <SideBar />
      {userRole === "student" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="reserve_block_main"
        >
          <Spin spinning={false}>
            <div className="reser_block">
              <div className="head_block">
                <NavLink
                  to="/teachlist"
                  className="backToTeacher_block back_btn"
                >
                  <img src={backToTeacher} alt="backToTeacher" />К выбору
                  учителя
                </NavLink>
              </div>
              <div className="reser_table_block">
                <div className="reser_table">
                  <div>
                    <p className="reser_teach">
                      {defineProfessor.firstName} {defineProfessor.surname}
                    </p>
                  </div>
                  <div className="choose_days">
                    <div className="choose_days_block">
                      <p
                        className="subj_costet"
                        style={{ fontWeight: "600", marginBottom: "0.3em" }}
                      >
                        Рабочие дни
                      </p>
                      <p className="txt_schedule">
                       {formatDay(closedTimetableProfessor)}.
                      </p>
                    </div>
                    <div className="choose_days_block">
                      <p
                        className="subj_costet"
                        style={{ fontWeight: "600", marginBottom: "0.3em" }}
                      >
                        Время занятий
                      </p>
                      <p className="txt_schedule">
                        {/* Пн,ср,пт - с 14:00 до 18:00 Сб,вс - с 12:00 до 21:00 */}
                        {convertDaysToString(closedTimetableProfessor)}
                      </p>
                    </div>
                    <div>
                      <p className="subj_costet">Цена занятия</p>
                      <p className="txt_schedule" style={{ fontSize: "24px" }}>
                        {" "}
                        {defineProfessor.price} сом{" "}
                      </p>
                    </div>
                  </div>
                  <div className="choose_study_days_block">
                    <p className="choose_study_days_txt">
                      Выберите дни обучения
                    </p>
                    <div className="week_forward_block">
                      <button
                        className={
                          !isPrevWeek
                            ? "previous_btn"
                            : "previous_btn previous_btn_rotate"
                        }
                        onClick={goToPreviousWeek}
                      >
                        <img src={!isPrevWeek ? previous : next} alt="minus" />
                      </button>
                      <p className="reser_date">
                        {format(dates[0], "d MMM", { locale: ru }).replace(
                          /\.$/,
                          ""
                        )}
                        &nbsp; - &nbsp;
                        {format(dates[dates.length - 1], "d MMM", {
                          locale: ru,
                        }).replace(/\.$/, "")}
                      </p>
                      <button className="next_btn" onClick={goToNextWeek}>
                        <img src={next} alt="plus" />
                      </button>
                    </div>
                  </div>
                  <Table
                    dates={dates}
                    setCurrentWeekStart={setCurrentWeekStart}
                    today={today}
                  />
                </div>
              </div>
              <div className="pay_block">
                <p className="totalCost_txt" style={{ marginLeft: "0px" }}>
                  Итоговый расчет
                </p>
                <div className="pay_subj">
                  <p className="costet">
                    {reservationLessonsCount * weekForward} дн.
                  </p>
                </div>
                <div className="pay_subj" style={{ marginTop: "15px" }}>
                  <p className="costet" style={{ fontSize: "16px" }}>
                    На сколько недель?
                  </p>
                  <div className="week_forward_block">
                    <button
                      className="minus_btn"
                      onClick={minusWeekForwardHandler}
                    >
                      <img src={minus} alt="minus" />
                    </button>
                    <p className="week_forward">{weekForward}</p>
                    <button
                      className="plus_btn"
                      onClick={plusWeekForwardHandler}
                    >
                      <img src={plus} alt="plus" />
                    </button>
                  </div>
                </div>
                <div className="for_pay">
                  <div className="cost_block">
                    <p
                      className="subj_costet"
                      style={{ color: "white", marginBottom: "0" }}
                    >
                      Стоимость занятий
                    </p>
                    <p
                      className="costet"
                      style={{ color: "white", textAlign: "center" }}
                    >
                      {defineProfessor.price *
                        reservationLessonsCount *
                        weekForward}{" "}
                      сом
                    </p>
                  </div>
                  <button
                    className={`pay_btn ${
                      paymentIsFetching ? "payment_loading" : ""
                    }`}
                    onClick={() =>
                      payOnSubmit("Выберите день для бронирования!")
                    }
                  >
                    {paymentIsFetching || reservationTableIsFetching ? (
                      <Spin size="small" />
                    ) : (
                      "Перейти к оплате"
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* ДЛЯ МОБИЛЬНЫХ УСТРОЙСТВ */}
            <div className="reser_block_mobile">
              <div className="head_block">
                <div className="backToTeacher_block">
                  <img src={backToTeacher} alt="backToTeacher" />
                  <NavLink to="/teachlist" className="back_btn">
                    К выбору учителя
                  </NavLink>
                </div>
              </div>
              <div className="reser_table_block">
                <div className="reser_table">
                  <div>
                    <p className="reser_teach">
                      {defineProfessor.firstName} {defineProfessor.surname}
                    </p>
                  </div>
                  <div className="choose_days">
                    <div>
                      <p
                        className="subj_costet"
                        style={{ fontWeight: "600", marginBottom: "0.3em" }}
                      >
                        Рабочие дни
                      </p>
                      <p className="txt_schedule">
                      {formatDay(closedTimetableProfessor)}.
                      </p>
                    </div>
                    <div>
                      <p
                        className="subj_costet"
                        style={{ fontWeight: "600", marginBottom: "0.3em" }}
                      >
                        Время занятий
                      </p>
                      <p className="txt_schedule">
                      {convertDaysToString(closedTimetableProfessor)}
                      </p>
                    </div>
                    <div>
                      <p className="subj_costet" style={{ marginBottom: "0" }}>
                        Цена занятия: {defineProfessor.price} сом{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="week_forward_block">
                <button
                  className={
                    !isPrevWeek
                      ? "previous_btn"
                      : "previous_btn previous_btn_rotate"
                  }
                  onClick={goToPreviousWeek}
                >
                  <img src={!isPrevWeek ? previous : next} alt="minus" />
                </button>
                <p className="reser_date">
                  {format(dates[0], "d MMM", { locale: ru }).replace(/\.$/, "")}
                  &nbsp; - &nbsp;
                  {format(dates[dates.length - 1], "d MMM", {
                    locale: ru,
                  }).replace(/\.$/, "")}
                </p>
                <button className="next_btn" onClick={goToNextWeek}>
                  <img src={next} alt="plus" />
                </button>
              </div>
              <Table
                dates={dates}
                setCurrentWeekStart={setCurrentWeekStart}
                today={today}
              />
              <div className="for_pay">
                <div className="pay_subj">
                  <div className="week_forward_block">
                    <button
                      className="minus_btn"
                      onClick={minusWeekForwardHandler}
                    >
                      <img src={minusMobile} alt="minus" />
                    </button>
                    <p className="week_forward">{weekForward}</p>
                    <button
                      className="plus_btn"
                      onClick={plusWeekForwardHandler}
                    >
                      <img src={plusMobile} alt="plus" />
                    </button>
                  </div>
                  <p
                    className="costet"
                    style={{ fontSize: "12px", color: "#FFFFFF" }}
                  >
                    На сколько недель?
                  </p>
                </div>
                <button
                  className={`pay_btn ${
                    paymentIsFetching ? "payment_loading" : ""
                  }`}
                  onClick={() => payOnSubmit("Выберите день для бронирования!")}
                >
                  {paymentIsFetching || reservationTableIsFetching ? (
                    <Spin size="small" />
                  ) : (
                    `Оплатить ${
                      defineProfessor.price * reservationLessonsCount
                    } сом`
                  )}
                </button>
              </div>
            </div>
          </Spin>
        </motion.div>
      ) : userRole === "professor" ? (
        <Navigate to="/teachlk" />
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Reservation;
