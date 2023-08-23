import React, {useEffect} from "react";
import HeaderT from "../../Header/HeaderT";
import SideBarTeach from "../../SideBar/SideBarTeach";
import s from "./__subj.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {getProfessorTimetable} from "../../../redux/professorsReducer";
import {motion} from "framer-motion";
import {getNextTimetable, getPrevTimetable} from "../../../redux/timetableReducer";
import moment from "moment/moment";
import TeacherTable from "./TeacherTable";
import TeacherTableMobile from "./TeacherTableMobile";
import {Spin} from "antd";

const TeacherTimetable = () => {
    const {timetable, isFetchingTeacherTimetable} = useSelector(state => state.professorsReducer)

    useEffect(() => {
        dispatch(getProfessorTimetable(token))
    }, []);

    const firstDate = timetable.allDate?.[0];
    const lastDate = timetable.allDate[timetable.allDate.length - 1];
    const {token, userRole} = useSelector(state => state.loginReducer)

    const dispatch = useDispatch()
    const getNextWeekHandler = () => {
        dispatch(getNextTimetable(timetable.allDate[6]))
    }
    const getPrevWeekHandler = () => {
        dispatch(getPrevTimetable(timetable.allDate[0]))
    }
    return (
        <>
            <HeaderT/>
            <SideBarTeach/>
            {userRole === "professor" ?
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.6}}
                    className={s.timetable_block}
                >
                    <Spin spinning={isFetchingTeacherTimetable}>

                        <div className={s.time}>
                            <p className={s.teach_txt}>Расписание</p>
                            <div className={s.date_interval_block}>
                                <span className={s.timetable__title_span} onClick={getPrevWeekHandler}>{'<'}</span>
                                <div className={s.timetable__title}>{firstDate} - {lastDate} </div>
                                <span className={s.timetable__title_span} onClick={getNextWeekHandler}>{'>'}</span>
                            </div>
                        </div>
                        <table className={s.subjtable}>
                            <tbody>
                            <tr>
                                {timetable.allDate.map((date, index) => (
                                    <td key={index}>
                                        <div>
                                            {date}, <br/> {timetable.dayOfWeek[index]}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                            <tr style={{borderTop: "1px solid"}}>
                                <td>
                                    <div className={s.stud_block}>
                                        {timetable.monday
                                            .sort((a, b) => a.time.localeCompare(b.time))
                                            .map((item, key) => {
                                                const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                                if (timetable.allDate[0] === formattedDate) {
                                                    return (
                                                        <TeacherTable key={key}
                                                                      subj={item.subject}
                                                                      student={item.student_firstname + " " + item.student_lastname}
                                                                      time={item.time.slice(0, -3)}
                                                                      backgroundColor={"#FFF1A1"}
                                                                      btn={"#FFEC7E"}
                                                        />
                                                    )
                                                }
                                            })}
                                    </div>
                                </td>
                                <td>
                                    <div className={s.stud_block}>
                                        {timetable.tuesday
                                            .sort((a, b) => a.time.localeCompare(b.time))
                                            .map((item, key) => {
                                                const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                                if (timetable.allDate[1] === formattedDate) {
                                                    return (
                                                        <TeacherTable key={key}
                                                                      subj={item.subject}
                                                                      student={item.student_firstname + " " + item.student_lastname}
                                                                      time={item.time.slice(0, -3)}
                                                                      backgroundColor={"#FFF1A1"}
                                                                      btn={"#FFEC7E"}
                                                        />
                                                    )
                                                }
                                            })}
                                    </div>
                                </td>
                                <td>
                                    <div className={s.stud_block}>
                                        {timetable.wednesday
                                            .sort((a, b) => a.time.localeCompare(b.time))
                                            .map((item, key) => {
                                                const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                                if (timetable.allDate[2] === formattedDate) {
                                                    return (
                                                        <TeacherTable key={key}
                                                                      subj={item.subject}
                                                                      student={item.student_firstname + " " + item.student_lastname}
                                                                      time={item.time.slice(0, -3)}
                                                                      backgroundColor={"#FFF1A1"}
                                                                      btn={"#FFEC7E"}
                                                        />
                                                    )
                                                }
                                            })}
                                    </div>
                                </td>
                                <td>
                                    <div className={s.stud_block}>
                                        {timetable.thursday
                                            .sort((a, b) => a.time.localeCompare(b.time))
                                            .map((item, key) => {
                                                const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                                if (timetable.allDate[3] === formattedDate) {
                                                    return (
                                                        <TeacherTable key={key}
                                                                      subj={item.subject}
                                                                      student={item.student_firstname + " " + item.student_lastname}
                                                                      time={item.time.slice(0, -3)}
                                                                      backgroundColor={"#FFF1A1"}
                                                                      btn={"#FFEC7E"}
                                                        />
                                                    )
                                                }
                                            })}
                                    </div>
                                </td>
                                <td>
                                    <div className={s.stud_block}>
                                        {timetable.friday
                                            .sort((a, b) => a.time.localeCompare(b.time))
                                            .map((item, key) => {
                                                const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                                if (timetable.allDate[4] === formattedDate) {
                                                    return (
                                                        <TeacherTable key={key}
                                                                      subj={item.subject}
                                                                      student={item.student_firstname + " " + item.student_lastname}
                                                                      time={item.time.slice(0, -3)}
                                                                      backgroundColor={"#FFF1A1"}
                                                                      btn={"#FFEC7E"}
                                                        />
                                                    )
                                                }
                                            })}
                                    </div>
                                </td>
                                <td>
                                    <div className={s.stud_block}>
                                        {timetable.saturday
                                            .sort((a, b) => a.time.localeCompare(b.time))
                                            .map((item, key) => {
                                                const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                                if (timetable.allDate[5] === formattedDate) {
                                                    return (
                                                        <TeacherTable key={key}
                                                                      subj={item.subject}
                                                                      student={item.student_firstname + " " + item.student_lastname}
                                                                      time={item.time.slice(0, -3)}
                                                                      backgroundColor={"#FFF1A1"}
                                                                      btn={"#FFEC7E"}
                                                        />
                                                    )
                                                }
                                            })}
                                    </div>
                                </td>
                                <td style={{height: "400px"}}>
                                    <div className={s.stud_block}>
                                        {timetable.sunday
                                            .sort((a, b) => a.time.localeCompare(b.time))
                                            .map((item, key) => {
                                                const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                                if (timetable.allDate[6] === formattedDate) {
                                                    return (
                                                        <TeacherTable key={key}
                                                                      subj={item.subject}
                                                                      student={item.student_firstname + " " + item.student_lastname}
                                                                      time={item.time.slice(0, -3)}
                                                                      backgroundColor={"#FFF1A1"}
                                                                      btn={"#FFEC7E"}
                                                        />
                                                    )
                                                }
                                            })}
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <div className={s.cards_block}>
                            {timetable.monday
                                .sort((a, b) => a.time.localeCompare(b.time))
                                .map((item, index) => {
                                    const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                    if (timetable.allDate[0] === formattedDate) {
                                        return (
                                            <TeacherTableMobile alldate={item.datetime} key={index}
                                                                subj={item.subject}
                                                                student={item.student_firstname + " " + item.student_lastname}
                                                                time={item.time.slice(0, -3)}
                                                                backgroundColor={"#FFF1A1"}
                                                                btn={"#FFEC7E"}/>)
                                    }
                                })}
                            {timetable.tuesday
                                .sort((a, b) => a.time.localeCompare(b.time))
                                .map((item, index) => {
                                    const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                    if (timetable.allDate[1] === formattedDate) {
                                        return (
                                            <TeacherTableMobile alldate={item.datetime} key={index}
                                                                subj={item.subject}
                                                                student={item.student_firstname + " " + item.student_lastname}
                                                                time={item.time.slice(0, -3)}
                                                                backgroundColor={"#FFF1A1"}
                                                                btn={"#FFEC7E"}/>)
                                    }
                                })}
                            {timetable.wednesday
                                .sort((a, b) => a.time.localeCompare(b.time))
                                .map((item, index) => {
                                    const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                    if (timetable.allDate[2] === formattedDate) {
                                        return (
                                            <TeacherTableMobile alldate={item.datetime} key={index}
                                                                subj={item.subject}
                                                                student={item.student_firstname + " " + item.student_lastname}
                                                                time={item.time.slice(0, -3)}
                                                                backgroundColor={"#FFF1A1"}
                                                                btn={"#FFEC7E"}/>)
                                    }
                                })}
                            {timetable.thursday
                                .sort((a, b) => a.time.localeCompare(b.time))
                                .map((item, index) => {
                                    const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                    if (timetable.allDate[3] === formattedDate) {
                                        return (
                                            <TeacherTableMobile alldate={item.datetime} key={index}
                                                                subj={item.subject}
                                                                student={item.student_firstname + " " + item.student_lastname}
                                                                time={item.time.slice(0, -3)}
                                                                backgroundColor={"#FFF1A1"}
                                                                btn={"#FFEC7E"}/>)
                                    }
                                })}
                            {timetable.friday
                                .sort((a, b) => a.time.localeCompare(b.time))
                                .map((item, index) => {
                                    const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                    if (timetable.allDate[4] === formattedDate) {
                                        return (
                                            <TeacherTableMobile alldate={item.datetime} key={index}
                                                                subj={item.subject}
                                                                student={item.student_firstname + " " + item.student_lastname}
                                                                time={item.time.slice(0, -3)}
                                                                backgroundColor={"#FFF1A1"}
                                                                btn={"#FFEC7E"}/>)
                                    }
                                })}
                            {timetable.saturday
                                .sort((a, b) => a.time.localeCompare(b.time))
                                .map((item, index) => {
                                    const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                    if (timetable.allDate[5] === formattedDate) {
                                        return (
                                            <TeacherTableMobile alldate={item.datetime} key={index}
                                                                subj={item.subject}
                                                                student={item.student_firstname + " " + item.student_lastname}
                                                                time={item.time.slice(0, -3)}
                                                                backgroundColor={"#FFF1A1"}
                                                                btn={"#FFEC7E"}/>)
                                    }
                                })}
                            {timetable.sunday
                                .sort((a, b) => a.time.localeCompare(b.time))
                                .map((item, index) => {
                                    const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                    if (timetable.allDate[6] === formattedDate) {
                                        return (
                                            <TeacherTableMobile alldate={item.datetime} key={index}
                                                                subj={item.subject}
                                                                student={item.student_firstname + " " + item.student_lastname}
                                                                time={item.time.slice(0, -3)}
                                                                backgroundColor={"#FFF1A1"}
                                                                btn={"#FFEC7E"}/>)
                                    }
                                })}
                        </div>
                    </Spin>
                </motion.div>
                : userRole === "student" ? <Navigate to="/timetable"/> : <Navigate to="/login"/>}
        </>
    );
};

export default TeacherTimetable;
