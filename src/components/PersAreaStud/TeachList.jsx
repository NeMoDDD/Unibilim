import React from "react";
import "./PersAreaStud.scss";
import teach1 from "../../assets/img/teach1.png";
import teach2 from "../../assets/img/teach2.png";
import teach3 from "../../assets/img/teach3.png";
import teach4 from "../../assets/img/teach4.png";

const TeachList = () => {
  const classArr = ["Все классы", "9В", "10Ь", "8А", "11Г"];
  const subjArr = [
    "Все предметы",
    "Математика",
    "Русский язык",
    "Химия",
    "История",
  ];
  const daysArr = [
    "Все дни",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четрвег",
    "Пятница",
  ];
  const teachList = [
    {
      id: 1,
      name: "Александр Иванов",
      subj: "Физика",
      aboutTeach:
        "Кандидат филологических наук, учитель высшей категории, эксперт ОРТ",
      img: teach1,
    },
    {
      id: 2,
      name: "Иван Ургант",
      subj: "Математика",
      aboutTeach:
        "Кандидат филологических наук, учитель высшей категории, эксперт ОРТ",
      img: teach2,
    },
    {
      id: 3,
      name: "Том Круз",
      subj: "История",
      aboutTeach:
        "Кандидат филологических наук, учитель высшей категории, эксперт ОРТ",
      img: teach3,
    },
    {
      id: 4,
      name: "Брэдд Пит",
      subj: "Геометрия",
      aboutTeach:
        "Кандидат филологических наук, учитель высшей категории, эксперт ОРТ",
      img: teach4,
    },
  ];

  const renderClasses = classArr.map((item, index) => (
    <option value={item} key={index}>
      <p className="drop_text"> {item} </p>
    </option>
  ));
  const renderSubect = subjArr.map((item, index) => (
    <option value={item} key={index}>
      <p className="drop_text"> {item} </p>
    </option>
  ));
  const renderDay = daysArr.map((item, index) => (
    <option value={item} key={index}>
      <p className="drop_text"> {item} </p>
    </option>
  ));
  return (
    <div className="teach_list_block">
      <div className="drop_block">
        <select className="drop">{renderClasses}</select>
        <select className="drop">{renderSubect}</select>
        <select className="drop">{renderDay}</select>
      </div>
      <div className="list_block">
        {teachList.map((el) => (
          <div className="teach_list">
            <div className="teach_card">
              <img src={el.img} className="teach_img"/>
              <p className="teach_name">{el.name}</p>
              <p className="teach_about">{el.aboutTeach}</p>
              <p className="teach_subj" id="phyz">
                {el.subj}
              </p>
              <button className="teach_btn">
                <p className="teach_btn_txt">Подробнее</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachList;
