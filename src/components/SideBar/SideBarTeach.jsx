import React from 'react';
import "./SideBar.scss";
import logo1 from "../../assets/img/logo1-2.png";
import bar1 from "../../assets/img/ForTeach/bar1.png";
import bar2 from "../../assets/img/ForTeach/bar2.png";
import bar3 from "../../assets/img//ForTeach/bar3.png";

const SideBarTeach = () => {
    return (
        <div className="sideblock">
      <div className="inner_container">
        <a className="about-me" href="/teachcab">
          <img src={logo1} className="logo1" alt=""/>
          Обо мне
        </a>
      </div>
      <div className="upper_container">
        <a className="about-me" href="/subjtable">
        <img src={bar1} className="logo1" alt=""/>
          Моя программа
        </a>
      </div>
      <div className="upper_container">
        <a className="about-me" href="/studlist">
        <img src={bar2} className="logo1" alt=""/>
          Мои ученики
        </a>
      </div>
    </div>
    );
}

export default SideBarTeach;
