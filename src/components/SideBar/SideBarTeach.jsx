import React from 'react';
import s from "./SideBar.module.scss";
import logo1 from "../../assets/img/logo1-2.png";
import bar1 from "../../assets/img/ForTeach/bar1.png";
import bar2 from "../../assets/img/ForTeach/bar2.png";
import bar3 from "../../assets/img//ForTeach/bar3.png";
import {NavLink} from "react-router-dom";

const SideBarTeach = () => {
    return (
        <div className={s.sideblock}>
      <div className={s.inner_container}>
        <NavLink className={navData => navData.isActive ? `${s.sidebar__link__active} ${s.sidebar__link}` : s.sidebar__link} to="/teachlk">
          <img src={logo1} className={s.logo1} alt=""/>
          Обо мне
        </NavLink>
      </div>
      <div className={s.upper_container}>
        <NavLink className={navData => navData.isActive ? `${s.sidebar__link__active} ${s.sidebar__link}` : s.sidebar__link} to="/subjtable">
        <img src={bar1} className={s.logo1} alt=""/>
          Моя программа
        </NavLink>
      </div>
      <div className={s.upper_container}>
        <NavLink className={navData => navData.isActive ? `${s.sidebar__link__active} ${s.sidebar__link}` : s.sidebar__link} to="/studlist">
        <img src={bar2} className={s.logo1} alt=""/>
          Мои ученики
        </NavLink>
      </div>
    </div>
    );
}

export default SideBarTeach;
