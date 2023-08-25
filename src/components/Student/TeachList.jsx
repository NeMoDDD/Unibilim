import React, {useEffect, useState} from "react";
import "../../styles/__teachlist.scss";
import teach1 from "../../assets/img/teach1.png";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/HeaderS";
import {useDispatch, useSelector} from "react-redux";
import {getProfessors} from "../../redux/professorsReducer";
import {Navigate} from "react-router-dom";
import {Spin} from "antd";
import {motion} from "framer-motion";
import s from "../Teacher/StudList/StudList.module.css";

const TeachList = () => {
    const [professorList, setProfessorsList] = useState([])
    const dispatch = useDispatch()
    const {userRole, token} = useSelector(state => state.loginReducer)
    const {professors, languageFilter, isFetching} = useSelector(state => state.professorsReducer)
    useEffect(() => {
        dispatch(getProfessors({token}))
    }, [dispatch, token])
    useEffect(() => {
        setProfessorsList(professors)
    }, [dispatch, professors])
    const onHandleSelectChange = (e) => {
        if (e.target.value === 'all') {
            setProfessorsList(professors);
        } else {
            const filteredList = professors.filter(item => item.language === e.target.value);
            setProfessorsList(filteredList);
        }
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
    const languageSelect = languageFilter.map((item, index) =>
        <option className="drop_text" key={index} value={item}>
            {item}
        </option>)
    return (
        <>
            <Header/>
            <SideBar/>
            {userRole === "student" ?
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.6}}
                    className={s.pad}
                >
                    <div className="teach_list_block">
                        <Spin spinning={isFetching}>
                            <p className="teach_txt">Репетиторы</p>
                            <div className="drop_block">
                                <select className="drop">{renderClasses}</select>
                                <select className="drop">{renderSubect}</select>
                                <select className="drop">{renderDay}</select>
                                <select className="drop" onChange={(e) => onHandleSelectChange(e)}>
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
