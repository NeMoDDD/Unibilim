import React from "react";
import "./Registration.scss";
const Registration = () => {
  const cities = ["Кара-Балта", "Бишкек", "Каинда", "Ош", "Токмок"];
  const schoolArr = [
    "СШ№1",
    "СШ№2",
    "СШ№3",
    "СШ№4",
    "СШ№5",
    "СШ№6",
    "СШ№8",
    "СШ№9",
    "СШ№10",
    "СШ№11",
    "СШ№12",
  ];
  const renderCities = cities.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));
  const renderSchools = schoolArr.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));

  return (
    <>
      <div className="up_block">
        <div className="reg-block">
          <p className="reg-text">Регистрация</p>
          <p className="nm-txt">Имя</p>
          <input type="text" className="npt-txt" placeholder="Камран" />
          <p className="nm-txt2">Телефон</p>
          <input
            type="phone"
            className="npt-txt"
            placeholder="+996 700 123456"
          ></input>
          <p className="nm-txt2">Город</p>
          <select className="dropdown-select" name="city" id="cities">
            {renderCities}
          </select>
          <p className="nm-txt3">Школа</p>
          <select className="dropdown-select" name="school" id="school">
            {renderSchools}
          </select>
          <p className="nm-txt3">Класс</p>
          <input type="text" className="npt-txt" placeholder="11В"></input>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Я прочитал (а) правила и условия платформы и соглашаюсь на
              обработку персональных данных и Политику конфиденциальности
            </label>
          </div>
          <button type="submit" className="reg-end">
            Продолжить
          </button>
        </div>
      </div>
    </>
  );
};

export default Registration;
