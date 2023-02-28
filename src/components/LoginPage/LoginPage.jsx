import React from "react";
import './LoginPage.scss'

const LoginPage = () => {
  return (
    <div className="up_block">
      <div className="login_block">
        <p className="vhod">Вход</p>
        <p className="phone_txt">Телефон</p>
        <input type="phone" placeholder="+996556924582" className="phon_npt"></input>
        <button type="submit" className="log_in">Продолжить</button>
      </div>
    </div>
  );
};

export default LoginPage;
