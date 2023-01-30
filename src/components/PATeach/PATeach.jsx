import React from "react";
import "./PATeach.scss";
import stud1 from "../../assets/img/stud1.png";
import stud2 from "../../assets/img/stud2.png";
import stud3 from "../../assets/img/stud3.png";
import stud4 from "../../assets/img/stud4.png";
import stud5 from "../../assets/img/stud5.png";

const PATeach = () => {
  const students = [
    { id: 1, name: "Ирина", firstname: "Бойка", img: stud1 },
    { id: 2, name: "Николай", firstname: "Коготько", img: stud2 },
    { id: 3, name: "Дмитрий", firstname: "Примудрый", img: stud3 },
    { id: 4, name: "Вася", firstname: "Глупый", img: stud4 },
    { id: 5, name: "Геральт", firstname: "Изривии", img: stud5 },
  ];

  return (
    <>
      <div className="stud_head">
        <p className="studs">Ученики</p>
        <div>
          <input type="radio" id="exclusive" name="forwho" value="excluse" />
          <label className="radio_txt" for="exclusive">
            Индивидуальные
          </label>
          <input
            type="radio"
            id="groups"
            for="groups"
            name="forwho"
            value="group"
          />
          <label className="radio_txt">Групповые </label>
        </div>
        <div className="stud_list">
          {students.map((item) => (
            <div className="stud_card">
              <img src={item.img} />
              <p key={item.id} className="stud_txt">
                {" "}
                {item.name}
                <br />
                {item.firstname}
              </p>
              <button className="stud_btn">
                <p className="stud_btn_txt">Подробнее</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PATeach;
