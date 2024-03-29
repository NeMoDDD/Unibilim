import React, {useEffect, useState} from "react";
import SideBar from "../SideBar/SideBar";
import "../../styles/__timetable.scss";
import Header from "../Header/HeaderS";
import Table from "./TimtetableComponents/TableLarge";
import TableMobile from "./TimtetableComponents/TableModile";
import {getNextTimetable, getPrevTimetable, getTimetable} from "../../redux/timetableReducer";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import moment from "moment";
import {Empty, Spin} from "antd";
import {motion} from "framer-motion";

const Timetable = React.memo((props) => {
    const firstDate = props.timetable?.alldate?.[0];
    const lastDate = props.timetable?.alldate[props.timetable.alldate.length - 1];
    const {token, userRole, userId} = useSelector(state => state.loginReducer)
    const {isFetching, allTimetable} = useSelector(state => state.timetableReducer)
    const dispatch = useDispatch()
    const getNextWeekHandler = () => {
        dispatch(getNextTimetable(props.timetable?.alldate[6]))
    }
    const getPrevWeekHandler = () => {
        dispatch(getPrevTimetable(props.timetable?.alldate[0]))
    }

    useEffect(() => {
        dispatch(getTimetable(token, userId))
    }, [dispatch,token,userId])
    console.log(props.timetable);
    return (
        <>
            <Header/>
            <SideBar/>
            {userRole === "student" ?
                props.timetable?.alldate &&
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.6}}
                    className={"timetable_block"}
                >
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
                                                if (props.timetable?.alldate.some((item) =>item === formattedDate)) { 
                                                    return (
                                                        <Table key={key}
                                                               subj={item.subject}
                                                               teach={item.professor_firstname + " " + item.professor_lastname}
                                                               time={item.time.slice(0, -3)}
                                                               backgroundColor={"#FFF1A1"}
                                                               btn={"#FFEC7E"}
                                                               alldate={item.datetime}
                                                               info={item.professor_info} 
                                                               videoLink={item?.jitsiLink}
                                                        />
                                                    )
                                                }
                                            })}
                                    </div>
                                </td>
                                <td>
                                    <div className='timetable__item'>
                                        {props.timetable?.tuesday
                                            .sort((a, b) => a.time.localeCompare(b.time))
                                            .map((item, key) => {
                                                const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                                if (props.timetable?.alldate.some((item) =>item === formattedDate)) { 
                                                    return (
                                                        <Table key={key}
                                                               subj={item.subject}
                                                               teach={item.professor_firstname + " " + item.professor_lastname}
                                                               time={item.time.slice(0, -3)}
                                                               backgroundColor={"#FFF1A1"}
                                                               btn={"#FFEC7E"}
                                                               alldate={item.datetime}
                                                               info={item.professor_info} 
                                                               videoLink={item?.jitsiLink}
                                                        />
                                                    )
                                                }
                                            })}
                                    </div>
                                </td>
                                <td>
                                    <div className='timetable__item'>
                                        {props.timetable?.wednesday
                                            .sort((a, b) => a.time.localeCompare(b.time))
                                            .map((item, key) => {
                                                const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1) 
                                                if (props.timetable?.alldate.some((item) =>item === formattedDate)) { 
                                                    return (
                                                        <Table key={key}
                                                               subj={item.subject}
                                                               teach={item.professor_firstname + " " + item.professor_lastname}
                                                               time={item.time.slice(0, -3)}
                                                               backgroundColor={"#FFF1A1"}
                                                               btn={"#FFEC7E"}
                                                               alldate={item.datetime}
                                                               info={item.professor_info} 
                                                               videoLink={item?.jitsiLink}
                                                        />
                                                    )
                                                }
                                            })}
                                    </div>
                                </td>
                                <td>
                                    <div className='timetable__item'>
                                        {props.timetable?.thursday
                                            .sort((a, b) => a.time.localeCompare(b.time))
                                            .map((item, key) => {
                                                const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                                if (props.timetable?.alldate.some((item) =>item === formattedDate)) { 
                                                    return (
                                                        <Table key={key}
                                                               subj={item.subject}
                                                               teach={item.professor_firstname + " " + item.professor_lastname}
                                                               time={item.time.slice(0, -3)}
                                                               backgroundColor={"#C5FFCA"}
                                                               btn={"#AFFFB7"}
                                                               alldate={item.datetime}
                                                               info={item.professor_info} 
                                                               videoLink={item?.jitsiLink}
                                                        />
                                                    )
                                                }
                                            })}
                                    </div>
                                </td>
                                <td>
                                    <div className='timetable__item'>
                                        {props.timetable?.friday
                                            .sort((a, b) => a.time.localeCompare(b.time))
                                            .map((item, key) => {
                                                const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                                if (props.timetable?.alldate.some((item) =>item === formattedDate)) { 
                                                    return (
                                                        <Table key={key}
                                                               subj={item.subject}
                                                               teach={item.professor_firstname + " " + item.professor_lastname}
                                                               time={item.time.slice(0, -3)}
                                                               backgroundColor={"#CCFFFF"}
                                                               btn={"#B0FFFF"}
                                                               alldate={item.datetime}
                                                               info={item.professor_info}
                                                               videoLink={item?.jitsiLink}
                                                        />
                                                    )
                                                }
                                            })}
                                    </div>
                                </td>
                                <td>
                                    <div className='timetable__item'>
                                        {props.timetable?.saturday
                                            .sort((a, b) => a.time.localeCompare(b.time))
                                            .map((item, key) => { 
                                                const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1) 
                                                if (props.timetable?.alldate.some((item) =>item === formattedDate)) {  
                                                    // if (props.timetable?.alldate[5] === formattedDate) {
                                                    return (
                                                        <Table key={key}
                                                               subj={item.subject}
                                                               teach={item.professor_firstname + " " + item.professor_lastname}
                                                               time={item.time.slice(0, -3)}
                                                               backgroundColor={"#CCFFFF"}
                                                               btn={"#B0FFFF"}
                                                               alldate={item.datetime}
                                                               info={item.professor_info} 
                                                               videoLink={item?.jitsiLink}
                                                        />
                                                    )
                                                }
                                            })}
                                    </div>
                                </td>
                                <td style={{height: "400px"}}>
                                    <div className='timetable__item'>
                                        {props.timetable?.sunday
                                            .sort((a, b) => a.time.localeCompare(b.time))
                                            .map((item, key) => {
                                                const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1) 
                                                // if (props.timetable?.alldate[6] === formattedDate) {
                                                if (props.timetable?.alldate.some((item) =>item === formattedDate)) { 
                                                    return (
                                                        <Table key={key}
                                                               subj={item.subject}
                                                               teach={item.professor_firstname + " " + item.professor_lastname}
                                                               time={item.time.slice(0, -3)}
                                                               backgroundColor={"#CCFFFF"}
                                                               btn={"#B0FFFF"}
                                                               alldate={item.datetime}
                                                               info={item.professor_info} 
                                                               videoLink={item?.jitsiLink}
                                                        />
                                                    )
                                                }
                                            })}
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        {/* МОБИЛКИ */}
                        <div className="cards_block">  
                        {allTimetable.length === 0 && <div className="timetable__empty__feedback"><Empty className="timetable__empty__feedback_inner" description={"У вас пока нет уроков"} /></div>}
                            {
                                props.timetable.monday
                                    .sort((a, b) => a.time.localeCompare(b.time))
                                    .map((item, index) => {
                                        const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                        if (props.timetable?.alldate.some((item) =>item === formattedDate)) { 
                                            return (
                                                <TableMobile alldate={item.datetime} key={index}
                                                             subj={item.subject}
                                                             teach={item.professor_firstname + " " + item.professor_lastname}
                                                             time={item.time.slice(0, -3)}
                                                             backgroundColor={"#FFF1A1"} 
                                                             videoLink={item?.jitsiLink}
                                                             btn={"#FFEC7E"} info={item.professor_info}/>)
                                        }
                                    })
                            }
                            {
                                props.timetable.tuesday
                                    .sort((a, b) => a.time.localeCompare(b.time))
                                    .map((item, index) => {
                                        const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                        if (props.timetable?.alldate.some((item) =>item === formattedDate)) { 
                                            return (
                                                <TableMobile alldate={item.datetime} key={index}
                                                             subj={item.subject}
                                                             teach={item.professor_firstname + " " + item.professor_lastname}
                                                             time={item.time.slice(0, -3)} 
                                                             videoLink={item?.jitsiLink}
                                                             backgroundColor={"#FFF1A1"}
                                                             btn={"#FFEC7E"} info={item.professor_info}/>)
                                        }
                                    })
                            }
                            {props.timetable.wednesday
                                .sort((a, b) => a.time.localeCompare(b.time))
                                .map((item, index) => {
                                    const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                    if (props.timetable?.alldate.some((item) =>item === formattedDate)) { 
                                        return (
                                            <TableMobile alldate={item.datetime} key={index} subj={item.subject}
                                                         teach={item.professor_firstname + " " + item.professor_lastname}
                                                         time={item.time.slice(0, -3)} backgroundColor={"#FFF1A1"} 
                                                         videoLink={item?.jitsiLink}
                                                         btn={"#FFEC7E"} info={item.professor_info}/>)
                                    }
                                })}
                            {props.timetable.thursday
                                .sort((a, b) => a.time.localeCompare(b.time))
                                .map((item, index) => {
                                    const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                    if (props.timetable?.alldate.some((item) =>item === formattedDate)) { 
                                        return (
                                            <TableMobile alldate={item.datetime} key={index}
                                                         subj={item.subject}
                                                         teach={item.professor_firstname + " " + item.professor_lastname}
                                                         time={item.time.slice(0, -3)} backgroundColor={"#C5FFCA"} 
                                                         videoLink={item?.jitsiLink}
                                                         btn={"#AFFFB7"} info={item.professor_info}/>)
                                    }
                                })}
                            {props.timetable.friday
                                .sort((a, b) => a.time.localeCompare(b.time))
                                .map((item, index) => {
                                    const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                    if (props.timetable?.alldate.some((item) =>item === formattedDate)) { 
                                        return (
                                            <TableMobile alldate={item.datetime} key={index}
                                                         subj={item.subject}
                                                         teach={item.professor_firstname + " " + item.professor_lastname}
                                                         time={item.time.slice(0, -3)} backgroundColor={"#CCFFFF"} 
                                                         videoLink={item?.jitsiLink}
                                                         btn={"#B0FFFF"} info={item.professor_info}/>)
                                    }
                                })}
                            {props.timetable.saturday
                                .sort((a, b) => a.time.localeCompare(b.time))
                                .map((item, index) => {
                                    const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                    if (props.timetable?.alldate.some((item) =>item === formattedDate)) { 
                                        return (
                                            <TableMobile alldate={item.datetime} key={index}
                                                         subj={item.subject}
                                                         teach={item.professor_firstname + " " + item.professor_lastname}
                                                         time={item.time.slice(0, -3)} backgroundColor={"#CCFFFF"} 
                                                         videoLink={item?.jitsiLink}
                                                         btn={"#B0FFFF"} info={item.professor_info}/>)
                                    }
                                })}
                            {props.timetable.sunday
                                .sort((a, b) => a.time.localeCompare(b.time))
                                .map((item, index) => {
                                    const formattedDate = moment(item.datetime).format("DD MMM").slice(0, -1)
                                    if (props.timetable?.alldate.some((item) =>item === formattedDate)) { 
                                        return (
                                            <TableMobile alldate={item.datetime} key={index} btn={"#B0FFFF"}
                                                         subj={item.subject}
                                                         teach={item.professor_firstname + " " + item.professor_lastname} 
                                                         videoLink={item?.jitsiLink}
                                                         time={item.time.slice(0, -3)} backgroundColor={"#CCFFFF"}
                                                         info={item.professor_info}/>)
                                    }
                                })}
                        </div>
                    </Spin>
                </motion.div>
                : userRole === "professor" ? <Navigate to="/teachlk"/> : <Navigate to="/login"/>} 
        </>
    );
});


export default Timetable;
