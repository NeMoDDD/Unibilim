import React from "react";
import SideBar from "../SideBar/SideBar";
import "../../styles/__reservation.scss";
import Table from "./table";
import "../../styles/__timetable.scss";
import Header from "../Header/HeaderS";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {motion} from "framer-motion";
import s from "../Teacher/TeacherTimetable/__subj.module.scss";

const Reservation = () => {
    const name = "< 23 янв - 30 янв >";
    const {userRole} = useSelector(state => state.loginReducer)


    return (
        <>
            <Header/>
            <SideBar/>
            {userRole === "student" ?
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.6}}
                    className={"pad"}
                >
                    <div className="reser_block">
                        <div className="head_block">
                            <a className="back_btn">Вернуться</a>
                            <p className="reser_teach">Зуева Ольга</p>
                            <p className="reser_date">{name}</p>
                        </div>
                        <div className="reser_table">
                            <div className="choose_days">
                                <p className="txt">
                                    Выберите удобное для себя время и день недели из доступных
                                </p>
                                <p className="subj_costet" style={{fontWeight: "600", marginBottom: "0.3em"}}>Рабочие дни</p>
                                <p className="txt_schedule">
                                    Понедельник, среда, пятница, суббота, воскресенье
                                </p>
                                <p className="subj_costet" style={{fontWeight: "600", marginBottom: "0.3em"}}>Время занятий</p>
                                <p className="txt_schedule">
                                    Пн,ср,пт - с 14:00 до 18:00 Сб,вс - с 12:00 до 21:00
                                </p>
                            </div>
                            <Table/>
                        </div>
                        <div className="reser_card">
                            <div className="reser_date">
                                <p className="reser_week">Понедельник,</p>{" "}
                                <p className="reser_day">23 января</p>
                            </div>
                            <div className="reser_times_block">
                                <button className="reser_times">14:00-15:00</button>
                                <button className="reser_times">15:00-16:00</button>
                                <button className="reser_times">16:00-17:00</button>
                                <div className="break"></div>
                                <button className="reser_times">17:00-18:00</button>
                                <button className="reser_times">18:00-19:00</button>
                            </div>
                        </div>
                        <div className="reser_card" style={{backgroundColor: "#E7FFDF"}}>
                            <div className="reser_date">
                                <p className="reser_week">Вторник, </p>{" "}
                                <p className="reser_day">24 января</p>
                            </div>
                            <p className="no_subj">Нет занятий</p>
                        </div>
                        <div className="reser_card" style={{backgroundColor: "#FFF6DF"}}>
                            <div className="reser_date">
                                <p className="reser_week">Среда,</p>{" "}
                                <p className="reser_day">25 января</p>
                            </div>
                            <div className="reser_times_block">
                                <button className="reser_times">12:00-13:00</button>
                                <button className="reser_times">13:00-14:00</button>
                                <button className="reser_times">14:00-15:00</button>
                                <div className="break"></div>
                                <button className="reser_times">15:00-16:00</button>
                                <button className="reser_times">16:00-17:00</button>
                            </div>
                        </div>
                        <div className="pay_block">
                            <p className="txt" style={{marginLeft: "0px"}}>
                                Расчёт
                            </p>
                            <div className="pay_subj">
                                <p className="subj_costet">Стоимость 1 занятия</p>
                                <p className="costet"> 150 сом </p>
                            </div>
                            <div className="pay_subj" style={{marginTop: "15px"}}>
                                <p className="subj_costet">Выбранные дни</p>
                                <p className="costet">3 дня</p>
                                <p className="subj_costet">(пн-1, ср-1, пт-1)</p>
                            </div>
                            <div className="for_pay">
                                <div className="cost_block">
                                    <p className="subj_costet" style={{color: "white"}}>
                                        Итоговая стоимость
                                    </p>
                                    <p className="costet" style={{color: "white"}}>
                                        450 сом
                                    </p>
                                </div>
                                <button className="pay_btn">Перейти к оплате</button>
                            </div>
                        </div>
                    </div>
                    {/*<div className="pay_block2">*/}
                    {/*    <div className="prices">*/}
                    {/*        <p className="f_pr">Итоговая стоимость</p>*/}
                    {/*        <p className="s_pr">450 сом</p>*/}
                    {/*    </div>*/}
                    {/*    <button className="pay_btn2">Перейти к оплате</button>*/}
                    {/*</div>*/}
                </motion.div>
                : userRole === "professor" ? <Navigate to="/teachlk"/> : <Navigate to="/login"/>}
        </>
    );
};

export default Reservation;
