import React from "react";
import logo1 from "../../assets/img/logo1-2.png";
import logo2 from "../../assets/img/logo2-1.png";
import logo3 from "../../assets/img/logo3-1.png";
import s from "./SideBar.module.scss";
import {NavLink} from "react-router-dom";

const SideBar = (props) => {
  return (
    <div className={s.sideblock}>
      {/*<div className={s.inner_container}>*/}
      {/*  <NavLink className={navData => navData.isActive ? `${s.sidebar__link__active} ${s.sidebar__link}` : s.sidebar__link} to="/studlk">*/}
      {/*    <img src={logo1} className={s.logo1} alt=""/>*/}
      {/*    Обо мне*/}
      {/*  </NavLink>*/}
      {/*</div>*/}
      <div className={s.upper_container}>
        <NavLink className={navData => navData.isActive ? `${s.sidebar__link__active} ${s.sidebar__link}` : s.sidebar__link} to="/timetable">
          <img src={logo2} className={s.logo1} alt=""/>
          Расписание
        </NavLink>
      </div>
      <div className={s.upper_container}>
        <NavLink className={navData => navData.isActive ? `${s.sidebar__link__active} ${s.sidebar__link}` : s.sidebar__link} to="/teachlist">
          <img src={logo3} className={s.logo1} alt=""/>
          Консультанты
        </NavLink>
      </div>
      <div className={s.upper_container}>
        <NavLink className={navData => navData.isActive ? `${s.sidebar__link__active} ${s.sidebar__link}` : s.sidebar__link} to="/reservation">
          Бронирование
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
