import React from "react";
import SideBar from "../SideBar/SideBar";
import "./PersAreaStud.scss";
import Table from "./table";

const Reservation = () => {
  const name = "< 23 янв - 30 янв >";

  return (
    <>
      <SideBar />
      <div className="reser_block">
        <div className="head_block">
          <a className="back_btn">Вернуться</a>
          <p className="reser_teach">Зуева Ольга</p>
          <p className="reser_date">{name}</p>
        </div>
        <div className="reser_table">
          <p className="txt">
            Выберите удобное для себя время и день недели из доступных
          </p>
          <p className="subj_costet">Рабочие дни</p>
          <p className="txt_18" style={{ marginTop: "-15px" }}>
            Понедельник, среда, пятница, суббота, воскресенье
          </p>
          <p className="subj_costet">Время занятий</p>
          <p className="txt_18" style={{ marginTop: "-15px" }}>
            Пн,ср,пт - с 14:00 до 18:00 Сб,вс - с 12:00 до 21:00
          </p>
          <Table />
        </div>
        <div className="table"></div>
        <div className="pay_block">
          <p className="txt" style={{ marginLeft: "0px" }}>
            Рассчёт
          </p>
          <div className="pay_subj">
            <p className="subj_costet">Стоимость 1 занятия</p>
            <p className="costet"> 150 сом </p>
          </div>
          <div className="pay_subj" style={{ marginTop: "15px" }}>
            <p className="subj_costet">Выбранные дни</p>
            <p className="costet">3 дня</p>
            <p className="subj_costet">(пн-1, ср-1, пт-1)</p>
          </div>
          <div className="for_pay">
            <p className="subj_costet" style={{ color: "white" }}>
              Итоговая стоимость
            </p>
            <p className="costet" style={{ color: "white" }}>
              450 сом
            </p>
            <button className="pay_btn">Перейти к оплате</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
