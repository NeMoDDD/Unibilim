import React from "react";
import "./PersAreaStud.scss";
import SideBar from "../SideBar/SideBar";
import userava from "../../assets/img/user (2) 2.png";
import edit from "../../assets/img/edit1.png";

const PersAreaStud = () => {
  return (
    <>
      <SideBar />
      <div className="user_block">
        <div className="inner_block">
          <div className="your_block">
            <img src={userava} id="avauser" alt="Кук" />
            <p className="name_block">Александр Иванов</p>
            <br />
            <a className="edit_block" href="/">
              <img src={edit} id="edit_btn" /> Изменить данные
            </a>
          </div>
          <div className="third_block">
            <p className="nm-txt">Имя</p>
            <input
              type="text"
              className="npt-txt"
              placeholder="Камран"
              disabled
            />
            <p className="nm-txt2">Фамилия</p>
            <input
              type="text"
              className="npt-txt"
              placeholder="Иванов"
              disabled
            />
            <p className="nm-txt2">День рождения</p>
            <input
              type="text"
              className="npt-txt"
              placeholder="01/11/1994"
              disabled
            />
          </div>
          <div className="contact_block">
            <p className="nm-txt2">Почта</p>
            <input
              type="text"
              className="npt-txt"
              placeholder="abramov1994.i@gmail.com"
              disabled
            />
            <p className="nm-txt2">Телефон</p>
            <input
              type="phone"
              className="npt-txt"
              placeholder="+996 556 270 177"
              disabled
            />
            <p className="nm-txt2">Место проживания</p>
            <input
              type="phone"
              className="npt-txt"
              placeholder="Кара-Балта"
              disabled
            />
          </div>
        </div>
      <div className="region_block">
        <p className="nm-txt3">Город</p>
        <input
          type="phone"
          className="reg_npt"
          placeholder="Кара-Балта"
          disabled
        />
        <p className="nm-txt3">Область</p>
        <input
          type="phone"
          className="reg_npt"
          placeholder="Чуйская область"
          disabled
        />
        <p className="nm-txt3">Район</p>
        <input
          type="phone"
          className="reg_npt"
          placeholder="Жайылский район"
          disabled
        />
      </div>
      </div>
    </>
  );
};

export default PersAreaStud;
