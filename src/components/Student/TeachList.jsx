import React, {useEffect, useState} from "react";
import "../../styles/__teachlist.scss";
import teach1 from "../../assets/img/teach1.png";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/HeaderS";
import {useDispatch, useSelector} from "react-redux";
import {getDefineProfessor, getProfessors} from "../../redux/professorsReducer";
import {Link, Navigate, NavLink} from "react-router-dom";
import {Empty, Spin} from "antd";
import {motion} from "framer-motion";
import s from "../Teacher/StudList/StudList.module.scss";
import {useNavigate} from 'react-router-dom';
import emptyImg from "../../assets/img/folder.png"


const TeachList = () => {
    const navigate = useNavigate()

    const [professorList, setProfessorsList] = useState([])
    const [classSelectList, setClassSelectList] = useState('all')
    const [languageSelectList, setLanguageSelectList] = useState('all')
    const [subjectSelectList, setSubjectSelectList] = useState('all')
    const dispatch = useDispatch()
    const {userRole, token} = useSelector(state => state.loginReducer)
    const {
        professors,
        languageFilter,
        isFetching,
        classFilter,
        subjectFilter,
    } = useSelector(state => state.professorsReducer)
    useEffect(() => {
        dispatch(getProfessors({token}))
    }, [dispatch, token])
    useEffect(() => {
        setProfessorsList(professors)
    }, [dispatch, professors])
    const onHandleSelectLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        setLanguageSelectList(selectedLanguage);
        const filteredByLanguage = selectedLanguage === 'all' ? professors : professors.filter(item => item.language === selectedLanguage);
        const filteredByClass = classSelectList === 'all' ? filteredByLanguage : filteredByLanguage.filter(item => item.classes.includes(classSelectList));
        const filteredBySubject = subjectSelectList === 'all' ? filteredByClass : filteredByClass.filter(item => item.subject.includes(subjectSelectList));
        setProfessorsList(filteredBySubject);
    };

    const onHandleSelectClassChange = (e) => {
        const selectedClass = e.target.value;
        setClassSelectList(selectedClass);
        const filteredByClass = selectedClass === 'all' ? professors : professors.filter(item => item.classes.includes(selectedClass));
        const filteredByLanguage = languageSelectList === 'all' ? filteredByClass : filteredByClass.filter(item => item.language === languageSelectList);
        const filteredBySubject = subjectSelectList === 'all' ? filteredByLanguage : filteredByLanguage.filter(item => item.subject.includes(subjectSelectList));
        setProfessorsList(filteredBySubject);
    }

    const onHandleSelectSubjectChange = (e) => {
        const selectedSubject = e.target.value;
        setSubjectSelectList(selectedSubject);
        const filteredBySubject = selectedSubject === 'all' ? professors : professors.filter(item => item.subject.includes(selectedSubject));
        const filteredByClass = classSelectList === 'all' ? filteredBySubject : filteredBySubject.filter(item => item.classes.includes(classSelectList));
        const filteredByLanguage = languageSelectList === 'all' ? filteredByClass : filteredByClass.filter(item => item.language === languageSelectList);
        setProfessorsList(filteredByLanguage);
    }

    const renderClasses = classFilter.map((item, index) => (
        <option className="drop_text" value={item} key={index}>
            {item}
        </option>
    ));
    const renderSubect = subjectFilter.map((item, index) => (
        <option className="drop_text" value={item} key={index}>
            {item}
        </option>
    ));
    const languageSelect = languageFilter.map((item, index) =>
        <option className="drop_text" key={index} value={item}>
            {item}
        </option>)

    const handleTeachBtnClick = async (id) => {
        try {
            await dispatch(getDefineProfessor(id, token));
        } catch (error) {
            console.log(error);
        } finally {
            navigate('/reservation')
        }
    };

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
                                <select className="drop"
                                        onChange={(e) => onHandleSelectSubjectChange(e)}>
                                    <option value="all">Все предметы</option>
                                    {renderSubect}
                                </select>
                                <select className="drop" onChange={(e) => onHandleSelectClassChange(e)}>
                                    <option value="all">Все классы</option>
                                    {renderClasses}
                                </select>
                                <select className="drop" onChange={(e) => onHandleSelectLanguageChange(e)}>
                                    <option value="all">Все Языки</option>
                                    {languageSelect}
                                </select>
                            </div>
                            <div className="list_block">
                                {professorList.length === 0 ? ( // Проверяем, пуст ли массив professorList
                                    <Empty className="empty_block" description={"Пусто"} />
                                ) : (
                                    // Если professorList не пустой, отображаем репетиторов  
                                    
                                    professorList.map((el, index) => (
                                        <div className="teach_list" key={index}>
                                            <div className="teach_card"> 
                                            <div className="teach__card__image">
                                                <img src={el?.photo ? el?.photo : teach1} className="teach_img" alt=""/>
                                            </div>
                                                <p className="teach_subj" id="phyz">
                                                    {el.subject[0].toUpperCase()}, {el.price} с/урок
                                                </p>
                                                <div className="teach_name">{el.firstName} {el.surname}</div>
                                                <p className="teach_about">{el.info}</p>
                                                <Link className="teach_btn"
                                                   onClick={() => handleTeachBtnClick(el.id)}
                                                >
                                                    Записаться
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                )} 
                                {professorList.map((el, index) => (
                                        <div className="teach_list" key={index}>
                                            <div className="teach_card"> 
                                            <div className="teach__card__image">
                                                <img src={el?.photo ? el?.photo : teach1} className="teach_img" alt=""/>
                                            </div>
                                                <p className="teach_subj" id="phyz">
                                                    {el.subject[0].toUpperCase()}, {el.price} с/урок
                                                </p>
                                                <p className="teach_name">{el.firstName} {el.surname}</p>
                                                <p className="teach_about">{el.info}</p>
                                                <Link className="teach_btn"
                                                   onClick={() => handleTeachBtnClick(el.id)}
                                                >
                                                    Записаться
                                                </Link>
                                            </div>
                                        </div>))}
                            </div>
                        </Spin>
                    </div>
                </motion.div>
                : userRole === "professor" ? <Navigate to="/teachlk"/> : <Navigate to="/login"/>}
        </>
    );
};

export default TeachList;
