import React, {useEffect, useState} from "react";
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
import { Spin } from "antd";
import {motion} from "framer-motion";
import s from "../Teacher/StudList/StudList.module.css";

const TeachList = () => {
    const [professorList, setProfessorsList] = useState([])
    const dispatch = useDispatch()
    const {userRole,token} = useSelector(state => state.loginReducer)
    const {professors,languageFilter,isFetching} = useSelector(state => state.professorsReducer)
    useEffect(() => {
        dispatch(getProfessors({token}))
    }, [dispatch,token])
    useEffect(() => {
        setProfessorsList(professors)
    }, [dispatch,professors])
    const onHandleSelectChange = (e) =>{ 
        console.log(e.target.value) 
        if(e.target.value === 'all'){ 
           return setProfessorsList(professors)
        }
        const filteredList = professorList.filter(item => item.language === e.target.value)
        setProfessorsList(filteredList)
    }
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
    // const teachList = [
    //     {
    //         id: 1,
    //         name: "Александр Иванов",
    //         subj: "Физика",
    //         aboutTeach:
    //             "Кандидат филологических наук, учитель высшей категории, эксперт ОРТ",
    //         img: teach1,
    //         backgroundColor: "#31F7F7"
    //     },
    //     {
    //         id: 2,
    //         name: "Иван Ургант",
    //         subj: "Математика",
    //         aboutTeach: "Кандидат физико - математических наук",
    //         img: teach2,
    //         backgroundColor: "#F76C31"
    //     },
    //     {
    //         id: 3,
    //         name: "Том Круз",
    //         subj: "История",
    //         aboutTeach: "Обладатель сертификата CPE Кембриджского университета",
    //         img: teach3,
    //         backgroundColor: "#F731A8"
    //     },
    //     {
    //         id: 4,
    //         name: "Брэдд Пит",
    //         subj: "Геометрия",
    //         aboutTeach: "Кандидат филологических наук, Преподаватель СШГ№6",
    //         img: teach4,
    //         backgroundColor: "#F73131"
    //     },
    // ];

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
    const languageSelect = languageFilter.map((item,index) =>
        <option className="drop_text" key={index} value={item}> 
        {item}
    </option>)
    return (
        <>
            <Header/>
            <SideBar/>
          {userRole === "student" ?
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className={s.pad}
              >
                <div className="teach_list_block">
                  <Spin spinning={isFetching}>
                    <p className="teach_txt">Репетиторы</p>
                    <div className="drop_block">
                        <select className="drop">{renderClasses}</select>
                        <select className="drop">{renderSubect}</select>
                        <select className="drop">{renderDay}</select> 
                        <select className="drop" onChange={onHandleSelectChange}> 
                            <option value="all">Все Языки</option>
                            {languageSelect} 
                        </select> 
                    </div>
                    <div className="list_block">
                        {professorList?.map((el, index) => (
                            <div className="teach_list" key={index}>
                                <div className="teach_card">
                                    <img src={el?.photo ? el?.photo : teach1} className="teach_img" alt=""/>
                                    <p className="teach_name">{el.firstName} {el.surname}</p>
                                    <p className="teach_about">{el.info}</p>
                                    <p className="teach_subj" id="phyz" style={{backgroundColor: '#F731A8'}}>
                                        {el.subject[0]}
                                    </p>
                                    <button className="teach_btn">
                                        <a className="teach_btn_txt" href="/timetable">Подробнее</a>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div> 
                    </Spin>
                </div>
              </motion.div>
              : userRole === "professor" ? <Navigate to="/teachlk"/> : <Navigate to="/login"/>}
        </>
    );
};

export default TeachList;
