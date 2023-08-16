import React, {useEffect} from "react";
import "../../styles/__teachlist.scss";
import teach1 from "../../assets/img/teach1.png";
import teach2 from "../../assets/img/teach2.png";
import teach3 from "../../assets/img/teach3.png";
import teach4 from "../../assets/img/teach4.png";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/HeaderS";
import {useDispatch, useSelector} from "react-redux";
import {getProfessors} from "../../redux/professorsReducer";
import {Navigate} from "react-router-dom";

const TeachList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfessors())
    }, [])
  const {userRole} = useSelector(state => state.loginReducer)

  const classArr = ["Все классы", "9В", "10B", "8А", "11Г"];
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
        "Четверг",
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
            backgroundColor: "#31F7F7"
        },
        {
            id: 2,
            name: "Иван Ургант",
            subj: "Математика",
            aboutTeach: "Кандидат физико - математических наук",
            img: teach2,
            backgroundColor: "#F76C31"
        },
        {
            id: 3,
            name: "Том Круз",
            subj: "История",
            aboutTeach: "Обладатель сертификата CPE Кембриджского университета",
            img: teach3,
            backgroundColor: "#F731A8"
        },
        {
            id: 4,
            name: "Брэдд Пит",
            subj: "Геометрия",
            aboutTeach: "Кандидат филологических наук, Преподаватель СШГ№6",
            img: teach4,
            backgroundColor: "#F73131"
        },
    ];

    const renderClasses = classArr.map((item, index) => (
        <option className="drop_text" value={item} key={index}>
            {item}
        </option>
    ));
    const renderSubect = subjArr.map((item, index) => (
        <option className="drop_text" value={item} key={index}>
            {item}
        </option>
    ));
    const renderDay = daysArr.map((item, index) => (
        <option className="drop_text" value={item} key={index}>
            {item}
        </option>
    ));
    return (
        <>
            <Header/>
            <SideBar/>
          {userRole === "student" ?
              <div className="pad">
                <div className="teach_list_block">
                    <p className="teach_txt">Репетиторы</p>
                    <div className="drop_block">
                        <select className="drop">{renderClasses}</select>
                        <select className="drop">{renderSubect}</select>
                        <select className="drop">{renderDay}</select>
                    </div>
                    <div className="list_block">
                        {teachList.map((el, index) => (
                            <div className="teach_list" key={index}>
                                <div className="teach_card">
                                    <img src={el.img} className="teach_img" alt=""/>
                                    <p className="teach_name">{el.name}</p>
                                    <p className="teach_about">{el.aboutTeach}</p>
                                    <p className="teach_subj" id="phyz" style={{backgroundColor: el.backgroundColor}}>
                                        {el.subj}
                                    </p>
                                    <button className="teach_btn">
                                        <a className="teach_btn_txt" href="/timetable">Подробнее</a>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
              : userRole === "professor" ? <Navigate to="/teachlk"/> : <Navigate to="/login"/>}
        </>
    );
};

export default TeachList;
