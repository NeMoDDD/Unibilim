import React from "react";
import logo1 from "../../assets/img/logo1-2.png";
import logo2 from "../../assets/img/logo2-1.png";
import logo3 from "../../assets/img/logo3-1.png";
import "./SideBar.scss";

const SideBar = (props) => {
  return (
    <div className="sideblock">
      <div className="inner_container">
        <a className="about-me">
          <img src={logo1} className="logo1" />
          Обо мне
        </a>
      </div>
      <div className="upper_container">
        <a className="about-me">
          <img src={logo2} className="logo1" />
          Расписание
        </a>
      </div>
      <div className="upper_container">
        <a className="about-me">
          <img src={logo3} className="logo1" />
          Консультанты
        </a>
      </div>
    </div>
  );
};

export default SideBar;
