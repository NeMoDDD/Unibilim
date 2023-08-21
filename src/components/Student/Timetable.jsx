import React, {useEffect} from "react";
import SideBar from "../SideBar/SideBar";
import "../../styles/__timetable.scss";
import Header from "../Header/HeaderS";
import Table from "./TimtetableComponents/TableLarge";
import TableMobile from "./TimtetableComponents/TableModile";
import {getNextTimetable, getPrevTimetable, getTimetable} from "../../redux/timetableReducer";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import moment from "moment";
import {Spin} from "antd";

const Timetable = React.memo((props) => {
    const firstDate = props.timetable?.alldate?.[0];
    const lastDate = props.timetable?.alldate[props.timetable.alldate.length - 1];
    // const week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
    const weekFull = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
    const {token, userRole} = useSelector(state => state.loginReducer)
    const {isFetching} = useSelector(state => state.timetableReducer)

    const dispatch = useDispatch()
    const getNextWeekHandler = () => {
        dispatch(getNextTimetable(props.timetable?.alldate[6]))
    }
    const getPrevWeekHandler = () => {
        dispatch(getPrevTimetable(props.timetable?.alldate[0]))
    }


    useEffect(() => {
        dispatch(getTimetable(token))
    }, [dispatch])

    return (
        <>
            <Header/>
            <SideBar/>
            {userRole === "student" ?
                props.timetable?.alldate &&
                <div className="timetable_block">
                    <Spin spinning={isFetching}>
                    <div className="timetable__time">
                        <p className="teach_txt">Расписание</p>
                        <div className="date_txt">
                            <span className='timetable__title_span' onClick={getPrevWeekHandler}>{'<'}</span>
                            <div className='timetable__title'>{firstDate} - {lastDate} </div>
                            <span className='timetable__title_span' onClick={getNextWeekHandler}>{'>'}</span>
                        </div>
                    </div>
                    <table className="timetable">
                        <tbody>
                        <tr>
                            {props.timetable?.alldate.map((date, index) => (
                                <td key={index}>
                                    <div>
                                        {date}, <br/> {props.timetable?.dayOfWeek[index]}
                                    </div>
                                </td>
                            ))}
                        </tr>
                        <tr style={{borderTop: "1px solid black"}}>
                            <td>
                                <div className='timetable__item'>
                                    {" "}
                                    {props.timetable?.monday
                                        .sort((a, b) => a.time.localeCompare(b.time))
                                        .map((item, key) => {
                                        const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                        if (props.timetable?.alldate[0] === formattedDate) {
                                            return (
                                                    <Table key={key}
                                                           subj={item.subject}
                                                           teach={item.professor_firstname + " " + item.professor_lastname}
                                                           time={item.time.slice(0, -3)}
                                                           backgroundColor={"#FFF1A1"}
                                                           btn={"#FFEC7E"}
                                                           alldate={item.datetime}
                                                           info={item.professor_info}
                                                    />
                                            )}})}
                                </div>
                            </td>
                            <td className='timetable__row'>
                                <div className='timetable__item'>
                                    {props.timetable?.tuesday
                                        .sort((a, b) => a.time.localeCompare(b.time))
                                        .map((item, key) => {
                                        const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                        if (props.timetable?.alldate[1] === formattedDate) {
                                            return (
                                                <Table key={key}
                                                       subj={item.subject}
                                                       teach={item.professor_firstname + " " + item.professor_lastname}
                                                       time={item.time.slice(0, -3)}
                                                       backgroundColor={"#FFF1A1"}
                                                       btn={"#FFEC7E"}
                                                       alldate={item.datetime}
                                                       info={item.professor_info}
                                                />
                                            )}})}
                                </div>
                            </td>
                            <td>
                                <div className='timetable__item'>
                                    {props.timetable?.wednesday
                                        .sort((a, b) => a.time.localeCompare(b.time))
                                        .map((item, key) => {
                                        const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                        if (props.timetable?.alldate[2] === formattedDate) {
                                            return (
                                                <Table key={key}
                                                       subj={item.subject}
                                                       teach={item.professor_firstname + " " + item.professor_lastname}
                                                       time={item.time.slice(0, -3)}
                                                       backgroundColor={"#FFF1A1"}
                                                       btn={"#FFEC7E"}
                                                       alldate={item.datetime}
                                                       info={item.professor_info}
                                                />
                                            )}})}
                                </div>
                            </td>
                            <td>
                                <div className='timetable__item'>
                                    {props.timetable?.thursday
                                        .sort((a, b) => a.time.localeCompare(b.time))
                                        .map((item, key) => {
                                        const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                        if (props.timetable?.alldate[3] === formattedDate) {
                                            return (
                                                <Table key={key}
                                                       subj={item.subject}
                                                       teach={item.professor_firstname + " " + item.professor_lastname}
                                                       time={item.time.slice(0, -3)}
                                                       backgroundColor={"#C5FFCA"}
                                                       btn={"#AFFFB7"}
                                                       alldate={item.datetime}
                                                       info={item.professor_info}
                                                />
                                            )}})}
                                </div>
                            </td>
                            <td>
                                <div className='timetable__item'>
                                    {props.timetable?.friday
                                        .sort((a, b) => a.time.localeCompare(b.time))
                                        .map((item, key) => {
                                        const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                        if (props.timetable?.alldate[4] === formattedDate) {
                                            return (
                                                <Table key={key}
                                                       subj={item.subject}
                                                       teach={item.professor_firstname + " " + item.professor_lastname}
                                                       time={item.time.slice(0, -3)}
                                                       backgroundColor={"#CCFFFF"}
                                                       btn={"#B0FFFF"}
                                                       alldate={item.datetime}
                                                       info={item.professor_info}
                                                />
                                            )}})}
                                </div>
                            </td>
                            <td>
                                <div className='timetable__item'>
                                    {props.timetable?.saturday
                                        .sort((a, b) => a.time.localeCompare(b.time))
                                        .map((item, key) => {
                                        const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                        if (props.timetable?.alldate[5] === formattedDate) {
                                            return (
                                                <Table key={key}
                                                       subj={item.subject}
                                                       teach={item.professor_firstname + " " + item.professor_lastname}
                                                       time={item.time.slice(0, -3)}
                                                       backgroundColor={"#CCFFFF"}
                                                       btn={"#B0FFFF"}
                                                       alldate={item.datetime}
                                                       info={item.professor_info}
                                                />
                                            )}})}
                                </div>
                            </td>
                            <td style={{height: "400px"}}>
                                <div className='timetable__item'>
                                    {props.timetable?.sunday
                                        .sort((a, b) => a.time.localeCompare(b.time))
                                        .map((item, key) => {
                                        const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                        if (props.timetable?.alldate[6] === formattedDate) {
                                            return (
                                                <Table key={key}
                                                       subj={item.subject}
                                                       teach={item.professor_firstname + " " + item.professor_lastname}
                                                       time={item.time.slice(0, -3)}
                                                       backgroundColor={"#CCFFFF"}
                                                       btn={"#B0FFFF"}
                                                       alldate={item.datetime}
                                                       info={item.professor_info}
                                                />
                                            )}})}
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <div className="cards_block">
                      {props.timetable.monday.map((item, index) => <TableMobile week={weekFull[0]} day={props.timetable.alldate[0]} key={index} btn={"#AFFFB7"} subj={item.subject} teach={item.professor_firstname + " " + item.professor_lastname} time={item.time.slice(0, -3)} backgroundColor={"#C5FFCA"} teacher={props.currentTeacher} setCurrentTeacherTC={props.setCurrentTeacherTC}/>)}
                      {props.timetable.tuesday.map((item, index) => <TableMobile week={weekFull[1]} day={props.timetable.alldate[1]} key={index} btn={item.btc} subj={item.subject} teach={item.professor_firstname + " " + item.professor_lastname} time={item.time} backgroundColor={item.backgroundColor} teacher={props.currentTeacher} setCurrentTeacherTC={props.setCurrentTeacherTC}/>)}
                      {props.timetable.wednesday.map((item, index) => <TableMobile week={weekFull[2]} day={props.timetable.alldate[2]} key={index} btn={item.btc} subj={item.subject} teach={item.professor_firstname + " " + item.professor_lastname} time={item.time} backgroundColor={item.backgroundColor} teacher={props.currentTeacher} setCurrentTeacherTC={props.setCurrentTeacherTC}/>)}
                      {props.timetable.thursday.map((item, index) => <TableMobile week={weekFull[3]} day={props.timetable.alldate[3]} key={index} btn={"#B0FFFF"} subj={item.subject} teach={item.professor_firstname + " " + item.professor_lastname} time={item.time} backgroundColor={"#CCFFFF"} teacher={props.currentTeacher} setCurrentTeacherTC={props.setCurrentTeacherTC}/>)}
                      {props.timetable.friday.map((item, index) => <TableMobile week={weekFull[4]} day={props.timetable.alldate[4]} key={index} btn={"#FFEC7E"} subj={item.subject} teach={item.professor_firstname + " " + item.professor_lastname} time={item.time} backgroundColor={"#FFF1A1"} teacher={props.currentTeacher} setCurrentTeacherTC={props.setCurrentTeacherTC}/>)}
                      {props.timetable.saturday.map((item, index) => <TableMobile week={weekFull[5]} day={props.timetable.alldate[5]} key={index} btn={item.btc} subj={item.subject} teach={item.professor_firstname + " " + item.professor_lastname} time={item.time} backgroundColor={item.backgroundColor} teacher={props.currentTeacher} setCurrentTeacherTC={props.setCurrentTeacherTC}/>)}
                      {props.timetable.sunday.map((item, index) => <TableMobile week={weekFull[6]} day={props.timetable.alldate[6]} key={index} btn={item.btc} subj={item.subject} teach={item.professor_firstname + " " + item.professor_lastname} time={item.time} backgroundColor={item.backgroundColor} teacher={props.currentTeacher} setCurrentTeacherTC={props.setCurrentTeacherTC}/>)}
                    </div>
                    </Spin>
                </div>
                : userRole === "professor" ? <Navigate to="/teachlk"/> : <Navigate to="/login"/>}
        </>
    );
});


export default Timetable;
