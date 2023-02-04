import React from "react";
import "./PersAreaStud.scss";

const Timetable = () => {
  const name = "< 23 янв - 30 янв >";
  const arrSubj = [
    {
      Mon: {
        1: { time: "15:00", teach: "Зуева Ольга", subj: "Математика" },
        2: { time: "19:00", teach: "Ольга Петровна", subj: "Химия" },
      },
      Tue: {
        1: { time: "16:00", teach: "Пётр Анатольевич", subj: "Руский язык" },
      },
      Wed: {
        1: { time: "15:00", teach: "Зуева Ольга", subj: "Математика" },
      },
      Tuer: {
        1: { time: "19:00", teach: "Ольга Петровна", subj: "Химия" },
      },
      Fri: {},
      Sat: {},
      Sun: { 1: { time: "12:00", teach: "Кристофер Колумб", subj: "Физика" } },
    },
  ];
  const renderSubj = arrSubj.map((item) => {
    return item
  });
  console.log(renderSubj)

  return (
    <>
      <div className="timetable_block">
        <div className="time">
          <p className="teach_txt">Расписание</p>
          <p className="date_txt">{name}</p>
        </div>
        <div className="date_table">
          <div className="cell">6 фев, пн</div>
          <div className="cell">7 фев, вт</div>
          <div className="cell">8 фев, ср</div>
          <div className="cell">9 фев, чт</div>
          <div className="cell">10 фев, пт</div>
          <div className="cell">11 фев, сб</div>
          <div className="cell" style={{ borderRight: "none" }}>
            12 фев, вс
          </div>
        </div>
        <div className="subj_table">
          <div className="col">{renderSubj.forEach(el=>{
            <p>{el.Mon[1].subj}</p>
          })}</div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default Timetable;
