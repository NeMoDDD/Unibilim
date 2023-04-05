import React from "react";
import "./PersAreaStud.scss";
import SideBar from "../SideBar/SideBar";
import userava from "../../assets/img/user (2) 2.png";
import edit from "../../assets/img/edit1.png";
import HeaderFS from "../Header/Header";

const PersAreaStud = () => {
  return (
    <>
      <SideBar />
      <HeaderFS />
      <div className="pad">
      <div className="first_block">
        <div className="inner_block">
          <div className="avaname radblock">
            <img src={userava} alt="" />
            <div className="name">
              <p className="name_block">Александр Иванов</p>
              <a className="edit_block">
                {" "}
                <img src={edit} />
                Изменить данные
              </a>
            </div>
          </div>
          <div className="persdata radblock">
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
          <div className="secondata radblock">
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
        <div className="address">
          <div className="inaddress">
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
      </div>
      </div>
    </>
  );
};

export default PersAreaStud;
