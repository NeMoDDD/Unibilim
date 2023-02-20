import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <a className="logo" href="/">UNIBILIM</a>
      <div className="btn">
        <p className="btn-logo" href="/">Вернуться на главную</p>
      </div>
    </div>
  );
};

export default Header;
