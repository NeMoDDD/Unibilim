import React from "react";
import s from "./StudList.module.css"
import stud1 from "../../../assets/img/stud1.png";
import stud2 from "../../../assets/img/stud2.png";
import stud3 from "../../../assets/img/stud3.png";
import stud4 from "../../../assets/img/stud4.png";
import stud5 from "../../../assets/img/stud5.png";
import SideBarTeach from "../../SideBar/SideBarTeach";
import HeaderT from "../../Header/HeaderT";

const StudList = () => {
  const students = [
    { id: 1, name: "Ирина", firstname: "Бойка", img: stud1 },
    { id: 2, name: "Николай", firstname: "Коготько", img: stud2 },
    { id: 3, name: "Дмитрий", firstname: "Примудрый", img: stud3 },
    { id: 4, name: "Вася", firstname: "Глупый", img: stud4 },
    { id: 5, name: "Геральт", firstname: "Изривии", img: stud5 },
    { id: 3, name: "Дмитрий", firstname: "Примудрый", img: stud3 },
    { id: 2, name: "Николай", firstname: "Коготько", img: stud2 },
    { id: 4, name: "Вася", firstname: "Глупый", img: stud4 },
  ];

  return (
    <>
      <HeaderT />
      <SideBarTeach />
    <div className={s.pad}>
      <div className={s.stud_head}>
        <div className={s.radios}>
        <p className={s.studs}>Ученики</p>
          <div>
          <input type="radio" id="exclusive" name="forwho" value="excluse" />
          <label className={s.radio_txt} htmlFor="exclusive">
            Индивидуальные
          </label>
          <input
            type="radio"
            id="groups"
            htmlFor="groups"
            name="forwho"
            value="group"
          />
          <label className={s.radio_txt}>Групповые </label>
          </div>
        <select className={s.stud_drop}>
          <option>По фамилии</option>
          <option>По возрасту</option>
          <option>По городу</option>
        </select>
        </div>
        <div className={s.stud_list}>
          {students.map((item) => (
            <div className={s.stud_card}>
              <img src={item.img} />
              <p key={item.id} className={s.stud_txt}>
                {" "}
                {item.name}
                <br />
                {item.firstname}
              </p>
              <button className={s.stud_btn}>
                <p className={s.stud_btn_txt}>Подробнее</p>
              </button>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default StudList;