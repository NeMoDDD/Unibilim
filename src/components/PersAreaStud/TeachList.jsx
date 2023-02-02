import React from "react";
import "./PersAreaStud.scss";

const TeachList = () => {
  const classArr = ["Все классы", "9В", "10Ь", "8А", "11Г"];
  const subjArr = [
    "Все предметы",
    "Математика",
    "Русский язык",
    "Химия",
    "История",
  ];
  const daysArr = [
    "Все дни",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четрвег",
    "Пятница",
  ];

  const renderClasses = classArr.map((item, index) => (
    <option value={item} key={index}>
      <p className="drop_text"> {item} </p>
    </option>
  ));
  const renderSubect = subjArr.map((item, index) => (
    <option value={item} key={index}>
      <p className="drop_text"> {item} </p>
    </option>
  ));
  const renderDay = daysArr.map((item, index) => (
    <option value={item} key={index}>
      <p className="drop_text"> {item} </p>
    </option>
  ));
  return (
    <div className="teach_list_block">
      <div className="drop_block">
        <select className="drop">{renderClasses}</select>
        <select className="drop">{renderSubect}</select>
        <select className="drop">{renderDay}</select>
      </div>
      <div className="list_block">
        
      </div>
    </div>
  );
};

export default TeachList;
